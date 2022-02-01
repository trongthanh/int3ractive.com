---
title: "Hướng dẫn: Cài đặt hoàn chỉnh Nodejs app lên VPS Ubuntu - Phần 1"
subtitle: Cài đặt NGINX, Git, NodeJS, MongoDB, và Keystone app lên server Ubuntu 16.04 LTS
author: Thanh Tran
metaDesc: Hướng dẫn cài đặt Nginx, Git, Node.js, MongoDB, và sản phẩm viết bằng Keystone.js lên server Ubuntu 16.04 LTS
date: 2017-09-28T01:07:53+07:00
updated: 2018-09-26T23:12:12+0700
tags: [devops, vietnamese, nodejs, webapp]
coverImage: /images/2017/keystone-mongo-node-ubuntu.png
cover-darken: true
---

## Giới Thiệu

NodeJS tuy phát triển mạnh mẽ những năm gần đây nhưng tại Việt Nam vẫn còn ít lựa chọn để triển khai (deploy) lên Internet cho công chúng. Các dịch vụ "app engine" cho NodeJS của nước ngoài như [Heroku](https://www.heroku.com/), [Nodejitsu](https://nodejitsu.com/), [now.sh](https://zeit.co/now)... khó tiếp cận cho developer ở Việt Nam. Ngoài ra các dịch vụ trên còn nhiều hạn chế chẳng hạn: chưa có data center đặt tại Việt Nam, không kèm giải pháp database hoặc nếu có cũng là dạng add-on.

Để cài đặt một web app viết bằng NodeJS, cách đơn giản nhất và tiết kiệm chi phí nhất hiện nay chính là sử dụng **Cloud VPS**[^1]. Cloud VPS là một server toàn quyền được ảo hóa trên một server vật lý, có tài nguyên và băng thông được dành riêng. Ở Việt Nam, hiện đã có nhiều nhà cung cấp dịch vụ Cloud VPS với chi phí khá tiết kiệm (cấu hình thấp nhất có chi phí khoảng 150k/tháng). (Vì đây là bài hướng dẫn kỹ thuật nên tôi sẽ không giới thiệu cụ thể nhà cung cấp nào).

Trong bài viết này, tôi sẽ hướng dẫn bạn cài đặt một NodeJS app (cụ thể viết bằng [KeystoneJS](http://keystonejs.com/)) lên một VPS **Ubuntu 16.04 LTS**[^2] với kết quả mong muốn như sau:

- Website tải cực nhanh
- Các tài nguyên tĩnh có cache header để tối ưu thời gian tải cho lần xem sau
- Các tài nguyên tĩnh được gzip để tối ưu băng thông
- Được mã hóa TLS với chữ ký số hợp lệ (miễn phí)
- Có thể cài đặt và chạy thêm app trên cùng server

## Cài Đặt Server

Sau khi bạn tạo một Cloud VPS mới, thường thì nó sẽ ở trạng thái mặc định, tức là chưa có thêm bất cứ ứng dụng nào khác được cài thêm. Một số nhà cung cấp VPS thì có thể "nhanh nhảu" cài sẵn Apache HTTP server, tuy nhiên chúng ta sẽ không dùng Apache trong hướng dẫn này, nên có thể bạn phải cần [remove](https://askubuntu.com/questions/176964/permanently-removing-apache2){:target="_blank"} nó khỏi hệ thống.

Ngoài ra, tùy nhà cung cấp VPS mà bạn sẽ được cấp tài khoản **root** hoặc tài khoản user bình thường nhưng có quyền `sudo`. Trong trường hợp bạn có tài khoản root thì sẽ không cần chạy những dòng lệnh bắt đầu bằng `sudo`[^3].

Bạn sẽ truy cập vào server thông qua giao thức SSH và sẽ cấu hình server bằng dòng lệnh trong một cửa sổ terminal. Nếu bạn dùng Windows, tham khảo hướng dẫn kết nối SSH vào Linux server tại [đây](https://support.rackspace.com/how-to/connecting-to-linux-from-windows-by-using-putty/){:target="_blank"} và [đây](http://www.wikihow.com/SSH-to-a-Server){:target="_blank"}

![SSH terminal window](/images/2017/ssh-terminal-macos.png)_Giao diện dòng lệnh SSH terminal trên macOS_

Trước khi tiến hành cài đặt các phần mềm cần thiết, bạn cần cập nhật server Ubuntu với những package mới nhất:

```shell
sudo apt update && sudo apt upgrade -y
```

### Cài đặt NGINX và Git

Đầu tiên chúng ta sẽ cài 2 phần mềm có sẵn trong repository của Ubuntu: **nginx** & **git**

```shell
sudo apt install -y nginx git
```

> **NGINX** sẽ đóng vai trò _reversed proxy_ và _static file server_ để tiếp nhận request thông qua port mặc định 80 (http) và 443 (https). **Git** dùng để lấy source code của app để tiến hành build và deploy.

### Cài đặt NodeJS VM:

Tùy vào yêu cầu phiên bản Node của web app, bạn sẽ cài phiên bản Node engine tương ứng. Ở đây chúng ta sẽ dùng Node 8 LTS làm ví dụ.

Thêm repository source cho **NodeJS 8 LTS** [(link tham khảo)](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions):

```shell
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
```

Sau đó cài NodeJS lên server:

```shell
sudo apt install -y nodejs
```

> Hướng dẫn này chỉ sử dụng một phiên bản Node. Nếu có yêu cầu cài đặt nhiều app trên cùng một server và sử dụng nhiều phiên bản Node khác nhau, bạn cân nhắc cài đặt Node thông qua trình quản lý nhiều phiên bản Node như [nvm]( https://github.com/creationix/nvm) hoặc [n package](https://www.npmjs.com/package/n)

### Cài đặt MongoDB:

KeystoneJS yêu cầu [database MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/). Đầu tiên là thêm PGP key cho MongoDB repository:

```shell
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
```

Thêm repository source của MongoDB dành riêng cho Ubuntu 16.04:

```shell
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```

Tiến hành cài MongoDB:

```shell
sudo apt update && sudo apt install -y mongodb-org
```

Khởi động dịch vụ `mongod` lần đầu tiên và đăng ký để nó tự chạy lúc restart server:

```shell
# Khởi động mongod service
sudo systemctl start mongod
# Bật chức năng tự chạy khi restart Ubuntu
sudo systemctl enable mongod
```

### Tất cả trong một

Trên đây là hướng dẫn từng bước để các bạn hiểu rõ mình đang làm những gì để khởi tạo server mới. Một khi đã hiểu rõ, bạn có thể viết tất cả những dòng lệnh đó vào một file bash script như [ở Gist này](https://gist.github.com/trongthanh/e05524446249ad7727b78941f0e93a01) và thực thi nó:

```shell
# Thêm quyền thực thi cho file bash script
chmod +x initialize.sh

# Chạy file bash script này
./intialize.sh
```

## Tải mã nguồn của app từ Git host và build app

Trong hướng dẫn này, chúng ta sẽ lấy mã nguồn của app từ một trong 3 Git host phổ biến là Github, Bitbucket, và Gitlab và build ngay tại server.

Trước tiên, chúng ta sẽ tạo khóa SSH mặc định trên server bằng các bước sau (Enter mặc định với tất cả các câu hỏi):

```shell
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Xuất nội dung của public key ra terminal để copy:

```shell
cat ~/.ssh/id_rsa.pub
```

Tại trang settings của project trên Git host, thêm deploy key và paste nội dung của file `id_rsa.pub` vừa mới copy ở trên.

- Tại Bitbucket, vào Settings > Chọn tiếp Access Keys
- Tại Github, vào Settings > Chọn Deploy Keys
- Tại Gitlab, vào Settings > Repository > Deploy Keys

![Add deploy key]({{ "/images/2017/bitbucket-deploy-key.png" | url }})_Ảnh chụp popup thêm Access key của Bitbucket._

Quay trở lại terminal của server, tạo thư mục để chứa mã nguồn của app sẽ được clone vào:

```shell
sudo mkdir -p /apps/my-node-app
# Đổi owner của thư mục về user hiện tại để tiện chạy các lệnh sau đó
sudo chown -R $USER /apps/my-node-app/
```

Lệnh ở trên sẽ tự động tạo 2 cấp thư mục `/apps/my-node-app` tại root.

> Theo quy ước, các app 3rd-party cài trên Linux thường được cài tại thư mục `/opt`. Tuy nhiên, đây là ứng dụng đặc biệt do chúng ta viết riêng nên chúng ta sẽ cài vào `/apps` để tách bạch.

Tiếp theo, clone Git repo của app vào thư mục vừa tạo (lưu ý sử dụng lệnh clone với giao thức SSH).

```shell
git clone git@bitbucket.org:<username>/<repo-name>.git /apps/my-node-app/
```

> Với bản Gitlab mới nhất, bạn còn một lựa chọn nữa để lấy source từ Gitlab đó là dùng [Deploy Token](https://docs.gitlab.com/ee/user/project/deploy_tokens/). Khi đó, URL để clone source có dạng: `https://<username>:<deploy_token>@gitlab.com/user/my-node-app.git`

### Build app

Với một Node.js app chuẩn, việc đầu tiên chúng ta cần làm là **cd** vào thư mục gốc của project, và chạy lệnh cài tự động các dependency package được liệt kê trong **package.json**:

```shell
npm install
```

Sau đó, tùy vào cài đặt của dự án, ta cần chạy các lệnh để build các thành phần cần biên dịch hoặc tối ưu hóa từ mã nguồn.

Theo thông lệ chung của các NodeJS app, việc build project sẽ thông qua một lệnh script được config sẵn trong package.json, VD:

```json
{
    "scripts": {
        "build": "gulp build"
    }
}
```

Do đó, việc tiếp theo sẽ là chạy script build này bằng npm:

```shell
npm run build
```

Tới đây, chúng ta đã có thể chạy thử app bằng lệnh `node keystone.js` (giả sử `keystone.js` là điểm start của app) và preview tại IP của server và port mặc định 3000 (VD: http://12.34.56.789:3000).

Với những bước cài đặt vừa rồi, bạn đã có thể chạy app cho môi trường TEST hoặc STAGING và có thể demo với khách hàng. Để giữ cho app demo tiếp tục chạy sau khi thoát SSH, bạn có thể dùng dòng lệnh `screen` (xem [hướng dẫn](https://askubuntu.com/questions/904373/how-to-use-screen-command)).

Trong phần tiếp theo tôi sẽ hướng dẫn chạy app như service, đưa ra ngoài port chuẩn của web, bật mã hóa TLS/SSL... để sẵn sàng cho Production.

(Xem tiếp [phần 2](https://int3ractive.com/2018/09/huong-dan-cai-dat-nodejs-app-len-vps-phan-2.html))

---
[^1]: Virtual Private Server
[^2]: Có thể bạn sẽ thắc mắc sao không dùng CentOS/RedHat có thiết kế bảo mật cao hơn. Theo tôi, với đại đa số những web app thông thường, Ubuntu là lựa chọn cân bằng giữa sự anh ninh và tính dễ dùng, dễ cài đặt của dòng Linux Debian.
[^3]: Bạn cần có chút kiến thức về Linux và bash command line để làm theo tutorial này dễ dàng hơn.

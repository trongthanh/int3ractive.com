---
layout: post
title: "Hướng dẫn: Cài đặt hoàn chỉnh Nodejs app lên VPS Ubuntu - Phần 2"
subtitle: Chạy app như dịch vụ, serve app qua Nginx reversed proxy và bật HTTPS
author: Thanh Tran
description:
date: 2018-09-26T23:14:10+07:00
tags: [devops, vietnamese, nodejs, webapp]
image:
---

Tóm tắt [phần 1](https://int3ractive.com/2017/09/huong-dan-cai-dat-nodejs-app-len-vps-phan-1.html):

- Bạn đã cài các phần mềm cần thiết để chạy app: NodeJS, MongoDB, Nginx, Git.
- App deploy bằng source từ Git host, và clone về tại `/apps/my-node-app`
- App đã được build và chạy tại port 3000 của server

## Hạn chế quyền truy cập của app

Đây là bước không bắt buộc, tuy nhiên tôi khuyến cáo không nên bỏ qua, nhất là bạn đang truy cập vào VPS bằng tài khoản root. Chúng ta sẽ tạo một Linux user mới và gán cho thư mục của app.

```sh
# Tạo một Linux user mới, nên dùng tên của app và không để khoảng trắng
sudo useradd my-node-app
# Chuyển quyền sở hữu (owner) thư mục app và các thư mục con cho user mới
sudo chown -R my-node-app /apps/my-node-app
```

Trong bước tiếp theo, khi chạy app như dịch vụ, app sẽ được chạy với quyền của user mới này để hạn chế quyền truy cập của app lên các thư mục hệ thống.

## Chạy app như dịch vụ

Tiếp theo chúng ta sẽ cài đặt để chạy app như dịch vụ và tự động chạy lại khi server được restart. Có một số tutorial hướng dẫn chạy app với [**pm2**](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04), nhưng hôm nay tôi sẽ hướng dẫn dùng dịch vụ **systemd** của Ubuntu 16 và các HĐH Linux mới.

Đầu tiên, chúng ta sẽ chạy một số lệnh để lấy thông tin cho config systemd:

```shell
# Lấy đường dẫn tuyệt đối đến node VM
which node
# -> /usr/bin/node

# Lấy đường dẫn tuyệt đối đến thư mục của app
pwd
# -> /root/apps/my-node-app

# Lấy thông tin user hiện tại (bỏ qua nếu chúng ta đã tạo user ở trên)
id
# -> uid=0(root) gid=0(root) groups=0(root)
```

Tiếp theo, tạo file service config cho systemd:

```shell
sudo nano /etc/systemd/system/my-node-app.service
```

- `nano` là editor trên terminal dễ dùng nhất. Bạn có thể thay `nano` bằng `vim` nếu nó là editor quen thuộc với bạn hơn.
- Tên file `my-node-app.service` là do bạn đặt nhưng cần giữ nguyên đuôi `.service`

Paste vào editor nội dung sau:

```ini
[Unit]
Description=Thay bằng nội dung mô tả app của bạn
Requires=mongod.service
After=mongod.service

[Service]
ExecStart=/usr/bin/node /root/apps/my-node-app/keystone.js
WorkingDirectory=/root/apps/my-node-app
Restart=always
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=my-node-app
User=my-node-app
Group=my-node-app
Environment=PORT=3000
Environment=MONGO_URL=mongodb://localhost:27017/my-node-app

[Install]
WantedBy=multi-user.target
```

Một vài điều lưu ý khi chỉnh sửa file .service trên:

- Hai thuộc tính `Requires` và `After` để cho systemd biết chỉ kích hoạt dịch vụ này khi service chỉ định tại `Requires` và `After` đã được chạy (Trong trường hợp server phải restart và có rất nhiều service cần chạy lúc khởi động). Trong ví dụ này, `mongod.service` là tên service của MongoDB khi được cài như hướng dẫn trong phần một.
- `ExecStart` là nơi thực thi lệnh cho dịch vụ, và yêu cầu đường dẫn phải tuyệt đối.
- `WorkingDirectory` là thư mục ngữ cảnh khi lệnh được thực thi.
- `SyslogIdentifier` là tên định danh của dịch vụ trong logger hệ thống, chúng ta sẽ dùng nó để lọc các output hoặc báo lỗi của app như trong phần tiếp theo.
- `User` và `Group` là tên của Linux user mà chúng ta muốn app sử dụng khi chạy. Như đã nói ở trên, bạn có thể dùng user mới tạo là `my-node-app` hoặc tên của user trả về ở dòng lệnh `id`.
- `Environment` là nơi để bạn gán các biến môi trường lúc thực thi app. Với Keystonejs thì có thể bạn không cần sử dụng thuộc tính này vì nó sử dụng `.env` (dotenv).
- Những thuộc tính còn lại nên để giá trị như ví dụ.

Sau khi bạn đã tạo xong file .service, bạn có thể thử chạy app ngay thông qua lệnh sau:

```sh
# Bắt đầu chạy app như dịch vụ (không cần đường dẫn đến file .service)
sudo systemctl start my-node-app.service

# Kiểm tra trạng thái app đang chạy hay không
sudo systemctl status my-node-app.service
# -> Nếu app chạy thành công, output sẽ có dòng: ...Active: active (running)...
```

Cuối cùng, sau khi app đã được chạy thành công và bạn có thể vào qua port 3000, bật chức năng dịch vụ tự khởi động khi server được restart:

```sh
sudo systemctl enable my-node-app.service
# -> Created symlink from ... to ...
```

## Proxy app ra cổng 80 bằng NGINX

**Nginx** sẽ đóng vai trò _reversed proxy_ và _static file server_. Nó sẽ tiếp nhận request từ ngoài Internet thông qua port mặc định 80 (http) và 443 (https) và forward request qua port cùa app là 3000.

Đối với Ubuntu[^1], 2 file config chính của Nginx nằm ở: `/etc/nginx/nginx.conf` (config toàn server) và `/etc/nginx/sites-available/default` (config cho từng web host ảo[^2]).

Bước này yêu cầu bạn đã cấu hình DNS của domain trỏ đến địa chỉ IP tĩnh của VPS (VD: mynodeapp.com). Sau đó bạn vào chỉnh sửa file `/etc/nginx/sites-available/default`, thay toàn bộ nội dung mặc định bằng mẫu bên dưới. 

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    # File mặc định khi vào thư mục 
    index index.html index.htm;
    
    # Điều chỉnh kích thước gói upload tối đa 
    client_max_body_size 25M;

    # Domain name của web app, có thể một hoặc nhiều domain cùng trỏ đến
    server_name mynodeapp.com www.mynodeapp.com;
    
    # Forward toàn bộ request sang web app
    location / {
        # Thay đổi port nếu node-web-app chạy trên port khác 3000
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Nếu muốn dùng cùng config cho nhiều web host ảo, bạn có thể chuyển một số directive ở trên như `index`, `client_max_body_size` vào trong config toàn server tại `/etc/nginx/nginx.conf`.

Sau khi chỉnh sửa xong Nginx config như trên. Bạn có thể thử kiểm tra config mới có hợp lệ hay không bằng lệnh:

```sh
sudo nginx -t
# -> nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
# -> nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Nếu config mới OK, bạn khởi động lại Nginx bằng lệnh sau:

```sh
sudo systemctl restart nginx 
```
Sau khi Nginx được restart, bạn vào thử website tại domain đã cài đặt ở trên với URL không thêm port (http://my-node-app.com). Nếu website hiện ra thì bạn đã cài đặt thành công. Nếu bạn thấy lỗi "Bad Gateway", tức là cấu hình Nginx vừa rồi chưa thành công và cần phải rà soát lại.

## Serve file tĩnh bằng NGINX

Một trong những lý do tôi hướng dẫn bạn sử dụng Nginx, ngoài việc để bật https, còn là để serve file tĩnh (static file) hiệu quả hơn. Nếu như các file tĩnh của web app được thiết kế sử dụng CDN thì bạn có thể không cần bước này.

Nginx serve file tĩnh cực nhanh với lượng kết nối đồng thời cao (concurrency). Việc bật header `cache-ontrol` với Nginx rất dễ dàng sẽ giúp tăng hiệu quả tải trang. Ngoài ra bạn còn có thể bật **gzip** khi serve file tĩnh, là một yêu cầu không thể thiếu khi tối ưu hóa việc tải trang từ phía server.

Để serve file tĩnh, chúng ta sẽ thêm bộ lọc `location` vào block `server` của host config ở trên. Đối với KeystoneJS, chúng ta có một thư mục file tĩnh mặc định đó là `public` và với ví dụ từ đầu đến giờ, đường dẫn đến thư mục này sẽ là `/apps/my-node-app/public`. Ngoài ra, nếu bạn có một thư mục để upload riêng và nằm ngoài thực mục public này, thì bạn cũng cần ghi lại đường dẫn để config như tiếp theo sau đây:

```nginx
# thêm directive location trong config /etc/nginx/sites-available/default
server {
    # ...Các config khác đã ẩn... 
	
    # Hướng dẫn cho Nginx serve tĩnh các file và folder bên trong public, 
    # có tên bắt đầu bằng một trong những pattern như bên dưới
    location ~ ^/(fonts/|img/|javascript/|js/|script/|css/|stylesheets/|flash/|media/|static/|upload/|robots.txt|humans.txt|favicon.ico) {
        # đường dẫn tuyệt đối đến thư mục file tĩnh
        root /apps/my-node-app/public;
        access_log off;
        # bật cache-control lên với thời gian expire tối đa
        expires max; 
	}
	
	# Nếu bạn có thư mục upload bên ngoài, bạn cần thêm một directive `location` đến thư mục này
	# Xem document của Nginx để biết thêm cách cấu hình location
	
    # Đặt directive location / (app reversed proxy) ở dưới cùng
    location / {
        # ...
    }
}
```

Để bật gzip, bạn có thể vào file `/etc/nginx/nginx.conf`, và bỏ comment (dấu #) ở những dòng config gzip như bên dưới:

```nginx
http {
    # ...Các config khác đã ẩn... 
    
    ##
    # Gzip Settings
    ##

    gzip on;
    gzip_disable "msie6";

    gzip_vary on;
    gzip_proxied any;
    # gzip_comp_level 6;
    # gzip_buffers 16 8k;
    # gzip_http_version 1.1;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
}
```

Trong danh sách các loại file tĩnh được nén với gzip ở trên (`gzip_types`), tôi đã thêm SVG. Bạn có thể thêm các loại file khác nếu danh sách chưa có, nhưng không nên thêm các file ảnh bởi chúng đã được nén bằng thuật toán riêng và sẽ không hiệu quả khi nén tiếp với gzip.

## Lấy chữ ký số từ Let's Encrypt và cài đặt cho NGINX

Để một trang web được mã hóa an toàn thông qua giao thức HTTPS, bạn cần một chứng thư số (certificate) TLS/SSL để chứng thực cho những domain mà bạn sử dụng. TLS/SSL certificate phải được ký bởi một CA (Certificate Authority) hợp lệ, và trước đây chúng ta phải trả một khoản phí để đăng ký với CA. Tuy nhiên, từ bây giờ chúng ta đã có thêm [Let's Encrypt](https://letsencrypt.org/) là một CA cung cấp TLS/SSL certificate hoàn toàn miễn phí.

Có nhiều cách để cài đặt certificate Let's Encrypt nhưng đơn giản nhất trên Linux kết hợp với Nginx là sử dụng công cụ dòng lệnh [Certbot](https://certbot.eff.org/lets-encrypt/ubuntuxenial-nginx). Ở đây tôi sẽ tóm tắt các bước cần thực hiện:

```sh
# Chạy các lệnh sau để cài đặt lệnh certbot kèm plugin Nginx trên Ubuntu
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx 
```

Sau khi **certbot** được cài, bạn có thể chạy lệnh sau để bắt đầu tiến trình cài đặt certificate cho website với Nginx plugin:

```sh
sudo certbot --nginx
```

Sau khi gọi lệnh trên, bạn sẽ nhập thông tin theo yêu cầu:

- Đầu tiên, certbot sẽ đọc Nginx config và liệt kê các tên miền hiện có. Bạn sẽ nhập vào con số gắn với tên miền (1, 2..) hoặc Enter bỏ trống để chọn tất cả.
- Certbot cũng sẽ hỏi bạn có muốn thêm Nginx config để tự động redirect từ HTTP sang HTTPS không[^3]. Tùy vào yêu cầu dự án, nhưng khả năng cao là bạn nên chọn "2: Redirect".
- Certbot cũng sẽ hỏi một số thông tin về email liên lạc và một số thỏa thuận khác.

Certbot sẽ tự động xác nhận quyền sở hữu domain thông qua Nginx server và domain của bạn đã được trỏ về IP của VPS trước đó. Certbot cũng sẽ tự động lưu certificate xuống VPS, cấu hình lại Nginx config và khởi động lại Nginx giùm bạn. Ngay sau khi kết thúc cài đặt với certbot, bạn đã có thể thử vào website với scheme `https://`.

Certificate mà Let's Encrypt cấp cho bạn chỉ có thời hạn 3 tháng. Trước đây, khi gần đến thời hạn 3 tháng, bạn phải gọi lại `sudo certbot renew` để xin cấp lại certificate mới và phải khởi động lại Nginx. Giờ đây với Nginx plugin thì certbot sẽ tự động renew cho bạn và bạn không cần phải làm gì nữa cả sau khi hoàn tất bước này.

## Thêm: Xem log và thông báo lỗi của app

Ngoài lệnh `systemctl status` để biết trạng thái chạy của app, với các chương trình chạy bằng systemd, bạn có thể xem log (cả console log và thông báo lỗi) của chúng bằng lệnh `journalctl`.

Sau đây là một số lệnh tôi thường dùng để xem lại console log của app trong lúc đang chạy:

```sh
# Xem lại tất cả các log output của app
# Bạn còn nhớ `SyslogIdentifier` ở trên? 
# Đặt chuỗi đó sau tham số -u để chỉ hiển thị log cho my-node-app
sudo journalctl -u my-node-app
# Nếu log quá nhiều, bạn có thể nhảy dòng bằng các phím tắt của vim

# Hiển thị 100 dòng log gần nhất
sudo journalctl -n 100 -u my-node-app

# Hiển thị log của app trong khoảng thời gian chỉ định
sudo journalctl -u my-node-app --since "2018-09-20" --until "2018-09-26 03:00"

# Hiển thị log gần đây nhất của app, sau đó tiếp tục chờ để
# hiển thị các log tiếp theo khi app đang chạy
# `-f` là tiếp tục chờ, 
# `-o cat` là hiển thị log không có timestamp và id phía trước 
sudo journalctl -f -o cat -u my-node-app
```

## Lời kết

Vậy là chúng ta đã hoàn tất cài đặt một Node Web app lên Ubuntu VPS với cách thức tối ưu nhất và tiết kiệm tài nguyên nhất. Với cấu hình này, bạn có thể chạy nhiều web app trên cùng VPS, bằng cách chạy app thứ hai trên một port mới (VD: 3001) và thêm một web host ảo trong Nginx config như ở trên, với `server_name` là tên domain cho web app thứ hai...

Tuy nhiên đây là cách cài đặt gắn chặt với môi trường của HĐH Ubuntu. Nói như vậy để phân biệt với một số cách cài đặt sản phẩm phần mềm được cho là _hiện đại_ hơn, sử dụng container, mà phổ biến nhất là [Docker](https://www.docker.com/). Theo tôi việc deploy sản phẩm bằng container sẽ giúp quy trình CI[^4] được thực hiện dễ dàng hơn, không còn phụ thuộc vào Linux distro, và developer có thể giao việc deploy hoàn toàn cho devops mà không phải bận tâm. Tuy nhiên nó đòi hỏi developer phải có thêm kiến thức khá sâu về devops cũng như cách sử dụng docker ở vai trò người tạo. 

Docker vẫn là một thứ khá mới mẻ đối với tôi và tôi vẫn đang nghiên cứu cách thức triển khai sản phẩm Node app trên Docker. Nếu nó thật sự hiệu quả và dễ tiếp cận, tôi sẽ viết tiếp chủ đề này với container.	


---
[^1]: Đối với CentOS hay distro khác, đường dẫn đến config của Nginx sẽ khác.

[^2]: Tùy cách quản lý, bạn có thể tạo nhiều file conf khác nhau trong `/etc/nginx/sites-available`, mỗi file dùng để config một web host ảo khác nhau. Nếu bạn tạo thêm file khác, bạn phải tạo một symlink từ `/etc/nginx/sites-available` sang thư mục `/etc/nginx/sites-enabled/` thì config cho site mới mới có hiệu lực. Dù vậy, thói quen riêng của tôi là để các block `server` vào cùng file `default` để dễ quản lý và theo dõi hơn vì số lượng web host trên một VPS không quá nhiều.

[^3]: Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.

[^4]: Continuous integration - test, build, deploy tự động và liên tục


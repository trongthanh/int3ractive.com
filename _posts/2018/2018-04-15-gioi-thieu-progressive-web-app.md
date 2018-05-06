---
layout: post
title: Giới thiệu Progressive Web App
subtitle: Tương lai của web app trên thiết bị di động.
author: Thanh Tran
description:
date: 2018-05-05T15:58:23+07:00
tags: [Vietnamese, Front End, JavaScript, Mobile Web, Web App]
image: img/2018/pwa/pwa-logo.png
---
<center><small><em>(Hình cover: Logo <a href="https://medium.com/samsung-internet-dev/we-now-have-a-community-approved-progressive-web-apps-logo-823f212f57c9">không chính thức</a> của PWA)</em></small></center>

Progressive Web App (PWA) là một dạng ứng dụng web (web app) mới đang thu hút rất nhiều sự quan tâm từ các nhà phát triển web khắp thế giới và các doanh nghiệp hoạt động trực tuyến, tuy nhiên nó vẫn còn khá mới mẻ tại Việt Nam.

Đã có nhiều bài viết liên quan đến PWA dành cho [lập](https://addyosmani.com/blog/getting-started-with-progressive-web-apps/) [trình](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/) [viên](https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/), cho nên trong bài viết này tôi sẽ cố gắng giải thích PWA cho người dùng Web phổ thông.

## Progressive Web App là gì?

**PWA là ứng dụng web được viết để tận dụng những tính năng mới nhất của trình duyệt Web trên máy tính lẫn điện thoại thông minh, nhưng đồng thời vẫn chạy được trên những trình duyệt và thiết bị cũ hơn. PWA lấy phương pháp [Cải Tiến Tăng Dần (Progressive Enhancement)](insert link to PA presentation) làm cốt lõi (nên mới có chữ Progressive).**

Đối với những trình duyệt và thiết bị cũ, PWA hoạt động như một mobile website thông thường. Nhưng với những trình duyệt trên thiết bị di động mới nhất, PWA hoạt động như một _mobile app_[^1] thực thụ.

Những tác giả của khái niệm PWA (đến từ nhóm phát triển trình duyệt Chrome) đã đưa ra những đặc tính cần có của một PWA như sau:

* **Progressive** - Chạy được trên _mọi_ (nên hiểu: tuyệt đại đa số) thiết bị, do được phát triển với phương pháp Cải Tiến Tăng Dần.
* **Responsive** - Có thiết kế _giao diện tùy ứng_ (responsive design), hiển thị và sử dụng được trên mobile, tablet, laptop hay bất kỳ cỡ màn hình nào trong tương lai.
* **Connectivity independent** - PWA vẫn có thể hoạt động tốt với điều kiện kết nối mạng chập chờn hoặc mất hẳn (offline).
* **App-like** - Có giao diện và trải nghiệm như mobile app thực thụ.
* **Fresh** - Dù nó hoạt động như mobile app, nhưng tính năng và giao diện luôn được cập nhật tức thời nhờ nền tảng Web (không cần người dùng update từ Apple App Store hay Google Play - gọi chung là app store).
* **Safe** - PWA phải được tải thông qua giao thức TLS (hay nôm na là HTTPS), để đảm bảo việc trao đổi dữ liệu không bị bên thứ ba can thiệp.
* **Discoverable** - Thông qua file khai báo chuẩn (được thống nhất bởi tổ chức W3C), mà các PWA dễ dàng được các cỗ máy tìm kiếm đánh dấu và thông báo cho người dùng.
* **Re-engageable** - PWA cho phép việc tái tiếp cận người dùng dễ dàng hơn nhờ những tính năng đặc biệt như là push notification (thông báo đẩy).
* **Installable** - PWA cho phép người dùng dễ dàng lưu lại web app trên điện thoại (thường là trên màn hình home screen) mà không cần phải vào app store
* **Linkable** - Dễ dàng share app chỉ với đường link và không cần người nhận phải cài đặt phức tạp chỉ để xem được nội dung bạn muốn share.

## Những điểm khác biệt của Progressive Web App?

Sự tiến hóa của mobile web app cần sự hợp tác của rất nhiều người và tổ chức khác nhau và thường đi cùng với sự phát triển và chuẩn hóa của nền tảng Web do tổ chức **W3C**[^2] chịu trách nhiệm.

[![Sự tiến hóa của nền tảng Web](/img/2018/pwa/evolutionoftheweb.jpg)_Sự tiến hóa của nền tảng Web_](http://www.evolutionoftheweb.com)

Trong quá trình tư vấn và phát triển app cho khách hàng, rất nhiều lần doanh nghiệp từ chối lựa chọn giải pháp Web app hoặc hybrid app với lý do chính là _"HTML5 không nhanh bằng native"_. Tuy nhiên điều này không còn đúng tại thời điểm hiện tại.

Nhờ những cải tiến của phần cứng thiết bị, hệ điều hành di động, trình duyệt, và nhất là đặc tả Web trong vài năm gần đây mà web app đã thêm những khả năng không thua kém native app như:

- Hiển thị đồ họa mượt mà hơn, đặt biệt là hỗ trợ đồ họa 3D, animation từ phần cứng (hardware accelerated)
- Bàn phím ảo thích ứng với trường nhập thông tin: email, URL, telephone...
- Có khả năng truy xuất các sensor của thiết bị: tọa độ GPS, con quay hồi chuyển, trạng thái pin, network, camera, microphone...
- Cơ sở dữ liệu (CSDL) tại trình duyệt cho phép tìm kiếm và truy cập nhanh lượng dữ liệu lớn và cho phép người dùng quay lại web app nhanh hơn.
- Đặc tả mới về CSS cho phép designer và front end developer tạo giao diện tùy ứng (responsive design) và giao diện giống app dễ dàng hơn.

![Web app showcase](/img/2018/pwa/web-apps-showcase.jpg)_Từ trái qua, các web app nổi tiếng đã chứng minh được sự thành công của web app trên mobile: <a href="https://app.ft.com">app.ft.com</a>, <a href="https://flipboard.com">flipboard.com</a>, <a href="https://m.aliexpress.com">m.aliexpress.com</a>_

Dù vậy, web app vẫn còn một số hạn chế so với native app và hybrid app điển hình như offline mode, push notification,

Sau đây là những điểm khác biệt của PWA so với những ứng dụng mobile web thông thường:

### Shortcut trên home screen và hỗ trợ theme từ trình duyệt

Ngay từ những thế hệ iPhone đầu tiên, iOS Safari đã có chức năng cho phép người dùng lưu shortcut của một website vào home screen (add to home screen) để truy cập nhanh vào lần sau. Và với những website được người dùng mở từ home screen, chúng có thể có giao diện toàn màn hình (không còn thanh địa chỉ và phần giao diện của Safari), đem tới trải nghiệm như mobile app.

[Chèn hình của web app FT, của Safari add to home screen]

Tuy nhiên những khả năng trên vẫn chỉ là sự hỗ trợ đơn lẻ từ nhà phát triển Apple cho những chiếc iPhone của mình. Giờ đây, tổ chức W3C đã thống nhất đặc tả cho web app với file khai báo **manifest.json** (tên chính thức: Web App Manifest) cho phép lập trình viên có thể tùy chỉnh:

- Màu theme (màu của giao diện trình duyệt và thanh status)
- Màu nền và icon trên splash screen
- Icon và tên app trên home screen
- Khóa hướng xoay màn hình
- Và một số tùy chỉnh kỹ thuật khác...

[chèn hình danh sách các trình duyệt hỗ trợ]

### Banner cài đặt web app

Ngoài chức năng "Add To Home Screen" bằng tay đã được hỗ trợ bởi đa số trình duyệt di động hiện nay, một số trình duyệt mới hiện nay còn có thể **chủ động** hiện một banner mời gọi user cài web app lên home screen.

[chèn hình icon một web app được lưu trên home screen]

Theo [Addy Osmani](https://addyosmani.com/blog/getting-started-with-progressive-web-apps/), người dùng sẽ được gợi ý cài web app lên home screen của Android nếu:

- Web app có khai báo manifest.json
- Đươc tải bằng giao thức HTTPS
- Có sử dụng service worker (xem tiếp mục sau)
- Được ghé thăm hai lần, với mỗi lần cách nhau ít nhất 5 phút

Kể từ Chrome cho Android phiên bản 57, khi một PWA được lưu lại, icon của nó không chỉ xuất hiện tại home screen mà ở cả trong app drawer (trang danh sách tất cả app) và trang tìm kiếm app. [Xem thêm tại đây.](https://developers.google.com/web/updates/2017/02/improved-add-to-home-screen)

[Chèn hình icon PWA trong app drawer]

[chèn hình danh sách các trình duyệt hỗ trợ]

### Hoạt động offline

<video class="video video--right" src="/img/2018/pwa/offline-viewing.mp4" poster="/img/2018/pwa/offline-viewing.png" controls onclick="this.paused ? this.play() : this.pause();"
></video>

Một trong những hạn chế của web app so với native app khiến nó chưa thật sự hữu dụng và được triển khai rộng rãi đó chính là khả năng hoạt động ngay cả khi người dùng offline. Khi người dùng mất kết nối (tắt mobile data, tắt wifi, bật flight mode...) hoặc kết nối Internet chậm, web app sẽ không thể sử dụng được do nó phải lấy dữ liệu từ máy chủ trung tâm, và người dùng sẽ nhanh chóng bỏ cuộc hoặc tìm đến native app.

Nhờ một đặc tả mới của Web được biết với tên gọi là **Service Worker**, kết hợp với CSDL tại trình duyệt, PWA đã có thể lưu lại dữ liệu bao gồm văn bản, hình ảnh hay bất kỳ định dạng nào cần thiết cho việc hoạt động offline.

[chèn hình minh hoạt cách thức service worker và cache api hoạt động]



[chèn hình danh sách các trình duyệt hỗ trợ]

### Nhận push notification

Một tính năng đáng chú ý nữa của native app mà web app trước đây không thể làm được, đó chính là việc nhận push notification (gửi thông báo chủ động). Push notification đang trở thành một công cụ khá quan trọng và là phương tiện marketing cho các nhà phát hành mobile app, kích thích người dùng quay trở lại hoặc suy trì sự tương tác giữa người dùng và app của mình.

Cũng nhờ **Service Worker**, là một chương trình nhỏ viết bằng ngôn ngữ Web JavaScript nhưng nó chạy ngầm và độc lập với web app chính, PWA có khả năng nhận push notification như native app. Điều này đồng nghĩa với việc ngay cả khi web app và trình duyệt đã được đóng hẳn, chúng vẫn có thể nhận được notification.

[chèn hình danh sách các trình duyệt hỗ trợ]

### Tự động đồng bộ khi có mạng trở lại

Một khả năng khác của Service Worker, đó là hỗ trợ PWA tự động đồng bộ những yêu cầu từ phía người dùng lên server trung tâm ngay khi thiết bị có mạng trở lại. Lấy ví dụ: ứng dụng nhắn tin tức thời, người dùng gửi một tin nhắn đi khi điện thoại của họ mất kết nối. Ngay khi điện thoại của họ có Internet trở lại, Service Worker sẽ tiếp tục gửi tin nhắn đi cho người dùng hoặc bất kỳ tác vụ nào cần đến Internet.

[chèn hình danh sách các trình duyệt hỗ trợ]

### Chia sẻ bằng native banner của HĐH

Một tính năng tương đối hữu dụng nữa của PWA đó chính là Web Share. Để dễ hình dung, nếu bạn đang đọc bài viết này trên điện thoại, cách duy nhất để bạn chia sẻ nó là copy URL[^3] của nó và paste vào app bạn muốn share, hoặc bạn sẽ mở menu của trình duyệt ra, và bấm vào nút share. Chức năng Web Share của PWA sẽ giống như cách thứ hai vừa nêu.

Với PWA có sử dụng Web Share, khi bạm bấm vào nút share ngay trong trang web, banner chia sẻ mặc định của HĐH sẽ hiện ra với tất cả các app và thao tác mà bạn có thể thực hiện với một chuỗi URL hoặc chuỗi băn bản. Một sự tiện lợi giúp tăng sự tương tác trên thiết bị di động.

[ chèn video demo việc bấm vào nút share và hiển thì native share banner ]

[chèn hình danh sách các trình duyệt hỗ trợ]

### Quản lý đăng nhập và tự động đăng nhập

Một tính năng đang dần trở thành yêu cầu phải có của trình duyệt đó là khả năng đồng bộ giữa các thiết bị và hệ điều hành khác nhau (nhưng cùng một loại trình duyệt). Hiện nay bạn đã có thể tạo một tài khoản đồng bộ trên Firefox, Opera, MS Edge và Chrome. Bạn sẽ thấy việc đồng bộ tạo sự tiện lợi cho người dùng rất nhiều đặc biệt là những ai lướt web trên nhiều thiết bị khác nhau: bookmarks, lịch sử, các tab đang mở, thông tin nhập form và đặc biệt là thông tin đăng nhập (username & password) của các website.

Với tính năng trên, người dùng sẽ dễ dàng đăng nhập vào các website trên nhiều thiết bị nhờ vào việc trình duyệt sẽ tự điền vào form đăng nhập. Tuy nhiên, một đặc tả mới dành riêng cho PWA với tên gọi Credential Management API cho phép web app thực hiện thao tác đăng nhập cho người dùng chỉ với một cú click chuột và không cần phải nhập lại mật khẩu.

[chèn video minh họa đăng nhập một chạm]

[chèn hình danh sách các trình duyệt hỗ trợ]

### Quản lý thanh toán và hỗ trợ thanh toán trực tuyến

Nếu như thanh toán trên mobile và bằng mobile đang trở thanh xu hướng và đem đến sự tiện lợi chưa từng có cho người dùng, thì Web App trên mobile cũng không đứng ngoài cuộc.

Với tên gọi **Payment Request API**, một đặc tả mới nữa của W3C, nó cho phép PWA chuyển thao tác thanh toán vốn nhập nhằng và dễ sai sót cho một giao diện chung hỗ trợ bởi trình duyệt. Giao diện này bao gồm các bước: hiển thị tóm tắt đơn hàng (shopping cart), thông tin giao hàng, loại thanh toán, thông tin thẻ và cả việc thực hiện thanh toán. Các form liên quan đều được hỗ trợ tự động điền vào từ thông tin thanh toán đã được lưu trên điện thoại. Và vì giao diện thanh toán lúc này là của trình duyệt nên thông tin thanh toán sẽ được đảm bảo an toàn vì các đoạn mã độc nếu được vô tình nhúng vào website cũng không có khả năng lấy được.

Một khi chuẩn Web này được áp dụng rộng rãi trên tất cả các HĐH mobile, việc xây dựng web app cho các platform thương mại điện tử sẽ trở nên dễ dàng và thuận tiện hơn bao giờ hết.

### Lưu ý:
Đa số những tính năng dưới đây đã được hỗ trợ rộng rãi bởi các trình duyệt và HĐH mobile chính, và một số vẫn còn khá mới. Tuy nhiên với bản chất là progressive, người dùng vẫn trải nghiệm được tất cả những tính năng cần thiết nhất của app [...]

## Hiệu quả của PWA

[Alibaba PWA showcase](https://developers.google.com/web/showcase/2016/alibaba)

## Kết luận:

<!-- Rõ ràng, Web chưa bao giờ lỗi thời, và nếu như bạn đang làm việc nhiều trên máy tính, ứng dụng mà bạn dùng nhiều nhất, tôi dám cá đó chính là trình duyệt trên desktop của bạn.

Với sự chuyển dịch thời gian trực tuyến của người dùng từ máy tính để bàn sang thiết bị di động, Web vẫn luôn là giải pháp quan trọng và không thể thiếu -->



---
#### Ghi chú:

[^1]: Xin tóm tắt lại một số thuật ngữ về **"app"** trên thiết bị di động:
    - Mobile app hoặc native app: (ở Việt Nam thường gọi tắt là "app") là ứng dụng được cài đặt từ app store, được viết bằng ngôn ngữ lập trình dành riêng cho từng hệ điều hành di động khác nhau.
    - (Mobile) web app: là website chạy trên trình duyệt của smart phone nhưng có trải nghiệm giống app và thường trao đổi nhiều dữ liệu giữa người dùng và website.
    - Hybrid app: là ứng dụng được cài đặt từ app store, tuy nhiên được viết bằng cùng ngôn ngữ lập trình với web app. Dù hybrid app có thể cài được trên nhiều HĐH khác nhau nhưng nó chỉ cần được viết cùng một bộ mã nguồn với một ít điều chỉnh riêng cho mỗi loại HĐH mà nó hỗ trợ.

[^2]: Tổ chức World Wide Web Consortium có trách nhiệm chuẩn hóa các đặc tả về Web và khuyến khích các trình duyệt khác nhau phải tuân theo để các website hoạt động một cách đồng nhất bất kể trình duyệt dùng để hiển thị.

[^3]: URL là đường link đến một trang web bất kỳ

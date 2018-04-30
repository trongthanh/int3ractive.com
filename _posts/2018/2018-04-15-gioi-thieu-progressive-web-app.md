---
layout: post
title: Giới thiệu Progressive Web App
subtitle: Tương lai của mobile app?
author: Thanh Tran
description:
date: 2018-04-15T15:42:17+07:00
tags: [Vietnamese, Front End, JavaScript, Mobile Web, Web App]
image:
---

Progressive Web App (PWA) là một dạng ứng dụng web (web app) mới đang thu hút rất nhiều sự quan tâm từ các nhà phát triển web trên thế giới, tuy nhiên nó vẫn còn khá mới mẻ tại Việt Nam.

Đã có nhiều bài viết liên quan đến PWA dành cho [lập trình viên](insert link here), cho nên trong bài viết này tôi sẽ cố gắng giải thích PWA cho người dùng phổ thông.

## Progressive Web App là gì?

PWA là ứng dụng web được viết để tận dụng những tính năng mới nhất của trình duyệt Web trên máy tính lẫn điện thoại thông minh, nhưng đồng thời vẫn chạy được trên những trình duyệt và thiết bị cũ hơn. PWA lấy phương pháp [Cải Tiến Tăng Dần (Progressive Enhancement)](insert link to PA presentation) làm cốt lõi (cho nên mới có chữ **Progressive**).

Đối với những trình duyệt và thiết bị cũ, PWA hoạt động như một mobile website thông thường. Nhưng với những trình duyệt trên thiết bị di động mới nhất, PWA hoạt động như một mobile app[^1] thực thụ.

Những tác giả của khái niệm PWA (đến từ nhóm phát triển trình duyệt Chrome) đã đưa ra những đặc điểm của một PWA như sau:

* **Progressive** - Chạy được trên _mọi_ (nên hiểu: tuyệt đại đa số) thiết bị, do được phát triển với phương pháp Cải Tiến Tăng Dần.
* **Responsive** - Có thiết kế _giao diện tùy ứng_, hiển thị và sử dụng được trên mobile, tablet, laptop hay bất kỳ cỡ màn hình nào trong tương lai.
* **Connectivity independent** - PWA vẫn có thể hoạt động tốt với điều kiện kết nối mạng chập chờn hoặc mất hẳn (offline).
* **App-like** - Có giao diện và trải nghiệm như ứng dụng mobile thực thụ.
* **Fresh** - Dù nó hoạt động như mobile app, nhưng tính năng và giao diện luôn được cập nhật tức thời nhờ nền tảng Web (không cần người dùng update từ App Store hay Google Play - gọi chung là app store).
* **Safe** - PWA phải được tải thông qua giao thức TLS (hay nôm na là HTTPS), để đảm bảo việc trao đổi dữ liệu không bị bên thứ ba can thiệp.
* **Discoverable** - Thông qua file khai báo chuẩn (được thống nhất bởi tổ chức W3C),[^2] mà các PWA dễ dàng được các cỗ máy tìm kiếm đánh dấu và thông báo cho người dùng.
* **Re-engageable** - PWA cho phép việc tái tiếp cận người dùng dễ dàng hơn nhờ những tính năng đặc biệt như là push notification (thông báo đẩy).
* **Installable** - PWA cho phép người dùng dễ dàng lưu lại web app trên điện thoại (thường là trên màn hình home screen) mà không cần phải vào app store
* **Linkable** - Dễ dàng share app chỉ với đường link và không cần người nhận phải cài đặt phức tạp chỉ để xem được nội dung bạn muốn share.

## Những điểm khác biệt của Progressive Web App?

<!-- Mobile web app, bản chất là những website chạy trên trình duyệt di động, cũng đã có một quá tiến hóa của mình để dần bắt kịp với native app về nhiều khía cạnh. -->

Sự tiến hóa của mobile web app cần sự hợp tác của rất nhiều người và tổ chức khác nhau và thường đi cùng với sự phát triển và chuẩn hóa của nền tảng Web do tổ chức W3C chịu trách nhiệm.

Nhờ những cải tiến của phần cứng thiết bị, hệ điều hành di động, trình duyệt, và nhất là đặc tả Web trong vài năm gần đây mà web app đã thêm những khả năng không thua kém native app như:

- Hiển thị đồ họa mượt mà hơn, đặt biệt là hỗ trợ đồ họa 3D, animation từ phần cứng (hardware accelerated)
- Trường nhập thông tin thích ứng với bàn phím ảo: email, URL, telephone...
- Có khả năng truy xuất các sensor của thiết bị: tọa độ GPS, con quay hồi chuyển, trạng thái pin, network, camera, microphone...
- Cơ sở dữ liệu (CSDL) tại trình duyệt cho phép tìm kiếm và truy cập nhanh lượng dữ liệu lớn.
- Đặc tả mới về CSS cho phép nhà thiết kế và lập trình viên tạo giao diện tùy ứng (responsive design) và giao diện giống app dễ dàng hơn

Dù vậy, web app vẫn còn một khoảng cách khá xa so với native app [... giải thích thêm]

Sau đây là những điểm khác biệt của PWA so với những ứng dụng mobile web thông thường:

### Shortcut trên home screen và tùy chỉnh theme của website

Ngay từ những thế hệ iPhone đầu tiên, iOS Safari đã có chức năng cho phép người dùng lưu shortcut của một website vào home screen để truy cập nhanh vào lần sau. Và với những website được người dùng mở từ home screen, chúng có thể có giao diện toàn màn hình (không còn thanh địa chỉ và phần giao diện của Safari), đem tới trải nghiệm như mobile app.

[Chèn hình của web app FT, của Safari add to home screen]

Tuy nhiên những khả năng trên vẫn chỉ là sự hỗ trợ đơn lẻ từ nhà phát triển Apple cho thiết bị di động của mình. Giờ đây, tổ chức W3C đã thống nhất đặc tả cho web app với file khai báo **manifest.json** (Web App Manifest) cho phép lập trình viên có thể tùy chỉnh:

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

Một trong những hạn chế của web app so với native app khiến nó chưa thật sự hữu dụng và được triển khai rộng rãi đó chính là khả năng hoạt động ngay cả khi người dùng offline. Khi người dùng mất kết nối (tắt data, bật flight mode, tắt wifi...) hoặc kết nối Internet chậm, web app, do nó phải cập nhật dữ liệu từ máy chủ trung tâm, sẽ không thể sử dụng được và người dùng sẽ nhanh chóng bỏ cuộc hoặc tìm đến native app.

Nhờ một đặc tả mới của Web được biết với tên gọi là **Service Worker**, kết hợp với CSDL tại trình duyệt, PWA đã có thể lưu lại dữ liệu bao gồm văn bản, hình ảnh hay bất kỳ dạng nào cần dùng cho việc hoạt động offline.

[chèn hình minh hoạt cách thức service worker và cache api hoạt động]



[chèn hình danh sách các trình duyệt hỗ trợ]

### Nhận push notification

Một tính năng đáng chú ý nữa của native app mà web app trước đây không thể làm được, đó chính là việc nhận push notification (gửi thông báo chủ động). Push notification là một công cụ khá quan trọng cho các nhà xuất bản mobile app kích thích người dùng quay trở lại hoặc suy trì sự tương tác giữa người dùng và app của mình.

Cũng nhờ **Service Worker**, là một chương trình nhỏ viết bằng ngôn ngữ Web JavaScript nhưng nó chạy ngầm và độc lập với web app chính, PWA có khả năng nhận push notification như native app. Điều này đồng nghĩa với việc ngay cả khi web app đã được đóng hẳn, chúng vẫn có thể nhận được notification.

[chèn hình danh sách các trình duyệt hỗ trợ]

### Tự động đồng bộ khi có mạng trở lại

Một khả năng khác của Service Worker, đó là hỗ trợ PWA tự động đồng bộ những yêu cầu từ phía người dùng lên server trung tâm ngay khi thiết bị có mạng trở lại. Lấy ví dụ ứng dụng nhắn tin tức thời, người dùng gửi một tin nhắn đi khi điện thoại của họ mất kết nối. Ngay khi điện thoại của họ có Internet trở lại, Service Worker sẽ tiếp tục gửi tin nhắn đi cho người dùng hoặc bất kỳ tác vụ nào cần đến Internet.

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
s

## Tại sao là Progressive Web App?

[Insert quadruple chart ]

## Khi nào chọn mobile web app

[Alibaba PWA showcase](https://developers.google.com/web/showcase/2016/alibaba)


[^1]: Xin tóm tắt lại một số thuật ngữ về "app" trên thiết bị di động:
    - Mobile app hoặc native app: là ứng dụng được cài đặt từ app store, được viết bằng ngôn ngữ lập trình dành riêng cho từng hệ điều hành di động khác nhau.
    - Mobile web app: là website chạy trên trình duyệt của smart phone nhưng có trải nghiệm giống app và thường trao đổi nhiều dữ liệu giữa người dùng và website
    - Hybrid app: là ứng dụng được cài đặt từ app store, tuy nhiên được viết bằng cùng ngôn ngữ lập trình với web app. Dù hybrid app có thể cài được trên nhiều HĐH khác nhau nhưng nó chỉ cần được viết cùng một bộ mã nguồn với một ít điều chỉnh riêng cho mỗi loại HĐH mà nó hỗ trợ.

[^2]: Tổ chức World Wide Web Consortium quốc tế có trách nhiệm chuẩn hóa các đặc tả về Web và khuyến khích các trình duyệt khác nhau phải tuân theo để các website hoạt động một cách đồng nhất bất kể trình duyệt dùng để hiển thị.

[^3]: URL là đường link đến một trang web bất kỳ

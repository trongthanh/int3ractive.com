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

Từ chính những tác giả (đến từ nhóm phát triển trình duyệt Chrome) đưa ra khái niệm PWA, họ nêu những đặc điểm của một PWA như sau:

* **Progressive** - Chạy được trên mọi (tuyệt đại đa số) thiết bị, do được phát triển với phương pháp Cải Tiến Tăng Dần.
* **Responsive** - Có thiết kế tùy ứng, hiển thị và sử dụng được trên mobile, tablet, laptop hay bất kỳ cỡ màn hình nào trong tương lai.
* **Connectivity independent** - PWA vẫn có thể hoạt động tốt với điều kiện kết nối mạng chập chờn hoặc mất hẳn (offline).
* **App-like** - Có giao diện và trải nghiệm như ứng dụng mobile thực thụ.
* **Fresh** - Dù nó hoạt động như mobile app, nhưng tính năng và giao diện luôn được cập nhật tức thời nhờ nền tảng Web (không cần người dùng update như với App Store hay Google Play - gọi chung là app store).
* **Safe** - PWA phải được tải thông qua giao thức TLS (hay nôm na là HTTPS), để đảm bảo việc trao đổi dữ liệu không bị bên thứ ba can thiệp.
* **Discoverable** - Thông qua file khai báo chuẩn (được thống nhất bởi tổ chức W3C), mà các PWA dễ dàng được cỗ máy tìm kiếm đánh dấu và thông báo cho người dùng.
* **Re-engageable** - PWA cho phép việc tái tiếp cận người dùng dễ dàng hơn nhờ những tính năng đặc biệt như là push notification.
* **Installable** - PWA cho phép người dùng dễ dàng lưu lại web app trên điện thoại (thường là trên màn hình home screen) mà không cần phải vào app store
* **Linkable** - Dễ dàng share app chỉ với đường link và không cần người nhận phải cài đặt phức tạp chỉ để xem được nội dung bạn muốn share.

## Những điểm khác biệt của Progressive Web App?

Mobile web app, bản chất là những website chạy trên trình duyệt di động, cũng đã có một quá tiến hóa của mình để dần bắt kịp với native app về nhiều khía cạnh.

Sự tiến hóa của mobile web app cần sự hợp tác của rất nhiều người và tổ chức khác nhau và thường đi cùng với sự phát triển và chuẩn hóa của nền tảng Web.

Nhờ những cải tiến của trình duyệt, hệ điều hành di động, và nhất là đặc tả Web trong vài năm gần đây mà web app đã thêm những khả năng không thua kém native app như: hiển thị đồ họa mượt mà hơn và đặt biệt là hỗ trợ đồ họa 3D, khả năng truy xuất sensor của thiết bị, trường nhập thông tin thích ứng với bàn phím ảo, CSDL tại trình duyệt để truy cập nhanh lượng dữ liệu lớn...

Dù vậy, web app vẫn còn một khoảng cách khá xa so với native app[...]


Sau đây là những điểm khác biệt của PWA so với những ứng dụng mobile web thông thường:

### Shortcut trên home screen và giao diện như app

Dựa vào
- Màu theme tùy chỉnh
- Banner cài đặt home screen
- Splash screen với icon và màu nền tùy chỉnh

### Hoạt động offline

-

### Nhận được push notification

### Tự động đồng bộ khi có mạng trở lại

### Chia sẻ bằng native banner của HĐH

### Quản lý đăng nhập và tự động đăng nhập

### Quản lý thanh toán và hỗ trợ thanh toán trực tuyến


## Tại sao là Progressive Web App?

[Insert quadruple chart ]

## Khi nào chọn mobile web app


[^1]: Xin tóm tắt lại một số thuật ngữ về "app" trên thiết bị di động:
- Mobile web app: là website chạy trên trình duyệt của smart phone nhưng có trải nghiệm giống app và thường trao đổi nhiều dữ liệu giữa người dùng và website
- Mobile app hoặc native app: là ứng dụng được cài đặt từ app store, được viết bằng ngôn ngữ lập trình dành riêng cho từng hệ điều hành di động khác nhau
- Hybrid app: là ứng dụng được cài đặt từ app store, tuy nhiên được viết bằng cùng ngôn ngữ lập trình với web app. Dù hybrid app có thể cài được trên nhiều HĐH khác nhau nhưng nó chỉ cần được viết cùng một bộ mã nguồn với một ít điều chỉnh riêng cho mỗi loại HĐH mà nó hỗ trợ.

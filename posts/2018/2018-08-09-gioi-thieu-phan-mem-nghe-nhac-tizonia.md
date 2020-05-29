---
title: Giới thiệu phần mềm nghe nhạc Tizonia
subtitle: Nghe nhạc online Youtube, Spotify... bằng dòng lệnh
author: Thanh Tran
description:
date: 2018-08-09T11:31:14+07:00
tags: [vietnamese, linux, terminal]
---

[Tizonia](http://tizonia.org) là một phần mềm trên Linux cho phép chơi nhạc online từ Youtube, Spotify, Google Music, SoundCloud bằng... dòng lệnh. Lý do số một mình thích là nó chơi nhạc từ Youtube cực nhẹ vì không cần video và giao diện.

![Tizonia on gnome-terminal](/images/2018/tizonia-terminal.png)

## Cài đặt

Để cài đặt, bạn có thể tìm cài trong Software của Ubuntu (snap package) hoặc thông qua gói .deb với dòng lệnh:

```shell
# Cho Debian/Ubuntu/Raspbian
curl -kL https://github.com/tizonia/tizonia-openmax-il/raw/master/tools/install.sh | bash
```

Xem thêm cách cài cho các distro khác [tại đây](http://tizonia.org/docs/).

Sau khi cài đặt, mở terminal và chạy lệnh:

```shell
# Xem hướng dẫn chung
tizonia -h

# Xem các phím tắt điều khiểu trong lúc đang chơi:
tizonia -h keyboard

# Xem hướng dẫn cho Youtube...
tizonia -h youtube
```

## Dùng với Youtube

Với Youtube, bạn không cần cài đặt tài khoản gì cả.

Một số dòng lệnh mình thường dùng với YouTube:

```shell
# Nghe một video / bài hát cụ thể (qua URL hoặc ID)
tizonia --youtube-audio-stream https://www.youtube.com/watch?v=tCV4dSMeQzE

# Nghe một playlist cụ thể (qua playlist URL hoặc ID)
tizonia --youtube-audio-playlist https://www.youtube.com/playlist?list=PLsIRiRj6jaw7Z6bHs5V99yAvlMUf2icOG

# Nghe mix nhạc tự động dựa trên từ khóa search
tizonia --youtube-audio-mix-search "Lam Trường"
```

## Dùng với Spotify

Để sử dụng Tizonia với Spotify bạn phải đang dùng tài khoản trả phí. Cách tiện nhất là bạn sẽ set sẵn `spotify.user` và `spotify.password` trong file `~/.config/tizonia/tizonia.conf`[^1] (nếu file này chưa tồn tại, bạn cần chạy lệnh tizonia lần đầu).

> Có một lưu ý với người dùng đăng nhập Spotify bằng Facebook như mình, đó là bạn sẽ không có password để đăng nhập với email mà sẽ phải tạo thêm mật khẩu thiết bị (device password) bằng cách vào phần tài khoản tại [spotify.com](https://www.spotify.com/vn-vi/account/set-device-password/), tìm đến mục **Cài đặt mật khẩu thiết bị** và làm theo hướng dẫn. Sau đó, trường `spotify.user` bạn sẽ set là **mã số tên người dùng** cho thiết bị.

Một số dòng lệnh mình thường dùng với Spotify:

```shell
# Nghe một danh sách các bài hát theo từ khóa tìm thấy trong tên bài hát
tizonia --spotify-tracks "Frozen Heart"

# Nghe nhạc từ một ca sĩ đầu tiên theo từ khóa
tizonia --spotify-artist "Ed Sheeran"

# Nghe playlist do bạn tạo
tizonia --spotify-playlist "Programming Music"

# Nghe playlist do user "Spotify" tạo
tizonia --spotify-owner "spotify" --spotify-playlist "Sleep"

```

## Lệnh tắt (bash alias)

Lệnh để nhập cho Tizonia khá dài, nên mình đã tạo một số alias để gõ cho nhanh.

Ví dụ, thay vì gõ "**ti**zonia \-\-**s**potify-**ar**tist", bạn chỉ cần gõ: `tisar` sau đó là tham số. Hoặc thay vì gõ "**ti**zonia \-\-**y**outube-audio-**m**ix-**s**earch", bạn sẽ gõ `tiyms`.

Để cài các alias này, bạn chỉ cần copy nội dung của [gist bên dưới](https://gist.github.com/trongthanh/34dee70f4f1fbe36aa2c223be5892e45) và paste phía cuối file `~/.bashrc` và sau đó khởi động lại Terminal.

<script src="https://gist.github.com/trongthanh/34dee70f4f1fbe36aa2c223be5892e45.js"></script>

---
[^1]: Dành cho newbie: ký tự `~` trong terminal dùng để thay thế cho thư mục HOME của user hiện tại. Đôi khi cũng được viết là `$HOME`.



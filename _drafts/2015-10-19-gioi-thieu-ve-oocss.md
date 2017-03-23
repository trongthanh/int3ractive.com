---
layout: post
title: Giới Thiệu về OOCSS
subtitle:
author: Thanh Tran
description:
date: 2015-10-19T23:02:17+07:00
tags: []
modified: 2015-10-19T23:02:23+07:00
---











## Giới thiệu về OOCSS

OOCSS vừa là một [framework CSS](link?) (đã không còn được phát triển), vừa là phương pháp tiếp cận CSS theo hướng đối đượng.

Đối tượng CSS













### 2 nguyên tắc cơ bản của OOCSS



#### Tách bạch giữa cấu trúc (HTML) và hình dáng (skin)

- Xác định những kiểu giao diện có thể sử dụng lại.











- Chia nhỏ các kiểu CSS thành các phần có thể tổ hợp thành nhiều mẫu giao diện khác nhau.










- Tách cấu trúc khỏi hình dáng có nghĩa là chỉ sử dụng class để định nghĩa trong CSS.

```html
    <header class="header _clearfix">
        <img class="logo" src="" alt="Logo">
        <h1 class="title"></h1>
    </header>
```

```css
    .header {


        .logo {

        }

        .title {

        }
    }


```











- Hạn chế sử dụng element selector. VD:
    ```css
        ul {
            list-style: none;
        }
    ```












- Không gắn class vào element. VD: `h2.title`, `li.item`, `a.button`












#### Tách bạch giữa container và nội dung

- Hạn chế sử dụng các selector phụ thuộc vào vị trí trong trang HTML. Làm sao để một component trông như nhau bất kể nó được đặt ở đâu.
    VD: Thay vì định nghĩa `.my-object h2`, bạn hãy tạo một class để mô tả H2 này: `.category`











- Tách riêng các định nghĩa về layout và kiểu dáng trong các class chuyên biệt:











- Không định nghĩa các kiểu chữ trong container (VD: cài đặt font-size trong container sẽ gây khó khăn cho việc tính toán em)










### Một số nguyên tắc bổ sung

- Không sử dụng ID (bao giờ!)
- Hạn chế sử dụng !important

- Dùng namespace cho tên class. Sử dụng `js-` chỉ để dành cho các element cần được can thiệp bởi JavaScript.












### Media Object

http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code




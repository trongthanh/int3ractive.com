---
layout: post
title: Sử dụng ký pháp BEM cho CSS
subtitle: 
author: Thanh Tran
meta-description: 
date: 
tags: []
modified: 
---

## Ký pháp BEM là gì

BEM viết tắt của Blocks, Elements, Modifiers, là một phương pháp đặt tên class cho HTML và CSS. Được phát triển [tại Yandex](https://en.bem.info) giúp lập trình viên hiểu rõ hơn mối quan hệ giữa HTML và CSS trong dự án front end.

Ví dụ sau đây sẽ minh hoạ cách sử dụng ký pháp BEM:

```css
/* Một Block (khối) độc lập */
.btn {}

/* Element (phần tử) con, phụ thuộc vào Block ở trên */ 
.btn__price {}

/* Modifier (bộ điều chỉnh) thay đổi trạng thái của Block */
.btn--orange {} 
.btn--big {}

```

Với cách đặt tên class này, ta có __Block__ sẽ đại diện cho một component, và trong ví dụ ở đây, là một button `.btn`. Block cũng sẽ đóng vai trò là một _parent_ mà trong nó sẽ có một hoặc nhiều hơn __Element__ con liên quan. Tên class cho Element và mối quan hệ của nó với Block sẽ được diễn tả bằng tên của Block, tiếp theo là _02 gạch dưới_, và cuối cùng là tên của Element `.btn__price`. Thành phần thứ ba của BEM là các __Modifier__ mà chúng sẽ giúp điều chỉnh các trạng thái hoặc phái sinh khác của Block / Element. Tên của Modifier sẽ được nối với tên Block / Element phía trước bởi _02 gạch ngang_.

Trong HTML, ký pháp BEM sẽ được dùng như sau:

```html
<a class="btn btn--big btn--orange" href="http://int3ractive.com">
    <span class="btn__price">$9.99</span>
    <span class="btn__text">Subscribe</span>
</a>
```

Ấn tượng đầu tiên với bạn có thể là tên class quá xấu và mất nhiều thời gian hơn so với việc tạo riêng một class mới cho một kiểu button mới. Tuy nhiên, ký pháp BEM sẽ mang lại nhiều lợi ích mà tôi sẽ giải thích tiếp theo sau đây:

## Tại sao sử dụng ký pháp BEM















## Sai lầm hay mắc khi sử dụng BEM













## Sử dụng BEM với SASS













## Các ý kiến trái chiều

- Xấu


- Thay vì:
```css
    .site-search        {}
    .site-search__field {}
    .site-search--full  {}
```

Tại sao không viết:
```css
    .site-search        {}
    .site-search input  {}
    .site-search .full  {}
```















http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/
https://css-tricks.com/bem-101/
http://webuniverse.io/css-organization-naming-conventions-and-safe-extend-without-preprocessors/
http://www.smashingmagazine.com/2012/04/a-new-front-end-methodology-bem/
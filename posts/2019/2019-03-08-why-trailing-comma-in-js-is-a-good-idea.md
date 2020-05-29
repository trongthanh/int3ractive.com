---
title: Tại sao lại để dư một dấu phẩy
subtitle: Từ một lỗi cú pháp trong JavaScript, trailing comma trở thành best practice
author: Thanh Tran
description: Từ một lỗi cú pháp trong JavaScript, trailing comma trở thành best practice
date: 2019-04-12T14:39:08+07:00
tags: [javascript, ecmascript, best practice]
image: images/2019/trailing-comma-cover.jpg
cover-darken: true
---

## Trailing comma là gì? Tại sao nó từng là lỗi trong JavaScript?

Trailing comma (dấu phẩy đuôi, dấu phẩy cuối) là việc để dư **một dấu phẩy** sau phần tử cuối cùng ở cuối một danh sách. (có thể là phần tử trong Array literal, property trong Object literal, tham số của hàm...). Ví dụ:

```js
// trailing comma trong Array literal
var categories = [
  'men',
  'women',
  'accessories',
];
// trailing comma trong Object literal
var person = {
  name: 'Harry Potter',
  gender: 'male',
  house: 'Gryffindor',
};
// trailing comma trong tham số của hàm (và trong lời gọi hàm)
function compare(
  param1,
  param2,
) { /* ... */ }
```
{:data-line="5,11,16"}

Như bạn cũng có thể thấy, dấu phẩy vốn để ngăn cách **giữa** các phần tử trong một danh sách, và dấu phẩy cuối là dư thừa về mặt cú pháp. Để dễ hình dung hơn, ví dụ mảng ở trên nếu viết trên cùng một dòng sẽ là `var categories = ['men', 'women', 'accessories',]`. Trong thực tế, với các trình duyệt cũ chỉ hỗ trợ [ECMAScript 3](https://int3ractive.com/2019/01/nhung-dieu-can-biet-ve-ecmascript.html) trở về trước (IE8), trailing comma sẽ gây ra lỗi cú pháp lúc chạy.

![Trailing comma gây ra lỗi cú pháp lúc chạy trên IE8. Hình screenshot lấy từ StackOverflow](/images/2019/trailing-comma-ie8-error.png)_Trailing comma gây ra lỗi cú pháp lúc chạy trên IE8. Hình screenshot lấy từ [StackOverflow](https://stackoverflow.com/questions/17490014/website-causes-script-error-in-ie8)._

Tuy nhiên, kể từ ECMAScript 5, trailing comma được chấp nhận cho danh sách phần tử Array và Object property. Việc lấy số phần tử (`array.length`) vẫn đúng với Array có trailing comma.

## Tại sao trailing comma trở thành best practice?

### 1. Phần tử khi thêm vào cuối sẽ luôn đồng nhất và tách bạch

Khi không dùng trailing comma, việc thêm phần tử vào cuối danh sách sẽ gây ảnh hưởng đến phần tử kế cuối vừa được thêm dấu phẩy và commit log của bạn sẽ như thế này:

```diff
  var categories = [
    'men',
    'women',
-   'accessories'
+   'accessories',
+   'children'
  ];
```

Khi có trailing comma, commit log của bạn sẽ chỉ hiển thị phần thay đổi:

```diff
  var categories = [
    'men',
    'women',
    'accessories',
+   'children',
  ];
```

### 2. Dễ dàng sắp xếp lại thứ tự và cập nhật danh sách

Vì tất cả các phần tử đều kết thúc bằng dấu phẩy, sắp xếp lại thứ tự phần tử bất kỳ đơn giản và dễ dàng:

![Sắp xếp lại phần tử trong mảng](/images/2019/trailing-comma-reorder.gif){: width="480"}_Sắp xếp lại phần tử trong mảng_

### 3. Giảm số dòng conflict khi merge với version control

![Conflict code hiển thị khi không dùng và có dùng trailing comma](/images/2019/trailing-comma-conflict.png)_Conflict code hiển thị khi không dùng (trên) và có dùng (dưới) trailing comma_

Trong ví dụ không dùng trailing comma, mặc dù phần tử `female` đều thêm cùng một dấu phẩy, Git vẫn không tự động merge dòng này và vẫn báo conflict cùng với dòng thay đổi tiếp theo. Việc theo dõi những dòng conflict vô nghĩa này sẽ gây khó khăn cho người merge và rất dễ gây ra sai sót bị mất code sau khi resolve.

Ngoài ra, khi số dòng thay đổi ít đi thì khả năng conflict code sẽ giảm và khả năng code tự merge sẽ cao hơn.

## Sử dụng trailing comma có an toàn?

Trailing comma chỉ hữu dụng với danh sách trên nhiều dòng, do đó khi danh sách ngắn trên cùng một dòng, bạn không cần để dư dấu phẩy làm gì.

Như đã nói ở trên, trailing comma được chấp nhận kể từ ECMAScript 5 cho Object và Array literal, nên nó khá an toàn cho 2 trường hợp này. Ngoài ra khi được minify, mã nguồn JavaScript cuối cùng sẽ được loại bỏ dấu phẩy dư thừa.

Với danh sách tham số của hàm, nó chỉ mới được chấp nhận trong ES2017. Nếu JS engine chưa hỗ trợ, và khi chạy trực tiếp nó sẽ gây lỗi cú pháp. Cho nên sẽ an toàn hơn nếu code của bạn được biên dịch thông qua Babel và sử dụng `preset-env`.

Theo kinh nghiệm cá nhân, hiện tôi vẫn tránh dùng trailing comma trong tham số hàm và cũng rất ít khi viết hàm có danh sách tham số quá dài. Thay vào đó, lời khuyên cho bạn là nên dùng object literal để gom danh sách nhiều tham số vào thành một tham số cho hàm, như ví dụ sau:

```js
// Thay vì viết hàm nhận nhiều tham số:
function getDayString(lunar, solarDay, solarMonth, solarYear) { /* ...*/ }
// Nên thay bằng hàm nhận một tham số là object
function getDayString(options = {}) { /* ...*/ }

// Khi đó lúc gọi hàm ta có thể truyền tham số bằng object literal
// và sử dụng propety shorthand nếu biến local trùng tên
getDayString({
  lunar,
  solarDay,
  solarMonth,
  solarYear,
})
// Bằng việc sử dụng object literal, tham số của hàm giờ đây sẽ tham chiếu theo tên
// và không còn phụ thuộc vào thứ tự như với mảng danh sách tham số.
```

## Công cụ hỗ trợ viết code với trailing comma

Phần này danh cho những ai đã có kinh nghiệm cấu hình code editor nên tôi chỉ viết ngắn gọn:

### ESLint

Nếu bạn đang sử dụng **eslint**, bạn có thể thêm rule: [comma-dangle](https://eslint.org/docs/rules/comma-dangle). Rule này có thể được áp dụng tùy trường hợp, ví dụ để không áp dụng cho tham số hàm:

```json
{
  "comma-dangle": ["error", {
    "arrays": "always-multiline",
    "objects": "always-multiline",
    "imports": "always-multiline",
    "exports": "always-multiline",
    "functions": "never"
  }]
}
```

### Prettier

Với prettier, bạn chỉ cần bật option: [trailingComma](https://prettier.io/docs/en/options.html#trailing-commas).

```yaml
# chỉ bật trailing comma cho Array, Object và import
trailingComma: es5
# bật trailing comma cho cả danh sách tham số hàm
trailingComma: all
```

## Trường hợp danh sách khai báo biến

Khi nói về danh sách có dấu phẩy không thể không nhắc đến trường hợp khai báo nhiều biến cùng lúc với một từ khóa `var` / `let`. Tuy nhiên với danh sách này, cú pháp JavaScript hiện tại không cho phép trailing comma:

```js
// lỗi cú pháp unexpected token...
var a,
    b,
    c,
    ;
```

Thay vì vậy, từ lâu tôi vẫn áp dụng best practice cho việc khai báo nhiều biến local như sau:

```js
// Với danh sách biến không gán giá trị ban đầu,
// có thể viết trên cùng một hàng:
var a, b, c, d, e;
// Với danh sách biến có gán giá trị ban đầu,
// luôn luôn xuống dòng và bắt đầu với từ khóa var / let:
var x = 1;
var y = 2;
var z = 3;
// Trong mọi trường hợp, nếu muốn việc thêm bớt và sắp xếp biến local
// dễ dàng, luôn xuống dòng và bắt đầu từ khóa var / let:
var foo = 123;
var bar = 'hello';
var baz;
```

Việc luôn xuống dòng và bắt đầu bằng từ khóa `var` / `let` sẽ giúp đạt được những lợi ích như đã liệt kê ở trên với trailing comma.

## Một cách viết danh sách comma khác

Trước đây, đã từng có một kiểu viết danh sách phần tử trong JavaScript khá thịnh hành, đó là ["comma first"](http://ajaxian.com/archives/is-there-something-to-the-crazy-comma-first-style):

```js
var gender = [
    'men'
  , 'women'
  , 'accessories'
  ];
```

Tuy nhiên, đây là cách viết nhiều người (trong đó có tôi) xem là không chuẩn và vẫn bị một hạn chế đó là dòng đầu tiên không đồng nhất (ngược lại với comma last). Và một khi thành thói quen, có thể bạn sẽ để dư thêm dấu phẩy ở dòng đầu tiên và điều này còn nguy hiểm hơn là để dư dấu phẩy cuối.

## Thay lời kết: luôn thêm ký tự xuống dòng cuối file

Dù không nhìn thấy, các dòng văn bản plain text đều kết thúc bằng ký tự _linefeed_ (`\n`) đối với Linux & macOS và 2 ký tự _carriage return_ và _linefeed_ (`\r\n`) trên Windows. Khi người soạn văn bản (hay code) viết đến cuối file và không gõ Enter lần nữa, dòng cuối cùng của file sẽ không kết thúc bởi ký tự xuống dòng. Do đó khi văn bản mới được đánh vào cuối file, dòng cuối cùng của version trước đó sẽ thay đổi trong change log bởi nó vừa được thêm ký tự xuống dòng.

Do đó cùng nguyên tắc như với trailing comma, lời khuyên là luôn chèn ký tự xuống dòng vào cuối file. Và nếu bạn nghĩ mình sẽ quên, các editor phổ biến (VSCode, SublimeText, Atom...) đều có setting **Insert Final Newline** để tự động làm việc này cho bạn.

Nếu team bạn có sử dụng [editorconfig](https://editorconfig.org/), bạn có thể cài đặt rule này: `insert_final_newline = true` để áp dụng cho cả project.

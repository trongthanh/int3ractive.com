---
title: Hai ứng dụng của String.prototype.normalize trong tiếng Việt
subtitle: Và đôi điều về bảng mã Unicode tiếng Việt
author: Thanh Tran
metaDesc: Đôi điều về hai bảng mã Unicode tiếng Việt và hai ứng dụng thú vị của phương thức String.prototype.normalize
date: 2019-07-25T23:43:28+07:00
tags: [javascript, unicode, vietnamese]
image: /images/2019/string-normalize-cover-image.jpg
---

## Đôi điều về hai bảng mã Unicode tiếng Việt

Chắc hẳn khi dùng các công cụ gõ văn bản tiếng Việt (TV), bạn đã từng nghe qua hai bộ mã TV Unicode: **dựng sẵn** và **tổ hợp**.

Để hiểu rõ hơn chúng ta hãy cùng xem xét ký tự TV có dấu đơn giản: **"Ạ"**. Để mã hóa ký tự này, với Unicode dựng sẵn, chúng ta dùng một ký tự có [mã Unicode](https://en.wikipedia.org/wiki/Code_point) `U+1EA0` với tên mô tả tiếng Anh: "LATIN CAPITAL LETTER A WITH DOT BELOW". Cả chữ A và dấu nặng được dựng sẵn trong một tọa độ mã Unicode (code point). Còn với Unicode tổ hợp, bạn cần hai code point:

- `U+0041: LATIN CAPITAL LETTER A`
- `U+0323: COMBINING DOT BELOW`

Đoạn JavaScript sau sẽ minh họa thêm sự khác nhau giữa 2 cách viết:

```js
const dungSan = '\u1EA0';
const toHop = '\u0041\u0323';

console.log(dungSan); // "Ạ"
console.log(toHop);   // "Ạ"

console.log(dungSan.length); // 1
console.log(toHop.length);   // 2

console.log(dungSan == toHop); // false
```

> Hiện nay, hầu như tất cả các phần mềm bộ gõ tiếng Việt đều sử dụng **bộ mã dựng sẵn** khi người dùng chọn bảng mã Unicode. Trong giao diện cài đặt Unikey cho Window, tại danh sách bảng mã sổ xuống, bạn sẽ thấy 2 lựa chọn: _Unicode_ (ngầm hiểu là dựng sẵn) và _Unicode tổ hợp_.

## Hai ứng dụng của `String.prototype.normalize`

### Ứng dụng 1: So sánh chuỗi tiếng Việt

Như đã nói ở trên, văn bản tiếng Việt có thể được viết bằng hai bảng mã, và dù về mặt hiển thị ta thấy cùng một chuỗi, nhưng khi so sánh bằng code, hai chuỗi không bằng nhau (`"Ạ" != "Ạ"`). Do đó, sẽ có nhu cầu "chuẩn hóa" chuỗi văn bản tiếng Việt về một bảng mã thống nhất để dễ dàng so sánh.

Để chuẩn hóa chuỗi tiếng Việt trong ES6+, chúng ta chỉ cần gọi phương thức `normalize` của string như sau:

```js
const dungSan = str.normalize('NFC');
// NFC — Normalization Form Canonical Composition. — Dựng Sẵn (mặc định)
const toHop = str.normalize('NFD');
// NFD — Normalization Form Canonical Decomposition. — Tổ Hợp
```

Như vậy, để so sách chuỗi tiếng Việt an toàn, chúng ta sẽ dùng normalize như ví dụ sau:

```js
const str1 = '\u1EA0'; // "Ạ"
const str1n = str1.normalize('NFC');
const str2 = '\u0041\u0323'; // "Ạ"
const str2n = str2.normalize('NFC');

console.log(str1 == str2); // false
console.log(str1n == str2n); // true
```

> Xem thêm đặc tả của [String.prototype.normalize tại MDN.](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)

## Ứng dụng 2: Gỡ bỏ dấu khỏi chuỗi tiếng Việt và chuyển thành slug

Trước đây, để bỏ dấu khỏi chuỗi tiếng Việt trong JS, chúng ta cần một bảng tra cứu tất cả các ký tự có dấu, như ví dụ sau:

```js
let str = 'Từ Điển Tiếng Việt';
str = str.replace(/[aáàảãạâầẩẫậăằẳẵặ]/g, 'a');
// tiếp tục cho các nguyên âm còn lại...
// và thêm một bảng tương tự nếu cần giữ nguyên hoa thường...
```

Tuy nhiên với `normalize`, có một thủ thuật khá ngắn gọn để gỡ bỏ dấu TV mà không cần đến bảng tra cứu. Cơ chế của nó là bạn sẽ chuyển chuỗi TV thành định dạng tổ hợp với dấu là các ký tự rời. Các ký tự dấu rời nằm trong một dãy Unicode biết trước có tên `Combining Diacritical Marks` (\u0300-\u036f) nên chúng ta dễ dàng xóa chúng một cách tổng quát. Cuối cùng, ký tự **"Đ"** là một ký tự độc lập nên cần kiểm tra riêng trường hợp này:

```js
let str = 'Từ Điển Tiếng Việt';

// chuyển về dạng tổ hợp
str = str.normalize('NFD');
// xóa các ký tự dấu tổ hợp
str = str.replace(/[\u0300-\u036f]/g, '');
// chuyển chữ đ/Đ thành d/D
str = str.replace(/[đĐ]/g, m => m === 'đ' ? 'd' : 'D');

console.log(str); // 'Tu Dien Tieng Viet'
```

> Không phải tôi tự nghĩ ra giải pháp thú vị này, mà tôi đã tình cờ đọc được [tweet này](https://twitter.com/leaverou/status/934590045708840960?lang=en) của Lea Verou. Và cũng nhờ nó mà lần đầu tiên tôi biết đến phương thức `normalize`.

Việc xóa dấu TV có nhiều mục đích, tuy nhiên phổ biến nhất có lẽ là để chuyển tiêu đề thành [dạng _slug_](https://en.wikipedia.org/wiki/Clean_URL#Slug) để tạo URL cho trang web. Sau đây là đoạn CodePen hiện thực phương thức chuyển chuỗi slug tiếng Việt:

<p class="codepen" data-height="344" data-theme-id="0" data-default-tab="js,result" data-user="trongthanh" data-slug-hash="KZQKxr" style="height: 344px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vietnamese Slug Converter with Unicode Normalizer">
  <span>See the Pen <a href="https://codepen.io/trongthanh/pen/KZQKxr/">
  Vietnamese Slug Converter with Unicode Normalizer</a> by Thanh Tran (<a href="https://codepen.io/trongthanh">@trongthanh</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Trên đây là hai ứng dụng thú vị của `String.prototype.normalize` với tiếng Việt. Nếu bạn phát hiện ra thêm ứng dụng nào hay ho nữa hay có thắc mắc, hãy để lại comment bên dưới.


---
layout: post
title: Những điều cần biết về ECMAScript
subtitle: Và những câu chuyện bên lề về JavaScript
author: Thanh Tran
description: Bạn có thắc mắc vì sao khi nói đến những cải tiến của JavaScript, người ta thường nói về ECMAScript? Hay khi nói về JavaScript hiện đại, người ta thường dùng chữ **ES6+**? Tại sao ECMAScript 6 còn được gọi là ECMAScript 2015?... Bài viết này sẽ giải đáp những thắc mắc đó của bạn.
date: 2019-01-16T11:09:09+07:00
tags: [ecmascript, javascript, vietnamese]
image: img/code-bg.jpg
---

> Lấy cảm hứng từ trang blog mới của Dan Abramov's [Overreacted.io](https://overreacted.io) và từ trang [the Old New Thing](https://blogs.msdn.microsoft.com/oldnewthing/) mà chính blog của Dan [lấy ý tưởng](https://twitter.com/dan_abramov/status/1069253352180121600), để mở đầu cho những bài viết của năm 2019, tôi sẽ **viết nhiều hơn về những "câu chuyện mới" từ những điều quen thuộc**, **những câu chuyện "tiểu tiết" nhưng thú vị** về những thứ mà lập trình viên vẫn gặp hằng ngày, hay **những ngóc ngách của kỹ thuật** mà chúng ta vẫn thường dùng nhưng quá bận rộn để tìm hiểu tường tận...

Để mở đầu chuỗi bài viết này, tôi sẽ bàn về một đặc tả mà chắc các bạn code JavaScript vẫn nghe về nó hằng ngày nhưng tôi dám cá ít bạn biết về cách nó đang vận hành. Đó chính là **ECMAScript**. Bạn có thắc mắc vì sao khi nói đến những cải tiến của JavaScript, người ta thường nói về phiên bản ECMAScript? Hay khi nói về JavaScript hiện đại, người ta thường dùng chữ **ES6+**? Tại sao ECMAScript 6 còn được gọi là ECMAScript 2015?... Bài viết này sẽ giải đáp những thắc mắc đó của bạn.

## Nguồn gốc ECMAScript

Để hiểu về ECMAScript chúng ta cần biết chút lịch sử của JavaScript.

JavaScript được sáng tạo bởi **Brendan Eich** (đọc là /aik/) vào năm **1995** chỉ trong **10 ngày** cho trình duyệt lúc bấy giờ là **Nescape Navigator**. Công ty Nescape sau đó vào 1996 đã gửi đặc tả JavaScript lên tổ chức [ECMA International](https://en.wikipedia.org/wiki/Ecma_International) để biến nó thành một đặc tả tiêu chuẩn cho các trình duyệt dưới sự bảo hộ của tổ chức ECMA. Ngôn ngữ scripting cho trình duyệt Nescape chính thức trở thành tiêu chuẩn ECMA với phiên bản đầu tiên được xuất bản vào tháng 06 1997 dưới tên mã **ECMA-262**, và JavaScript trở thành hiện thực (implementation) của đặc tả này.

Một điều thú vị với giai đoạn khởi đầu của ECMAScript đó là JavaScript là một cái tên được sở hữu nhãn hiệu (trademarked) bởi Sun Microsystems (cũng là chủ sở hữu của cái tên Java) và chỉ có Nescape mới có quyền sử dụng. Để cạnh tranh, **Internet Explorer 3** của Microsoft cũng hiện thực một ngôn ngữ scripting tương tự, nhưng để tránh rắc rối về quyền nhãn hiệu, phải dùng cái tên là **JScript**. Do đó khi được chuẩn hóa, để đảm bảo ai cũng có thể sử dụng tên của ngôn ngữ lập trình định nghĩa bởi đặc tả ECMA-262, cái tên **ECMAScript** đã được chọn.

## Các phiên bản ECMAScript đầu tiên

Thời điểm ECMAScript mới được phát hành, bản thân Nescape cũng tiếp tục hiện thực JavaScript và có phiên bản riêng. Cụ thể phiên bản ES đầu tiên tương đương với [**JavaScript 1.3**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.3). **ECMAScript 2** chỉ là phiên bản hiệu chỉnh để tương thích với tiêu chuẩn ISO/IEC 16262. **ECMAScript 3** là phiên bản có một số cải tiến đáng lưu ý như RegularExpression, try/catch... và tương đương với [**JavaScript 1.5**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.5) của Nescape Navigator 6.0, Firefox 1.0 và **JScript 5.5** của Internet Explorer 5.5.

**ECMAScript 4** với đặc tả nổi bật là class, khai báo kiểu, generator, iterator, và E4X (ECMAScript for XML) đã có sự không đồng thuận giữa hai tổ chức có thị phần trình duyệt lớn nhất lúc bấy giờ là Microsoft và Nescape/Mozilla dẫn đến việc phiên bản này **bị loại bỏ**. Tuy nhiên vẫn có một hiện thực khá nổi tiếng sử dụng đặc tả này đó chính là **ActionScript 3** dành cho Flash.

**ECMAScript 5** là phiên bản thay thế ES4, là sự thỏa hiệp của Brendan Eich (lúc này đã là CTO của Mozilla, tổ chức phi lợi nhuận thành lập bởi Nescape và chịu trách nhiệm phát triển trình duyệt nguồn mở Firefox) với các bên phản đối ES4 (trong đó có Yahoo, Microsoft và Google). Những cải tiến trong ES5 không nhiều và vốn ban đầu được Microsoft đưa ra dưới phiên bản đề nghị là **ES3.1**. Một số thay đổi đáng chú ý trong ES5: strict mode, JSON, các phương thức của Object và Array, getter & setter... ES5 được chính thức phát hành vào tháng 12/2009, tương đương với [**JavaScript 1.8.5**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.8.5) (Firefox 4, và là phiên bản JavaScript độc lập cuối cùng) và chỉ được hỗ trợ hoàn toàn kể từ Internet Explorer 9. Giai đoạn này cũng đánh dấu sự xuất hiện của Node.js, nền tảng server side thành công nhất của JavaScript.

Phiên bản tiếp theo sau ECMAScript 5 mất một khoảng thời gian dài để hoàn tất. Lúc này Firefox đã chiếm được thị phần đáng kể, IE vẫn chiếm đa số nhưng đang mất dần thị phần và Chrome là anh lính mới nhưng phát triển rất nhanh. JavaScript nhận được sự quan tâm lớn từ xu hướng phát triển web app nặng về phía Front End với cách tiếp cận AJAX. Tiếp theo sau đó là sự nở rộ của các JavaScript frameworks.

Các công ty nắm thị phần trình duyệt đa số đã đạt được sự đồng thuận cao nên dự án cho phiên bản ES tiếp theo được đặt tên là **ECMAScript Harmony**. ECMAScript Harmony cũng đánh dấu quy trình làm việc mới của tiểu ban ECMA **TC39** (Technical Committee 39) với các đặc tả mới được tiến hành **hoàn thiện theo module** và **chuẩn hóa qua 5 bước** (tương tự quy trình của W3C cho các module của HTML & CSS).

## ECMAScript 6 (ECMAScript 2015)

Các đặc tả của ES6 được khóa sổ vào tháng 6 2015 và phiên bản ES được đổi từ số thứ tự thành năm phát hành, **ECMAScript 2015**. Đây là phiên bản có rất nhiều cải tiến về cú pháp khiến cho JavaScript gần như lột xác hoàn toàn.

Một số đặc tả mới đáng chú ý (không phải tất cả):

- class và public method
- block scope và từ khóa `let`, `const`
- arrow function
- template string
- generator và iterator
- Promise
- destructuring assignment
- module (còn gọi là ECMAScript module / esm)
- ...

Với nhiều cú pháp không tương thích cho trình duyệt cũ, ES6 cũng đánh dấu sự phát triển của xu hướng viết JavaScript hiện đại và biên dịch thành JavaScript cũ với trình biên dịch nổi bật nhất là **6to5** mà sau này được biết đến với cái tên [**Babel**](https://github.com/babel/babel).

Hiện nay các trình duyệt hiện đại đều đã [hỗ trợ hết các đặc tả ES6](http://kangax.github.io/compat-table/es6/) trong đó có: Chrome, Firefox, Safari, MS Edge. Phiên bản cuối cùng của IE, IE11 chỉ hỗ trợ một vài đặc tính của ES6. Node.js hỗ trợ hoàn toàn ES6 (trừ module) từ phiên bản 6.0.

## ECMAScript Next và quy trình 5 bước

Kể từ ES2015, các phiên bản ECMAScript tiếp theo được phát hành định kỳ hằng năm, tập hợp những module đã được hoàn thiện qua [quy trình 5 bước](http://2ality.com/2015/11/tc39-process.html):

- **Stage 0 strawman**: Ý tưởng cho ES mới được đệ lên TC39 bởi thành viên hoặc TC39 contributor. Những ý tưởng này rất thô nhám và hoàn toàn có thể bị loại bỏ, không được hiện thực.
- **Stage 1 proposal**: Được sự đồng thuận bởi các thành viên TC39, ý tưởng ở stage 0 trở thành _đặc tả đề nghị_. Một thành viên của TC39 được phân làm người chịu trách nhiệm chính (champion). Đặc tả stage 1 phải có các tài liệu mô tả API, ví dụ và đôi khi là có sẵn polyfill.
- **Stage 2 draft**: Đặc tả mới phải được định nghĩa đầy đủ như trong _văn bản đặc tả chính thức_ (ECMAScript specification). Phải có hiện thực thử nghiệm bởi các JavaScript engine hoặc biên dịch thông qua Babel. Đến bước này, đặc tả đã có nhiều khả năng thành tiêu chuẩn và chỉ cho phép những thay đổi nhỏ.
- **Stage 3 candidate**: Đặc tả gần như hoàn thiện. Phải có ít nhất 02 hiện thực thử nghiệm từ các trình duyệt hoặc JavaScript engine (có thể nằm phía sau cờ config). Đặc tả được lấy đánh giá từ người dùng thông qua hiện thực thử nghiệm và cuối cùng phải được xem xét và duyệt bởi các thành viên khác của TC39.
- **Stage 4 finished**: Đặc tả đã trở thành tiêu chuẩn ECMAScript. Acceptance test trong bộ "Test 262" cho đặc tả phải được viết ra. Người _biên tập viên ECMAScript_ phải ký duyệt để đặc tả trở thành tiêu chuẩn ECMA và đặc tả mới sẽ được chỉ định cho phiên bản ECMAScript tiếp theo gần nhất.

Với quy trình hoàn thiện dần theo module như trên, có thể thấy ECMAScript trở thành tiêu chuẩn tiến hóa liên tục. Các phiên bản ES sau ES6/ES2015 có ít đặc tả mới hơn trong từng phiên bản. Việc gọi ES với phiên bản tăng dần không còn mấy ý nghĩa. Qua đó ta cũng thấy lý do phiên bản ES bây giờ được đặt theo năm phát hành.

Phiên bản ECMAScript mới nhất tại thời điểm tôi viết bài này là ECMAScript 2018.

## Hiểu biết về ECMAScript giúp cài đặt Babel hợp lý hơn:

Sự phổ biến của việc dùng Babel để biên dịch các cú pháp ES mới và một số boilerplate / starter-kit lạm dụng Babel stage preset (`@babel/preset-stage-#`) khiến cho các lập trình viên hay nhầm lẫn các đặc tả chuẩn và thử nghiệm của JavaScript. Bản thân tôi cũng từng nhầm lẫn.

Theo quan sát của tôi khi làm việc với React, có 2 đặc tả hay bị nhầm thuộc ES6 đó là: [`object spread`](https://github.com/tc39/proposal-object-rest-spread) và [`class field`](https://github.com/tc39/proposal-class-fields).

Object spread được phổ biến nhờ JSX và Redux reducer:

```jsx
// property spread để truyền tự động props từ component cha sang con
const Container = props => (
  <div>
    <Child {...props} />
  </div>
);

// Redux reducer là pure function:
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SOME_TYPE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
```

Nhiều bạn vẫn nhầm lẫn đây là một đặc tả của ES6 bởi ES6 đã có rest và spread cho Array. Nhưng **object spread chỉ thành đặc tả chính thức trong [ES2018](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Specifications)**.

Một cú pháp thường được sử dụng để khởi tạo property và auto-bind các method của React class component đó là class (public) fields:

```jsx
class MyComponent extends Component {
  // class property khởi tạo state
  state = { counter: 0 };
  // class property và arrow function cho phép this luôn được bind với instance của MyComponent
  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement} />
      </div>
    );
  }
}
```

Đây là một đặc tả được review khá chậm và kỹ lưỡng, và tại thời điểm viết bài này, nó vẫn đang ở [stage 3](https://github.com/tc39/proposal-class-fields). Vì đây là đặc tả mở rộng trên đặc tả class của ES6, trong khi các boilerplate lại hay sử dụng preset-stage-0, nhiều dev sử dụng class field vẫn không biết rằng đây vẫn là đặc tả chưa hoàn tất.

Để tránh những nhầm lẫn ở trên cũng như tránh cho dev lạm dụng những cú pháp thử nghiệm mà không có nhận thức về tiêu chuẩn ES, Babel 7.0 đã [chính thức khuyến cáo](https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets) và sẽ từ bỏ stage preset trong thời gian tới. Thay vào đó, Babel 7 khuyến khích bạn sử dụng [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) cho phép lập trình viên **sử dụng cú pháp đã trở thành chuẩn ES vào thời điểm hiện tại**. Và nếu muốn sử dụng những cú pháp thử nghiệm (stage <4), bạn phải khai báo tường minh plugin của Babel cho đặc tả đó. Cụ thể với _class field_, bạn phải thêm plugin [`babel-plugin-syntax-class-properties`](https://babeljs.io/docs/en/babel-plugin-syntax-class-properties) vào `package.json` và `.babelrc`.

## Một vài chuyện bên lề thú vị khác về JavaScript và ECMAScript

JavaScript ban đầu được đặt tên là **Mocha**, sau đó trong giai đoạn beta được đổi tên thành **LiveScript**. Tuy nhiên lúc phát hành chính thức, lại được đổi thành **JavaScript** với mục đích marketing và để ăn theo ngôn ngữ lập trình hiện đại đang nổi lúc bấy giờ là Java. Việc Nescape sử dụng tên JavaScript phải được sự đồng ý của Sun Microsystems, chủ sở hữu của Java và **Sun giữ quyền sở hữu nhãn hiệu với JavaScript™**.

Sau khi mua lại Sun Microsystems, **Oracle** hiển nhiên trở thành chủ sở hữu của Java và nhãn hiệu JavaScript™. Mozilla (công ty kế tục của Nescape) đã có thỏa thuận đặc biệt từ trước với Sun, và vẫn tiếp tục với Oracle, được quyền sử dụng miễn phí vô thời hạn nhãn hiệu JavaScript™. Tuy nhiên, bất kỳ tổ chức, hay cá nhân nào khác muốn thương mại hóa JavaScript™ phải được phép và phải trả phí sử dụng cho Oracle. Vì vậy bạn để ý sẽ thấy các conference về JavaScript không bao giờ dùng chữ JavaScript mà chỉ viết tắt **JS**. Năm ngoái đã có một app [bị từ chối cho lên iOS app store](https://www.techrepublic.com/article/why-its-finally-time-to-give-up-on-the-name-javascript/) vì trong tựa app có chữ JavaScript!

**TypeScript**, phát triển bởi Microsoft, một ngôn ngữ biên-dịch-sang-JavaScript, không phải là ngôn ngữ theo tiêu chuẩn ECMAScript. Mặc dù TypeScript hỗ trợ hoàn toàn các cú pháp của ES, TS có nhiều cú pháp bên ngoài ES chẳng hạn như decorators, interface, và đặc biệt là khai báo kiểu (mặc dù đã xuất hiện trong ES4, cho đến hiện tại khai báo kiểu vẫn không được TC39 xem xét ở bất cứ stage nào)... Dù vẫn mang tiếng là ngôn ngữ viết để biên dịch, TypeScript đã trở thành ngôn ngữ chính thức cho server side platform mới có tên [Deno](https://github.com/denoland/deno) được viết bởi chính tác giả của Node.js.

## Lời kết

Những đặc tả mới của ECMAScript luôn hướng đến việc giúp cho công việc của lập trình viên dễ dàng hơn. Nếu bạn đang có ý định phát triển thư viện hoặc framework trên JavaScript, hiểu biết về ECMAScript là rất cần thiết để cân nhắc những cú pháp mới cho thư viện của mình, ví dụ: Koa framework, Redux Saga tận dụng generator; GraphQL, styled-components tận dụng tagged template string...

Nếu quan tâm đến các cú pháp và tính năng mới đang trong giai đoạn hoàn thiện, bạn có thể tham khảo [danh sách các đặc tả đề nghị](https://github.com/tc39/proposals) và [danh sách các đặc tả đã sẵn sàng](https://github.com/tc39/proposals/blob/master/finished-proposals.md) của TC39 tại Github. Nếu bạn muốn tham khảo cách dùng một cú pháp cụ thể, nơi tham khảo tin cậy nhất chính là [tài liệu MDN của Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript). Để biết có những đặc tả mới nào trong một phiên bản cụ thể, VD: ES2016, ES2017... bạn có thể google những bài blog tổng hợp.

Cuối cùng, nếu bạn có thắc mắc hay muốn trao đổi thêm, bạn có thể để lại comment bên dưới bài viết này.

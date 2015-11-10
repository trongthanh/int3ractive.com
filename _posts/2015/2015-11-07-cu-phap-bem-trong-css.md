---
layout: post
title: Sử dụng ký pháp BEM cho CSS
subtitle: 
author: Thanh Tran
meta-description: 
date: 2015-11-08T14:39:06+07:00
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

Với cách đặt tên class này, ta có __Block__ sẽ đại diện cho một component, và trong ví dụ ở đây, là một button `.btn`. Block cũng sẽ đóng vai trò là một _parent_ mà trong nó sẽ có một hoặc nhiều hơn __Element__ con liên quan. Tên class cho Element và mối quan hệ của nó với Block sẽ được diễn tả bằng tên của Block, tiếp theo là _02 gạch dưới_, và cuối cùng là tên của Element `.btn__price`. Thành phần thứ ba của BEM là các __Modifier__ mà chúng sẽ giúp điều chỉnh các trạng thái hoặc phái sinh khác của Block / Element. Tên của Modifier sẽ được nối với tên Block / Element phía trước bởi _02 gạch ngang_ `.btn--orange`.

Trong HTML, ký pháp BEM sẽ được dùng như sau:

```html
<a class="btn btn--big btn--orange" href="http://int3ractive.com">
    <span class="btn__price">$9.99</span>
    <span class="btn__text">Subscribe</span>
</a>
```

Ấn tượng đầu tiên với bạn có thể là tên class quá xấu và mất thời gian hơn so với việc tạo riêng một class mới cho một kiểu button mới. Tuy nhiên, ký pháp BEM sẽ mang lại nhiều lợi ích mà tôi sẽ phân tích tiếp theo sau đây:

## Tại sao sử dụng ký pháp BEM

Trước tiên, ký pháp BEM giúp người mới tham gia dự án dễ dàng phát hiện ra các trạng thái và các đối tượng con của một component đã được viết sẵn. Điều này giúp tránh cho họ phải viết lại những kiểu CSS đã có sẵn và hạn chế việc viết thừa code hoặc trùng kiểu CSS, điều mà rất hay xảy ra trong dự án lớn có nhiều người tham gia.

Thứ hai, chỉ cần đọc HTML, bạn vẫn có thể nhanh chóng nắm được các thành phần phụ thuộc lẫn nhau. Trong ví dụ trên, bạn dễ dàng nhìn thấy `.btn__price` phụ thuộc vào `.btn` mặc dù bạn chưa biết vai trò cụ thể của nó ngay lập tức.

Thứ ba, với ký pháp BEM, mọi định nghĩa chỉ có một cấp class và không lồng cấp . Điều này giúp cho độ ưu tiên (specificity) chung của hệ thống CSS thấp. Đây là một lợi thế vì sau này bạn không phải "chiến đấu" với specificity của những thuộc tính đã có sẵn (VD: siêu lồng cấp `.a .b .c .d .e {...}`) cũng như vận dụng những kỹ thuật không hay để thay thế được style (chẳng hạn `!important` hay inline CSS).

Quy luật thác nước cascading của CSS là con dao hai lưỡi: nó giúp dễ dàng định nghĩa những thuộc tính và kiểu chung trên những selector tổng quát mà không cần phải khai báo lặp lại trên từng phần tử, nhưng nếu không nắm được tầm ảnh hưởng, lập trình viên CSS rất dễ gây ra những tác động phụ đến các đối tượng không liên quan khi chỉnh sửa trên những class có sẵn hoặc thậm chí viết mới. Với ký pháp BEM, lập trình viên sẽ tự tin hơn khi bắt tay chỉnh sửa hoặc viết thêm style vì đã biết rõ tầm ảnh hưởng của selector mà mình đang viết ra.

Tổng hợp lại, ký pháp BEM, nếu áp dụng triệt để, sẽ giúp cải thiện sự phối hợp giữa các thành viên trong nhóm. Ngoài ra, nó buộc người viết CSS phải đầu tư suy nghĩ về việc xây dựng những component độc lập và tái sử dụng được (phù hợp với tiêu chí của [OOCSS](link?)).

## Sai lầm hay mắc khi sử dụng BEM

1. Sử dụng selector lồng cấp












## Sử dụng BEM với SASS

Với phiên bản SASS mới nhất hiện nay, việc viết theo ký pháp BEM trong SCSS dễ dàng và thuận tiện hơn bao giờ hết.

Bạn vẫn sẽ sử dụng cách viết lồng để cô lập khối component và kết hợp với biểu tượng _parent_ `&` của SASS để đặt tên cho Element và Modifier mà không phải đánh lại tên của Block. VD:

```scss
.block {
    
    &__element {}

    &--mod {} 
}
```

Mặc dù viết lồng cấp, khi được biên dịch thành CSS, chúng vẫn được trải phẳng thành một cấp class theo đúng tinh thần của BEM:

```css
.block {}
    
.block__element {}
 
.block--mod {} 
```

Nếu bạn sử dụng LibSass (nhanh hơn rất nhiều lần bản gốc Ruby) để biên dịch SASS, thì hãy đảm bảo các công cụ wrapper được cập nhật các phiên bản tương đương hoặc mới hơn như sau: node-sass [3.4.0](https://github.com/sass/node-sass/releases/tag/v3.4.0), gulp-sass [2.1.0](https://github.com/dlmanning/gulp-sass/releases/tag/v2.1.0) (nếu sử dụng [GulpJS](link?)) và grunt-sass [1.1.0](https://github.com/sindresorhus/grunt-sass/releases/tag/v1.1.0) (nếu sử dụng [GruntJS](link?))

Thế còn LESS? Vì tôi không sử dụng LESS nên sẽ không đề cập ở đây. Bạn có thể giúp bổ sung hướng dẫn cho LESS nếu nó có cú pháp trợ giúp tương đương.

## Các ý kiến không đồng tình

Vẫn có một số ý kiến hoài nghi và không đồng tình với phương pháp đặt tên này. 

### Tên class quá xấu

Đồng ý với bạn rằng BEM trông kỳ quặc, tuy nhiên khả năng mà nó đem lại vô cùng lớn và sẽ hoàn toàn xoá mờ hạn chế về mặt "ngoại hình" của nó.

Ngoài ra BEM đòi hỏi phải gõ nhiều chữ hơn và chiếm nhiều byte ký tự hơn, tuy nhiên với việc sử dụng SASS như trên và việc gzip file đã trở thành tiêu chuẩn như hiện nay, những điều đó không còn là vấn đề so với lợi ích mà BEM mang lại.

### Descendant selector vẫn giải quyết được vấn đề như trước giờ

Có một [chỉ trích](https://twitter.com/samuelfine/status/575645771334291456) dành cho BEM thế này: Thay vì viết

```css
.site-search        {}
.site-search__field {}
.site-search--full  {}
```

Họ đặt vấn đề rằng tại sao không viết như thế này:

```css
.site-search        {}
.site-search input  {}
.site-search.full   {}
```

Rõ ràng cả hai cách viết đều có thể giúp hiện thực được component cụ thể này và cách thứ hai có vẻ "gọn gàng" hơn. Tuy nhiên khi CSS của toàn bộ dự án trở nên lớn và phức tạp hơn, thì rất khó tránh khỏi các kiểu được định nghĩa chồng chéo lên nhau ngoài tầm kiểm soát. 

Thử tưởng tượng `.site-search` cũng nằm trong một container tên `.main` và những `input` bên trong `.main` cần được style với `.main input`. Như vậy, `input` bên trong `.site-search` sẽ bị điều chỉnh một cách không mong muốn.

Tương tự, nếu như `.full` trong ví dụ trên hoặc một tên phổ biến như `.label` được dùng để , thì sẽ có rủi ro (rất cao) là một ngày nào đó một lập trình viên khác định nghĩa một class global trùng tên và sẽ làm hỏng style của element kia.

Ngoài ra, khi bạn đọc trong ngữ cảnh HTML, bạn sẽ khó thấy được quan hệ ràng buộc giữa `input` và `.full` với block `.site-search`.

### "Tôi đơn giản là không thích ký pháp này"

Nhiều người khi nhìn thấy cách đặt tên BEM đã ngay lập tức bác bỏ nó. Họ không thích BEM, đó là quyền của họ, tuy nhiên sẽ là vô lý nếu phản bác việc cần có một số quy tắc đặt tên để dễ dàng nắm bắt và quản lý CSS trong dự án trung và lớn.

Hơn nữa, bạn hoàn toàn có thể nghĩ ra cho mình một cách đặt tên khác cho hợp "khẩu vị", nhưng vẫn dựa trên nguyên tắc của BEM đã đề ra. Là kết quả đúc kết từ những kiến trúc CSS lớn và phức tạp trước đây, đề xuất của BEM không phải vô tình lại có một số điểm chung với các phương pháp quản lý CSS khác như SMACSS hay OOCSS. Lấy ví dụ khái niệm module của SMACSS:

```css
/* Ví dụ một module */
.btn { }

/* Modifier của một module */
.btn-primary { }

/* Btn Module với State */
.btn.is-collapsed { }
```

Trong cách phương pháp quản lý CSS vừa kể trên thì chỉ có BEM là làm rõ được mối quan hệ với các thành phần con bên trong. Tóm lại, mỗi phương pháp đều có ưu nhược điểm. Quan trọng là cả team phải có phương pháp tiếp cận khoa học và áp dụng triệt để thì kiến trúc CSS của cả dự án mới vững và dễ bảo trì.
 
## Câu hỏi thường gặp:

+ __Hỏi:__ Element có modifier hay không?
    __Đáp:__ Có. Element có thể có modifier riêng của nó. Ví dụ:

```css    
    .accordion__copy--open {
        display: block;
    }
```

+ __Hỏi:__ Có cần phải đặt tên class cho tất cả element (thẻ HTML) trong block hay không?
    __Đáp:__ Không cần thiết, chỉ những element cần có style riêng được viết trong CSS. Tuy nhiên cũng không nên lạm dụng những thẻ wrapper (phổ biến nhất là DIV) một cách vô tội vạ và không có chức năng vai trò cụ thể nào. Như vậy việc đặt tên element con cũng khiến bạn phải suy nghĩ một tag nào đó có thật sự cần thiết thêm vào trong block hay không.

+ __Hỏi:__ Bên trong element con `foo` có một tag đóng vai trò một element con `bar` khác của block, vậy việc đặt tên class cho element `bar` này như thế nào? Có nên đặt là `.block__foo__bar`?
    __Đáp:__ Vẫn đặt bằng tên block và hai gạch dưới rồi đến tên element `.block__bar`, không chen giữa bằng `foo__`. Nói tóm lại, tên của element chỉ cần thể hiện quan hệ phụ thuộc với block, không cần phải chỉ rõ sự lồng bên trong nhau của các element con. (Xem thêm ví dụ trong câu hỏi tiếp theo)

+ __Hỏi:__ Một thẻ HTML có thể là element của 2 block khác nhau không?
    __Đáp:__ Hoàn toàn có thể. Trong ví dụ bên dưới, button có biểu tượng dollar-sign là một block `.icon`. Có thể trong block `.btn`, biểu tượng dollar-sign cần được style riêng, nên cần có một cái tên xác định rõ vai trò và style cho element này là `.btn__icon`. Nếu block `.icon.icon--dollar-sign` được dùng ở một ngữ cảnh khác, thì rõ ràng nó không cần class `.btn__icon` nữa vì tên class đã chỉ rõ sự ràng buộc với block `.btn` và chỉ được thêm vào khi ở bên trong nó.

```html
    <a class="btn btn--big btn--orange" href="http://int3ractive.com">
        <span class="btn__price"><i class="icon icon--dollar-sign btn__icon"></i>9.99</span>
        <span class="btn__text">Subscribe</span>
    </a>
```

+ __Hỏi:__ Một element con có thể đóng vai trò là block của riêng nó không? Có thể xây dựng chuỗi component phụ thuộc nhau như `.a__b__c` không?
    __Đáp:__ Câu hỏi này thật sự ngoài tầm hiểu biết và kinh nghiệm của tôi. Theo tôi là có thể có những hoàn cảnh đặt biệt như vậy. Tuy nhiên, theo tôi, nếu có cũng không nên quá 2 cấp, tức là element con chỉ đặt đến `.a__b__c` là tối đa. Điều này là để sự phụ thuộc không quá sâu, làm giảm khả năng dùng lại của block (portability) và sự linh hoạt của các đối tượng CSS theo tinh thần OOCSS. Xem ví dụ bên dưới.

```css
    /* block list */
    .list { }
    /* item là con của list */
    .list__item { }
    /* link là con của block list__item, để phân biệt với list__link hoặc chỉ rõ mối quan hệ phụ thuộc giữa item và link*/
    .list__item__link { }
```
















http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/
https://css-tricks.com/bem-101/
http://webuniverse.io/css-organization-naming-conventions-and-safe-extend-without-preprocessors/
http://www.smashingmagazine.com/2012/04/a-new-front-end-methodology-bem/
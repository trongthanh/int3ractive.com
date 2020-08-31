---
title: Mức Tối Thiểu Của Lập Trình Viên Front End
subtitle: Có rất nhiều thứ phải học để làm được Front End, bạn có muốn đi đến cùng?
metaDesc: Hệ thống kỹ năng và kiến thức tối thiểu của một lập trình viên Front End cần có để có làm việc trong nhóm một cách hiệu quả và không cần nhiều sự trợ giúp.
date: 2015-08-17T14:55:00.000+07:00
author: Thanh Tran
tags: [thoughts, front end, process]
updated: 2015-11-07T12:42:30+07:00
---
![Tag Cloud](http://2.bp.blogspot.com/-mF8YcFrCO8Q/VXPniJnFrZI/AAAAAAAABDY/T7PQ5bKPoYs/s640/front-end-baseline.png "Tag Cloud được tạo bằng Wordle.net")

### Mức kỹ năng tối thiểu (baseline) là gì?

Là hệ thống kỹ năng và kiến thức tối thiểu của một nhân viên kỹ thuật cần có để có làm việc trong nhóm một cách hiệu quả và không cần nhiều sự trợ giúp.

### Tại sao phải có mức tối thiểu cho lập trình viên Front End?

Từ kinh nghiệm làm việc trong nhiều nhóm phát triển phần mềm lớn nhỏ khác nhau, tôi nhận ra rằng một lập trình viên mới gia nhập rất cần được chỉ dẫn về quy ước và quy trình làm việc của nhóm phát triển để có thể nhận nhiệm vụ cũng như thay thế và hỗ trợ đồng nghiệp một cách trơn tru. Ngoài ra, những lập trình viên ít kinh nghiệm cũng cần được đào tạo những kiến thức tối thiểu để có thể đảm bảo được yêu cầu kỹ thuật cũng như hiệu suất khi thực hiện dự án. Tất cả những kiến thức và kỹ năng đó khi tập hợp lại sẽ thành mức kỹ năng tối thiểu của một lập trình viên trong môi trường phát triển phần mềm.

Khi xây dựng đội phát triển Front End tại [Nâu Studio](https://naustud.io), tôi đã nghiên cứu thật kỹ về những kỹ năng và kiến thức chuyên môn tối cần thiết để được đưa vào hệ thống kiến thức cơ sở của nhóm và làm tâm điểm của việc huấn luyện căn bản.

Lấy cảm hứng từ bài viết [A Baseline for Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) của Rebecca Murphey, tôi sẽ ghi lại dưới đây mức tối thiểu về kiến thức cho các lập trình viên Front End hiện đại với hệ thống phù hợp hơn cho người mới bắt đầu cũng như cập nhật những xu hướng mới nhất của năm 2015.

Để bắt đầu, tôi sẽ bàn về 3 trụ cột của Web Front End:

## HTML
![Hình minh hoạ cho phần HTML](http://4.bp.blogspot.com/-EVKCwQoon_g/VdGOAEWdqaI/AAAAAAAARiY/YhGiwwAihW8/s400/html-for-baby.jpg "HTML for baby")

Thực tế cho thấy có rất nhiều lập trình viên xem nhẹ HTML. Theo quan sát của tôi, nhiều lập trình viên dùng tag HTML rất tuỳ tiện, thêm các thẻ bao ngoài một cách vô tội vạ và kết quả là việc xử lý giao diện tuỳ ứng (responsive) cũng như canh lề rất vất vả. Khi làm càng nhiều, bạn sẽ nhận ra rằng HTML được viết gọn gàng và súc tích sẽ giúp ích rất nhiều cho việc xử lý CSS và cải thiện tốc độ website trên trình duyệt (đặc biệt là trên thiết bị di động). Làm được như vậy đòi hỏi một kỹ năng tuyệt vời, và tôi dám nói rằng viết HTML là cả một nghệ thuật.

Vì vậy, để trở thành một lập trình viên HTML thành công, bạn phải có khả năng kết hợp các phần tử (element) HTML để đạt yêu cầu cả về ngữ nghĩa và tính tối ưu. Điều này có nghĩa bạn phải nắm vững các quy luật layout mặc định và ý nghĩa sử dụng của tất cả các thẻ HTML. Ngoài việc tiến bộ dần thông qua kinh nghiệm thực tế, bạn có thể tăng tốc kỹ năng HTML của mình nếu được đào tạo bài bản.

Các tài liệu hỗ trợ:

- [HTML5 Doctor](http://html5doctor.com/): Tập hợp các bài phân tích cách sử dụng các thẻ HTML cho đúng ngữ nghĩa và mục đích.
- [HTML basic tutorials](https://docs.webplatform.org/wiki/html/tutorials): Tài liệu hướng dẫn HTML căn bản, phù hợp cho người mới bắt đầu.

## CSS
![CSS!!!](http://i.imgur.com/Q3cUg29.gif "CSS!!!")

Rất nhiều người mới bắt đầu với Web, đặc biệt là sinh viên CNTT ở Việt Nam, được học rất sơ sài về CSS trên lớp và các sách, giáo trình liên quan đều đã lỗi thời. Đa số các bạn sẽ học CSS bằng phép thử-và-sai (trial and error) và đó là một cách học cực kỳ kém hiệu quả.

Điều này không tồn tại trong đội lập trình viên của Nâu. Những khái niệm căn bản của CSS như thứ tự thác nước (cascading), luật về độ ưu tiên (specificity), bộ chọn lọc (selectors), sự thừa kế, mô hình hộp (box model), và ngữ cảnh xếp chồng (stacking context) phải được các bạn hiểu rõ.

Sau những kiến thức căn bản, bạn nên bắt đầu tìm hiểu về [CSS hướng đối tượng (OOCSS)](https://github.com/stubbornella/oocss/wiki) hoặc bắt đầu thực hành những chỉ dẫn trong tài liệu [Những nguyên tắc về CSS](http://cssguidelin.es/)

Ngoài ra, một lập trình viên Front End giỏi luôn thủ sẵn một số thủ thuật về CSS. Chẳng hạn, bạn phải biết tất cả các mẹo canh giữa nội dung theo chiều dọc khác nhau khi mà Flexbox vẫn chưa được áp dụng rộng rãi. Bạn cũng phải biết khi nào cần dùng pseudo-elements, tạo các khối hình học bằng CSS thuần, icon từ webfont, hoặc sprite sheet… để hiện thực giao diện với hiệu suất và độ tương thích tốt nhất.

Cuối cùng, một lập trình viên Front End hiện đại phải biết sử dụng một ngôn ngữ biên dịch sang CSS (như SASS hoặc LESS) để cải thiện khả năng bảo trì và hiệu suất làm việc với CSS.

Một khi nền tảng đã được nắm vững, bạn sẽ thấy việc học thêm hoặc ứng dụng những tính năng mới của CSS3 sẽ chẳng có chút khó khăn.

Tài liệu tham khảo:

- [CSS basic tutorials](https://docs.webplatform.org/wiki/css/tutorials): Hướng dẫn CSS căn bản
- [OOCSS](https://github.com/stubbornella/oocss/wiki): Các khái niệm về CSS hướng đối tượng
- [CSS Guidelines](http://cssguidelin.es/): Những nguyên tắc CSS
- [CSS Tricks](http://css-tricks.com/): Các thủ thuật CSS

## JavaScript

<img align="right" src="http://2.bp.blogspot.com/-bhkZ88s-OXg/VdGOraNblLI/AAAAAAAARig/U7fH8-C9UbU/s320/eloquent-javascript-cover.png " alt="Eloquent JavaScript book cover" />

Nếu như vài năm trước, jQuery là yêu cầu bắt buộc để nhập môn Giao Diện Web thì bây giờ [không còn nữa](http://youmightnotneedjquery.com/). Tuy nhiên theo tôi nó vẫn rất hữu ích cho những người mới bắt đầu thực hành JavaScript trong bối cảnh tính năng và sự tương thích giữa các trình duyệt vẫn chưa đồng nhất.

Tiếp theo sau jQuery, việc nắm vững kiến thức về ngôn ngữ JavaScript thuần vẫn là mục tiêu tối quan trọng cho người làm Front End. Bên cạnh học từ quyển sách kinh điển [JavaScript: The Good Parts](http://www.amazon.com/exec/obidos/ASIN/0596517742/wrrrldwideweb) do Rebecca giới thiệu, ngày nay bạn có thêm những lựa chọn miễn phí nhưng nội dung vẫn chất lượng như quyển [Eloquent JavaScript](http://eloquentjavascript.net/) hoặc [JavaScript Enlightenment](http://www.javascriptenlightenment.com/).

Từ kinh nghiệm thực tiễn, tôi tin rằng những đặc tính của ngôn ngữ JavaScript sau đây cần được nắm rõ bất kể trình độ bạn đang ở đâu, đó là chuỗi prototype (prototype chain), sự bao đóng (closure), và từ khoá `this`. Ngoài ra những đặc tính độc đáo khác của JS mà lập trình viên cũng cần phải biết như chuyển đổi kiểu động, xây dựng đối tượng trực tiếp từ giá trị (literal), sự dịch chuyển lên trên vị trí khai báo của biến và hàm (variable and function hoisting)…

Khi đã thành thạo với JavaScript thuần, và muốn tiếp cận cách viết có cấu trúc để dễ mở rộng và bảo trì, bạn sẽ nghiên cứu các đặc ngữ của JS (idiom), mẫu thiết kế (design pattern), cách viết module, và các framework MV* phổ biến hiện nay.

Năm 2015 là năm mà phiên bản tiếp theo của JavaScript, ECMAScript 6 (hay còn gọi là ECMASCript 2015) được thống nhất và thông qua về đặc tả để tiến hành hiện thực dần trong các phiên bản kế tiếp của các trình duyệt. Đi kèm đó là [xu hướng](https://www.youtube.com/watch?v=PlmsweSNhTw) sử dụng công cụ biên dịch từ ES6 sang ES5. Để không đứng ngoài xu hướng, bạn cần trang bị kiến thức về ECMAScript 6 ngay từ bây giờ và nên thử nghiệm quy trình viết bằng ES6 và biên dịch thành ES5 để chạy trên các trình duyệt hiện tại.

Nói về NodeJS, theo tôi nó không thuộc hệ thống kiến thức tối thiểu cho người lập trình Front End (trừ khi bạn viết cả back end bằng JavaScript). Tuy nhiên, bạn sẽ dần làm quen với nó như một hệ quả tất yếu khi bạn sử dụng những công cụ trong quy trình Front End (xem bên dưới) mà hầu hết đều được viết trên nền NodeJS.

Các link tham khảo:

- [Eloquent JavaScript](http://eloquentjavascript.net/): tài liệu dành cho người mới học JavaScript rất hay, và miễn phí.
- [JavaScript Enlightenment](http://www.javascriptenlightenment.com/): Một quyển sách khác dành cho người học JS từ đầu.
- [Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js/): Đôi khi bạn đọc những đoạn code JS người khác viết mà không hiểu. Những đoạn “mật mã” đó sẽ được giải mã tại đây. ;)
- [TodoMVC](http://todomvc.com/): Website không thể bỏ qua cho những bạn cần tham khảo và so sánh kiến trúc của những framework MV* khác nhau.
- [Writing Modular JS](http://addyosmani.com/writing-modular-js/): Thông tin hữu ích về về các mẫu thiết kế module.
- [Understanding ES6](https://leanpub.com/understandinges6): Học ECMAScript 6 với Nicholas C. Zakas

## Quy Trình Front End Hiện Đại

Như tôi đã đề cập, kết quả làm việc nhóm có tốt hay không một phần phụ thuộc vào việc các thành viên có tuân thủ quy ước viết code (coding style convention) và quy trình làm việc (workflow) của nhóm hay không. Tuy nhiên, để nhớ hết tất cả các quy tắc đó không phải là việc đơn giản. Trong đội lập trình của Nâu, chúng tôi sử dụng các công cụ kiểm lỗi được tích hợp trong quy trình từ lúc soạn thảo cho đến biên dịch, giúp duy trì quy ước và hình thành thói quen cho các thành viên.

Không cần phải bàn cãi, trình duyệt là công cụ không thể thiếu của người làm Front End. Có hai kỹ năng mà tôi muốn nhấn mạnh ở đây đó là khả năng sử dụng công cụ cho người lập trình (developer tools / dev-tools) có sẵn trong trình duyệt và khả năng sử dụng phần mềm tự động nạp lại trang web (live/auto reload). Tất cả các trình duyệt hiện đại đều có dev-tools đi kèm, tuy nhiên theo tôi, dev-tools trên trình duyệt Chrome là tốt nhất hiện nay. Về phần mềm tự nạp trang, bạn có thể thử tìm hiểu [Browsersync](http://www.browsersync.io/).

Bên cạnh trình duyệt, trình soạn thảo code đóng vai trò quan trọng không kém. Bất kể bạn chọn phần mềm gì, hãy bảo đảm rằng nó có khả năng tự hoàn tất code cũng như là khả năng kiểm lỗi tức thì cho ngôn ngữ lập trình bạn viết. Với đặc tính phân tán và ít ràng buộc như HTML/CSS/JS, trình soạn thảo cho những ngôn ngữ này cũng rất cần khả năng sửa văn bản trên [nhiều con trỏ](http://blog.generalassemb.ly/blog/wp-content/uploads/2013/11/multiplecursors.gif) và [mở file nhanh bằng tìm kiếm](http://blog.generalassemb.ly/blog/wp-content/uploads/2013/11/gotoanything.gif). Nếu bạn hỏi, tôi sẽ đề nghị bạn dùng thử [Sublime Text](http://www.sublimetext.com/) hoặc [Atom](https://atom.io/). Ngoài ra, đừng bỏ qua [Emmet](http://emmet.io/), một công cụ bổ sung cho các trình soạn thảo "giúp cải thiện hiệu suất làm việc với HTML và CSS một cách đáng kể".

Quy trình Front End hiện đại sẽ rất thiếu sót nếu không nhắc đến những công cụ tự động hoá chạy bằng dòng lệnh (command line) như [Grunt](http://gruntjs.com/), [Gulp](http://gulpjs.com/) hoặc những công cụ tương tự có giao diện (GUI) như [Codekit](http://incident57.com/codekit/), [LiveReload](http://livereload.com/). Việc xử lý từng bước và tối ưu hoá sản phẩm Front End đã trở nên [rất phức tạp](https://developers.google.com/speed/docs/insights/rules) để có thể làm bằng tay. Khả năng vận dụng các công cụ tự động hoá đã trở thành yêu cầu cơ bản của lập trình viên Front End.

Các kỹ năng và kiến thức hiển nhiên khác mà bạn cần phải có: sử dụng phần mềm quản lý phiên bản, quy trình phát triển phần mềm, mô hình phát triển phần mềm agile, công cụ hỗ trợ giao tiếp (email, nhắn tin, gọi video…), và hiểu biết tối thiểu về hệ điều hành mà bạn dùng để làm việc.

- [Nau Front End Dotfiles](https://github.com/naustudio/dotfiles): Một số cài đặt và công cụ cho quy trình của Nâu.
- [Tự động hoá với Grunt (video)](https://youtu.be/38D6SW26mn0): Tôi sẽ hướng dẫn các bạn sử dụng một trong những công cụ tự động hoá Front End phổ biến nhất .
- [Khởi tạo dự án Front End với các công cụ kiểm tra lỗi tự động (video)](https://youtu.be/sBNkiuDkILA): Đây là một phần của quy trình khởi tạo dự án mới mà chúng tôi đang áp dụng.
- [Modern Front End Workflow from Start to Finish ](http://blog.chartbeat.com/2014/01/30/modern-front-end-workflow-start-finish/): Quy trình phát triển Front End hiện đại từ đầu đến cuối.
- [JavaScript Development Workflow of 2013 (video)](https://youtu.be/f7AU2Ozu8eo) bởi Paul Irish. Mặc dù đã được trình bày cách đây 2 năm, nhưng những công cụ được đề cập vẫn được áp dụng trong thời điểm hiện tại.

## Sự Cải Tiến Tăng Dần (Progressive Enhancement)
![Minh hoạ Progressive Enhancement](http://4.bp.blogspot.com/-eR_7opxpffU/VdGP9krUTaI/AAAAAAAARis/oIe-p6ZAjAo/s640/page-120.jpg "Minh hoạ progressive enhancement")
Hiểu biết về [Cải Tiến Tăng Dần](http://en.wikipedia.org/wiki/Progressive_enhancement) đã trở thành một yêu cầu bắt buộc đối với các lập trình viên Front End hiện đại. Đã qua rồi cái thời mà lập trình viên phải cố gắng hiện thực trang web cho giống y đúc trên mọi trình duyệt hoặc loại bỏ hoàn toàn những trình duyệt mà đặc tả không yêu cầu hỗ trợ. Phương pháp được khuyến khích như một chuẩn mực hiện nay là Cải Tiến Tăng Dần (Progressive Enhancement), trong đó lập trình viên Front End sẽ hiện thực website với trải nghiệm tốt nhất có thể tuỳ theo khả năng của từng loại trình duyệt khác nhau. Điều này yêu cầu bạn phải có hiểu biết về các phiên bản khác nhau của JS / CSS / HTML mà các trình duyệt hỗ trợ; biết sử dụng [caniuse.com](http://caniuse.com/), [Modernizr](http://modernizr.com/), [html5boilerplate](https://html5boilerplate.com/); cũng như biết khi nào cần áp dụng polyfill hoặc bỏ qua một hiệu ứng (nhưng nội dung vẫn đầy đủ) trên một trình duyệt nào đó.

Tham khảo thêm:

- [Progressive Enhancement 2.0](https://youtu.be/hdTxeR90_1E) trình bày bởi Nicholas Zakas
- [Progressive Enhancement: What Is It and How to Use It](http://www.smashingmagazine.com/2009/04/22/progressive-enhancement-what-it-is-and-how-to-use-it/)

## Kỹ Năng Về Giao Diện

Bạn cần có chút hiểu biết về hiệu ứng kiểu chữ (typography), các khái niệm giao diện (UI) và chuyển động (animation) và biết những thuật ngữ chuyên sâu để có thể trao đổi một cách dễ dàng với các bạn thiết kế. Ví dụ: nút hamburger, hero banner, the fold, hiệu ứng parallax…

Bên cạnh đó, bạn cũng cần có kỹ năng sử dụng Photoshop ở mức cơ bản để có thể trích xuất được những hình ảnh cần thiết cho việc hiện thực cũng như tham khảo các giá trị cho CSS (độ trong suốt, chuyển tiếp màu, màu sắc…). Những thao tác bằng tay này có thể sẽ được thay thế hoàn toàn bằng những công cụ hiện đại (Photoshop CC 2014, Sketch…) tuy nhiên kỹ năng về phần mềm đồ hoạ vẫn hữu ích cho bạn khi thỉnh thoảng bạn sẽ cần tự mình chỉnh sửa lên file mà không cần sự hỗ trợ của người thiết kế.

Bước vào năm 2015, một kỹ năng nữa mà bạn cũng cần biết, đó là sử dụng công cụ xử lý ảnh vector (Illustrator, Inkscape…) để hiệu chỉnh và trích xuất các icon và thành phần giao diện bằng vector cho thiết kế phẳng (flat design) đang là xu hướng của cả thế giới.

- [Video hướng dẫn về CSS Text và Typography](https://youtu.be/Rl5ukKqkhkc).

## Kỹ Năng về Tiếng Anh

Mức tiếng Anh tối thiểu, theo tôi, không cần phải là trình độ A, B, C hay bao nhiêu điểm TOEIC, mà là thái độ tích cực và quyết tâm cải thiện kỹ năng giao tiếp bằng tiếng Anh của bạn.

Không sớm thì muộn, bạn sẽ nhận ra rằng tiếng Anh là yếu tố tối cần thiết đối với môi trường làm việc hiện đại và chuyên sâu về kỹ thuật. Công nghệ phần mềm nói chung và Web Front End nói riêng đang phát triển với tốc độ vũ bão mà nếu không có ngoại ngữ, bạn sẽ không thể nào bắt kịp. Bạn phải đọc tài liệu về các xu hướng mới, nghe các bài thuyết trình về kỹ thuật và nói chuyện với khách hàng trực tiếp hoặc qua chat/email rất thường xuyên để làm việc… Cũng có nhiều lập trình viên cho rằng chỉ cần đọc và viết tốt tiếng Anh là đủ. Tuy nhiên, bạn sẽ bỏ lỡ rất nhiều cơ hội tốt khi khả năng nghe hiểu và giao tiếp bằng tiếng Anh còn hạn chế. Vì vậy nếu tiếng Anh của bạn chưa đủ để giao tiếp, thì ngay từ bây giờ hãy không ngừng trau dồi và cải thiện.

Lý Quang Diệu khi đến thăm Việt Nam đã chia sẻ về [tầm quan trọng của tiếng Anh](http://vietnamnet.vn/vn/giao-duc/227059/ly-quang-dieu-noi-ve-giao-duc-viet-nam.html):

> Trả lời cho câu hỏi "Làm thế nào để không tụt hậu?" __chỉ có một cách là phải giỏi tiếng Anh__. Đây là điều ông Lý Quang Diệu nhấn mạnh. [...]
>
> Ông Lý Quang Diệu gợi ý: "Đại học Việt Nam nên có sách giáo khoa tiếng Anh ở các ngành quan trọng như kỹ thuật, công nghệ... bởi nếu chỉ dùng sách Việt Nam thì chắc chắn sẽ tụt hậu". [...] Ông cảnh báo, nếu tất cả sinh viên Việt Nam sau này "không thể nghe và nói tiếng Anh trôi chảy, chỉ có thể đọc thôi cũng đã là tụt hậu".

## Kết Luận

Đến đây, nếu bạn là một lính mới về Front End hoặc là một người mới chuyển từ Back End sang, bạn sẽ cảm thấy có quá nhiều thứ để học để đạt được mức tối thiểu của Front End. Đúng là như vậy. Nhưng những người làm Front End như tôi và bạn vẫn chọn con đường không mấy dễ dàng này bởi đơn giản chúng ta yêu thích việc tạo ra những giao diện đẹp, hữu dụng và cảm thấy tự hào khi thành quả đó được đưa lên web cho cả thế giới xem và trải nghiệm.

Theo tôi, không phải lập trình viên nào cũng phù hợp với con đường Front End. Có những phẩm chất tạo nên sự khác biệt giữa người yêu thích Front End với người yêu thích Back End, đó là sự nhạy cảm những với thiết kế trực quan, khả năng làm việc tỉ mỉ, chi tiết đến từng pixel, và phẩm chất của một người yêu thích sự hoàn hảo.

![How back end and front end dev see each other](http://2.bp.blogspot.com/-H-9aEPUi3Kg/VdGRb22AhGI/AAAAAAAARi4/dOa4ycz34qg/s640/Strips-front-end-vs-le-back-end-650-finalenglish.jpg "How back end and front end dev see each other")

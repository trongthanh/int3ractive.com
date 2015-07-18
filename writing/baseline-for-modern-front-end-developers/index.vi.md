![Front End tag cloud](front-end-baseline.png)

Đường cơ sở (baseline) là gì:


Tại sao phải có đường cơ sở cho Front End:


Từ kinh nghiệm làm việc trong nhiều nhóm phát triển phần mềm lớn nhỏ khác nhau, tôi nhận ra rằng việc thiết lập hệ thống kiến thức cơ sở (baseline) cũng quan trọng không kém những quy ước lập trình trong nhóm.

Rõ ràng việc phát triển kiến thức và kỹ năng của từng thành viên lên để đạt chuẩn không chỉ cải thiện sự hợp tác nhóm mà còn cải thiện hiệu suất làm việc của họ.

Khi xây dựng nhóm phát triển front end ỏ Nâu Studio, tôi đã nghiên cứu thật kỹ về những kỹ năng và kiến thức chuyên môn tối cần thiết mà sẽ được đưa vào hệ thống kiến thức cơ sở của nhóm và là tâm điểm của việc huấn luyện căn bản.

Lấy cảm hứng từ bài viết [Đường cơ sở về kiến thức cho các lập trình viên Front End](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/) của Rebecca Murphey, tôi sẽ ghi lại Đường cơ sở về kiến thức cho các lập trình viên Front End hiện đại với hệ thống phù hợp hơn cho người mới bắt đầu cũng như cập nhật những xu hướng mới nhất của năm 2015.

Để bắt đầu, tôi sẽ bàn về 3 trụ cột của Web Front End:

## HTML

Thực tế cho thấy có rất nhiều lập trình viên xem nhẹ HTML. Qua quan sát của tôi, nhiều lập trình viên dùng tag HTML rất tuỳ tiện, thêm các tag bao (wrapper) một cách vô tội vạ và kết quả là việc xử lý giao diện tuỳ ứng (responsive) cũng như canh lề rất vất vả và chắp vá.

Khi làm càng nhiều, bạn sẽ sớm nhận ra rằng HTML được viết gọn gàng và súc tích sẽ giúp ích rất nhiều cho việc xủ lý CSS và cải thiện tốc độ website trên trình duyệt (đặt biệt là trên thiết bị di động). Để làm được như vậy đòi hỏi một kỹ năng tuyệt vời, và tôi dám nói rằng viết HTML là cả một nghệ thuật.

Vì vậy, để trở thành một lập trình viên HTML thành công, bạn phải có khả năng kết hợp các phần tử (element) HTML để đạt yêu cầu cả về ngữ nghĩa và tính tối ưu. Điều này có nghĩa bạn phải nắm vững các quy luật layout mặc định và ý nghĩa sử dụng của tất cả các thẻ HTML.

Ngoài việc tiến bộ dần thông qua kinh nghiệm thực tế, bạn có thể tăng tốc kỹ năng HTML của mình nếu được đào tạo bài bản từ những cái căn bản.

Các tài liệu hỗ trợ:

- HTML5 Doctor: [http://html5doctor.com/](http://html5doctor.com/) 
- HTML basic tutorial: [https://docs.webplatform.org/wiki/html/tutorials](https://docs.webplatform.org/wiki/html/tutorials) 

## CSS

Rất nhiều người mới bắt đầu với Web, đặc biệt là sinh viên CNTT ở Việt Nam, được học rất sơ sài về CSS trên lớp và các sách giáo trình liên quan đều lỗi thời. Đa số các bạn sẽ học CSS bằng phép sai-và-thử và đó là một quá trình tiến bộ cực kỳ kém hiệu quả.

Điều này không tồn tại trong team của Nâu. Những khái niệm căn bản của CSS như thứ tự kiểu thác nước (cascading), luật về độ ưu tiên (specificity), bộ chọn lọc (selectors), sự thừa kế, mô hình hộp (box model), và ngữ cảnh xếp chồng (stacking context) phải được các bạn hiểu rõ.

Sau những kiến thức căn bản, bạn nên bắt đầu tìm hiểu về [CSS hướng đối tượng (OOCSS)](https://github.com/stubbornella/oocss/wiki) hoặc bắt đầu thực hành những chỉ dẫn trong tài liệu [Những nguyên tắc về CSS](http://cssguidelin.es/)

Ngoài ra, một lập trình viên front end giỏi luôn thủ sẵn một số thủ thuật về CSS. Chẳng hạn, bạn phải biết tất cả các mẹo canh giữa nội theo chiều dọc khác nhau khi mà Flexbox vẫn chưa được áp dụng rộng rãi. Bạn cũng phải biết khi nào cần dùng pseudo-elements, các khối hình học bằng CSS thuần, icon từ webfont, hoặc sprite sheet... để hiện thực giao diện với hiệu suất và độ tương thích tốt nhất.

Cuối cùng, một lập trình viên front end hiện đại phải biết sử dụng một ngôn ngữ biên dịch sang CSS (preprocessor) để cải thiện khả năng bảo trì và hiệu suất làm việc với CSS.

Một khi nền tảng đã được nắm vững, bạn sẽ thấy việc học thêm hoặc ứng dụng những tính năng mới của CSS3 sẽ chẳng có chút khó khăn.

Tài liệu tham khảo:

- Hướng dẫn CSS căn bản: [https://docs.webplatform.org/wiki/css/tutorials](https://docs.webplatform.org/wiki/css/tutorials)
- OOCSS: [https://github.com/stubbornella/oocss/wiki](https://github.com/stubbornella/oocss/wiki) 
- Những nguyên tắc CSS: [http://cssguidelin.es/](http://cssguidelin.es/) 
- Các thủ thuật CSS: [http://css-tricks.com/](http://css-tricks.com/) 

## JavaScript

Nếu như cách đây vài năm trước, jQuery là yêu cầu bắt buộc để nhập môn Web Front End thì bây giờ [không còn nữa](http://youmightnotneedjquery.com/). Tuy nhiên theo tôi nó vẫn rất hữu ích cho những người mới bắt đầu thực hành JavaScript trong bối cảnh tính năng và sự tương thích giữa các trình duyệt vẫn chưa đồng nhất.

Tiếp theo sau jQuery, việc nắm vũng kiến thức về JavaScript thuần vẫn là mục tiêu tối quan trọng cho người làm Front End. Bên cạnh học từ quyển sách kinh điển [JavaScript: The Good Parts](http://www.amazon.com/exec/obidos/ASIN/0596517742/wrrrldwideweb) do Rebecca giới thiệu, ngày nay bạn có thêm những lựa chọn miễn phí nhưng không kém chất lượng như quyển Eloquent JavaScript hoặc JavaScript Enlightenment.

Từ kinh nghiệm thực tiễn, tôi tin rằng những đặc tính của ngôn ngữ JavaScript sau đây cần được nắm bất kể trình độ bạn đang ở đâu, đó là chuỗi prototype (prototype chain), sự bao đóng (closure), và từ khoá `this`. Ngoài ra những đặc tính độc đáo khác của JS mà lập trình viên cũng cần phải biết như chuyển đổi kiểu động, xây dựng đối tượng trực tiếp từ giá trị (literal), sự dịch chuyển lên trên vị trí khai báo của biến và hàm (variable and function hoisting)...











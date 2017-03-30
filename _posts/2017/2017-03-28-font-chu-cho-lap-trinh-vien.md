---
layout: post
title: Font chữ cho Lập Trình Viên
subtitle: Và xu hướng ligature trong code font
author: Thanh Tran
description:
date: 2017-03-28T06:37:03+07:00
tags: [Tools, Vietnamese, Front End]
image: img/2017/ligature-vscode.png
modified: 2017-03-31T00:09:38+07:00
---

Bạn có biết trình soạn code của mình đang dùng font chữ gì không? Ít người quan tâm đến điều này nhưng việc lựa chọn font chữ cho [code editor](https://en.wikipedia.org/wiki/Source_code_editor) cũng ảnh hưởng ít nhiều đến hiệu suất công việc của lập trình viên vì bạn phải nhìn những dòng code nhiều giờ trong một ngày làm việc.

Sau nhiều năm làm việc với nhiều code editor và font khác nhau, tôi rút ra được một số đặc điểm của một **font chữ tốt** dành cho trình soạn code như sau:

- **Monospace**: tất cả các ký tự và khoảng trắng đều cùng một cỡ, điều này cho phép canh cột và lề dễ dàng và code dễ đọc hơn với những đoạn logic lặp lại. Các font mặc định cho code editor và terminal đều là monospace.
- **Dễ dàng phân biệt các ký tự** `Il1i, 0Oo, CG`: có nhiều font monospace hiển thị các ký tự kể trên rất giống nhau, khiến cho việc đọc code khó khăn hơn. Với tiêu chí này, tôi đã loại một số font monospace khá phổ biến như _Courier New, Noto Mono, Droid Sans Mono..._
- Các ký tự đặc biệt cho cú pháp phải **rõ, dễ đọc**: `() [] {} =+-<>:;,."'`
- Và riêng đối với người Việt mình, thì font cho code cũng cần **hỗ trợ tiếng Việt Unicode** để hiển thị các chuỗi văn bản hoặc ghi chú bằng tiếng Việt (nếu có). Tiêu chí này cũng loại khá nhiều font mono đẹp và phổ biến khác như: _Ubuntu Mono, Menlo, Operator Mono..._ Nếu bạn không lo vấn đề tiếng Việt, bạn có thể tìm và thử các font kể trên.

Sau đây tôi sẽ liệt kê một số font tiêu biểu cho code editor đáp ứng tất cả các tiêu chí trên:

### Consolas
Font này không miễn phí nhưng có sẵn trong Windows hoặc được cài theo bộ Microsoft Office.
![font-consolas](/img/2017/font-consolas.png)_Font Consolas hiển thị trên Sublime Text kích cỡ 15px_

### Monaco
Font này có sẵn trên macOS.
![font-monaco](/img/2017/font-monaco.png)_Font Monaco hiển thị trên Sublime Text kích cỡ 15px_

### Roboto Mono
Font monospace của bộ Roboto, font mặc định cho HĐH Android và material design. Download font [tại đây](https://github.com/google/fonts/tree/master/apache/robotomono).

![font-roboto-mono](/img/2017/font-roboto-mono.png)_Font Roboto Mono (Regular) hiển thị trên Sublime Text kích cỡ 15px_

### SF Mono
Font SF Mono dùng để hiển thị code bên trong XCode 8+. Bạn có thể download và dùng cho mục đích cá nhân tại [trang github này](https://github.com/muhasturk/SFMono).

![font-sf-mono](/img/2017/font-sf-mono.png)_Font SF Mono (Regular) hiển thị trên Sublime Text kích cỡ 15px_

### Source Code Pro
Font monospace được dựng bởi Adobe dành riêng cho việc hiển thị code nên rất dễ đọc và tròn trịa. Đây là font yêu thích nhất của tôi. Download font [tại đây](https://github.com/adobe-fonts/source-code-pro).

![font-source-code-pro](/img/2017/font-source-code-pro.png)_Font Source Code Pro (Regular) hiển thị trên Sublime Text kích cỡ 15px_

### Space Mono
Font monospace được dựng bởi [Colophon Foundry](https://medium.com/google-design/introducing-space-mono-a-new-monospaced-typeface-by-colophon-foundry-for-google-fonts-84367eac6dfb#.ck1mpvy6z) cho Google Fonts. Font này có dáng chữ khá lạ và mang hơi hướng mỹ thuật hơn là cho code. Có thể download [tại đây](https://github.com/googlefonts/spacemono).

![font-space-mono](/img/2017/font-space-mono.png)_Font Space Mono hiển thị trên Sublime Text kích cỡ 15px_

## Xu hướng code font mới: Programming Ligature (nối chữ)

Ligature: đây là hiện tượng nối nhiều chữ thành một xuất hiện cùng với kỹ thuật in ấn trong một số ngôn ngữ tự nhiên. Trong thời đại số hóa, ligature cũng được mô phỏng lại (chủ yếu là vì lý do mỹ thuật) thông qua một số **font chữ có hỗ trợ**. Ligature cũng đã được hỗ trợ trên các trình duyệt hiện đại và đặc biệt là từ IE 10 trở về sau.

![ligature](/img/2017/ligature-drawing.svg)_Ví dụ ligature_

Các ngôn ngữ lập trình sử dụng rất nhiều biểu tượng và toán tử tuy nhiên chúng thường được tổ hợp từ nhiều ký tự đơn giản có sẵn trên bàn phím (VD. `>=`, `===`, `=>`, `!==`...). Điều này bắt buộc người đọc code phải có một quá trình giải mã những tổ hợp ký tự đó thành biểu tượng toán mà chúng đang mô phỏng. ("≥", "≡", "⇒", "≢")

Một số font code mới đây đã bắt đầu hỗ trợ ligature cho tổ hợp các ký tự toán tử và ký hiệu giúp cho việc hiển thị chúng trực quan hơn. Trong số đó là bộ font [Fira Code](https://github.com/tonsky/FiraCode) được dựng với rất nhiều tổ hợp ligature cho lập trình.

![Fira Code ligature in VSCode](/img/2017/ligature-vscode.png)_Font Fira Code và ligature_

Tuy nhiên Fira Code (và cả Fira Mono mà nó dựa trên) không có các ký tự tiếng Việt Unicode. Để khắc phục, bạn có thể sử dụng một font khác làm fallback khá giống Fira Code đó là **Roboto Mono**.

Hiện nay đã có một số code editor hỗ trợ ligature, trong đó có [VSCode](https://code.visualstudio.com/) và [Atom](https://atom.io/). Rất tiếc là Sublime Text 3 chưa hỗ trợ, và tính năng này đang được đặt hàng cho nhà phát triển ST3.

Sau khi cài Fira Code vào hệ thống, với **VSCode**, cần cài đặt các settings sau để bật ligature và font Fira Code với Roboto Mono làm fallback:

```json
{
    "editor.fontFamily": "Fira Code, Roboto Mono, monospace",
    "editor.fontLigatures": true
}
```

### Xem thêm:

- [Programmingfonts.com](http://app.programmingfonts.org/#firacode)
- [Các code editor và terminal hỗ trợ ligature](https://github.com/tonsky/FiraCode#editor-support)
- [Các font code có ligature khác](https://github.com/tonsky/FiraCode#alternatives)

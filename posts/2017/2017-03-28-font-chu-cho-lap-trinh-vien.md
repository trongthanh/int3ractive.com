---
title: Font chữ cho Lập Trình Viên
subtitle: Và xu hướng ligature trong code font
author: Thanh Tran
description:
date: 2017-03-28T06:37:03+07:00
tags: [tools, vietnamese, front end]
image: images/2017/ligature-vscode.png
updated: 2020-03-01T23:51:52+07:00
---

> Cập nhật 2020-03-01: Bài viết này mình viết cũng đã lâu nhưng nó vẫn có lượt view cao trên trang blog này, nên mình quyết định bổ sung thêm một số bộ font code đẹp mới vào đây thay vì viết bài khác. Các bộ font mình bổ sung ở cuối bài.

Bạn có biết trình soạn code của mình đang dùng font chữ gì không? Ít người quan tâm đến điều này nhưng việc lựa chọn font chữ cho [code editor](https://en.wikipedia.org/wiki/Source_code_editor) cũng ảnh hưởng ít nhiều đến hiệu suất công việc của lập trình viên vì bạn phải nhìn những dòng code nhiều giờ trong một ngày làm việc.

Sau nhiều năm làm việc với nhiều code editor và font khác nhau, tôi rút ra được một số đặc điểm của một **font chữ tốt** dành cho trình soạn code như sau:

- **Monospace**: tất cả các ký tự và khoảng trắng đều cùng một cỡ, điều này cho phép canh cột và lề dễ dàng và code dễ đọc hơn với những đoạn logic lặp lại. Các font mặc định cho code editor và terminal đều là monospace.
- **Dễ dàng phân biệt các ký tự** `Il1i, 0Oo, CG`: có nhiều font monospace hiển thị các ký tự kể trên rất giống nhau, khiến cho việc đọc code khó khăn hơn. Với tiêu chí này, tôi đã loại một số font monospace khá phổ biến như _Courier New, Noto Mono, Droid Sans Mono..._
- Các ký tự đặc biệt cho cú pháp phải **rõ, dễ đọc**: `() [] {} =+-<>:;,."'`
- Và riêng đối với người Việt mình, thì font cho code cũng cần **hỗ trợ tiếng Việt Unicode** để hiển thị các chuỗi văn bản hoặc ghi chú bằng tiếng Việt (nếu có). Tiêu chí này cũng loại khá nhiều font mono đẹp và phổ biến khác như: _Ubuntu Mono, Menlo, Operator Mono..._ Nếu bạn không lo vấn đề tiếng Việt, bạn có thể tìm và thử các font kể trên.

Sau đây tôi sẽ liệt kê một số font tiêu biểu cho code editor đáp ứng tất cả các tiêu chí trên:

### Consolas
Font này không miễn phí nhưng có sẵn trong Windows hoặc được cài theo bộ Microsoft Office.
![font-consolas](/images/2017/font-consolas.png)_Font Consolas hiển thị trên Sublime Text kích cỡ 15px_

### Monaco
Font này có sẵn trên macOS.
![font-monaco](/images/2017/font-monaco.png)_Font Monaco hiển thị trên Sublime Text kích cỡ 15px_

### Roboto Mono
Font monospace của bộ Roboto, font mặc định cho HĐH Android và material design. Download font [tại đây](https://github.com/google/fonts/tree/master/apache/robotomono).

![font-roboto-mono](/images/2017/font-roboto-mono.png)_Font Roboto Mono (Regular) hiển thị trên Sublime Text kích cỡ 15px_

### SF Mono
Font SF Mono dùng để hiển thị code bên trong XCode 8+. Bạn có thể download và dùng cho mục đích cá nhân tại [trang github này](https://github.com/muhasturk/SFMono).

![font-sf-mono](/images/2017/font-sf-mono.png)_Font SF Mono (Regular) hiển thị trên Sublime Text kích cỡ 15px_

### Source Code Pro
Font monospace được dựng bởi Adobe dành riêng cho việc hiển thị code nên rất dễ đọc và tròn trịa. <del>Đây là font yêu thích nhất của tôi.</del>. Download font [tại đây](https://github.com/adobe-fonts/source-code-pro).

![font-source-code-pro](/images/2017/font-source-code-pro.png)_Font Source Code Pro (Regular) hiển thị trên Sublime Text kích cỡ 15px_

### Space Mono
Font monospace được dựng bởi [Colophon Foundry](https://medium.com/google-design/introducing-space-mono-a-new-monospaced-typeface-by-colophon-foundry-for-google-fonts-84367eac6dfb#.ck1mpvy6z) cho Google Fonts. Font này có dáng chữ khá lạ và mang hơi hướng mỹ thuật hơn là cho code. Có thể download [tại đây](https://github.com/googlefonts/spacemono).

![font-space-mono](/images/2017/font-space-mono.png)_Font Space Mono hiển thị trên Sublime Text kích cỡ 15px_

## Xu hướng code font mới: Programming Ligature (nối chữ)

Ligature: đây là hiện tượng nối nhiều chữ thành một xuất hiện cùng với kỹ thuật in ấn trong một số ngôn ngữ tự nhiên. Trong thời đại số hóa, ligature cũng được mô phỏng lại (chủ yếu là vì lý do mỹ thuật) thông qua một số **font chữ có hỗ trợ**. Ligature cũng đã được hỗ trợ trên các trình duyệt hiện đại và đặc biệt là từ IE 10 trở về sau.

![ligature](/images/2017/ligature-drawing.svg)_Ví dụ ligature_

Các ngôn ngữ lập trình sử dụng rất nhiều biểu tượng và toán tử tuy nhiên chúng thường được tổ hợp từ nhiều ký tự đơn giản có sẵn trên bàn phím (VD. `>=`, `===`, `=>`, `!==`...). Điều này bắt buộc người đọc code phải có một quá trình giải mã những tổ hợp ký tự đó thành biểu tượng toán mà chúng đang mô phỏng. ("≥", "≡", "⇒", "≢")

Một số font code mới đây đã bắt đầu hỗ trợ ligature cho tổ hợp các ký tự toán tử và ký hiệu giúp cho việc hiển thị chúng trực quan hơn. Trong số đó là bộ font [Fira Code](https://github.com/tonsky/FiraCode) được dựng với rất nhiều tổ hợp ligature cho lập trình.

![Fira Code ligature in VSCode](/images/2017/ligature-vscode.png)_Font Fira Code và ligature_

Tuy nhiên Fira Code (và cả Fira Mono mà nó dựa trên) không có các ký tự tiếng Việt Unicode. Để khắc phục, bạn có thể sử dụng một font khác làm fallback khá giống Fira Code đó là **Roboto Mono**.

Hiện nay đã có một số code editor hỗ trợ ligature, trong đó có [VSCode](https://code.visualstudio.com/) và [Atom](https://atom.io/). <del>Rất tiếc là Sublime Text 3 chưa hỗ trợ, và tính năng này đang được đặt hàng cho nhà phát triển ST3.</del> Sublime Text 3 kể từ build 3145 cũng [đã hỗ trợ ligature](https://news.ycombinator.com/item?id=15413543).

Sau khi cài Fira Code vào hệ thống, với **VSCode**, cần cài đặt các settings sau để bật ligature và font Fira Code với Roboto Mono làm fallback:

```json
{
    "editor.fontFamily": "Fira Code, Roboto Mono, monospace",
    "editor.fontLigatures": true
}
```

## Cập nhật: Các bộ font mới cho 2020

Sau đây là một số bộ font mới mà mình thấy khá đẹp và dễ đọc dùng cho code editor (một số font không hoàn toàn hỗ trợ tiếng Việt nhưng có thể dùng thêm font fallback):

### Hack

Font này không mới và còn thiếu một số ký tự tiếng Việt, tuy nhiên nó khá đẹp và rất giống **Menlo** (font mono space của HĐH Mac trước đây). Nó cũng là font mặc định của trang [carbon.now.sh](https://carbon.now.sh) dùng để tạo ảnh chụp các đoạn code để chia sẻ lên MXH.

![font-hack](/images/2020/font-hack.png)_Font Hack (Regular) xuất ra từ Carbon.now.sh kích cỡ 16px với trình duyệt Firefox_

### IBM Plex Mono

Đây là font monospace trong gia đình font Plex được thiết kế làm font thương hiệu cho IBM. Theo mình đây là một trong những font cho code editor hoàn hảo nhất (nếu không kể đến ligature): hoàn toàn hỗ trợ tiếng Việt, có tất cả weight từ 100 đến 700, có kiểu in nghiêng riêng theo từng weight và đặc biệt các ký tự in nghiêng `a, i, f, {}` bay bướm theo phong cách của Operator Mono trông rất gì và này nọ ;)

![font ibm plex mono](/images/2020/font-ibm-plex-mono.png)_Font IBM Plex Mono (Regular) 16px hiển thị trong VSCode trên Ubuntu MATE*_

IBM Plex Mono hoàn toàn miễn phí và có thể tải về tại trang [github của bộ IBM Plex ở đây](https://github.com/IBM/plex).

### Cascadia Code

Đây là font được thiết kế để hiển thị trong ứng dụng Terminal mới của Windows và cũng sẽ dần dần được sử dụng làm font monospace mặc định trong các sản phẩm của Microsoft. Font này nhìn tổng thể khá bay bướm nhưng dễ đọc như Operator Mono. Với phiên bản hiện tại, nó hỗ trợ tốt tiếng Việt và ligature. Tuy nhiên, hiện tại nó chỉ có mỗi weight regular và không có kiểu in nghiêng riêng.

![font Cascadia Code](/images/2020/font-cascadia-code.png)_Font Cascadia Code (Regular) 16px hiển thị trong VSCode trên Ubuntu MATE*_

Download [font Cascadia Code tại đây](https://github.com/microsoft/cascadia-code/releases).

### JetBrains Mono

Đây là font monospace rất mới (01/2020) đến từ nhà phát triển JetBrains, công ty đã tạo ra các IDE nổi tiếng như IntelliJ, WebStorm, Android Studio, GoLand... Theo như [trang web giới thiệu](https://www.jetbrains.com/lp/mono/), Jetbrains Mono được thiết kế dành riêng cho việc hiển thị code với phong cách tối giản. Nó có đầy đủ những đặc tính của một font cho code editor hiện đại như: các ký tự dễ nhầm lẫn được phân biệt rõ ràng; kiểu in nghiêng riêng giúp các code editor theme có thêm cách thức để nhấn mạnh hoặc làm nổi bật các đoạn comment; và đặc biệt là các ký tự ligature phong phú dành riêng cho các toán tử. Tuy nhiên, nó có một hạn chế (có thể chỉ là tạm thời) đó là nó chưa hỗ trợ đầy đủ tiếng Việt.

![font JetBrains Mono](/images/2020/font-jetbrains-mono.png)_Font JetBrains Mono (Regular) 16px với fallback Roboto Mono hiển thị trong VSCode trên Ubuntu MATE*_

Download [font JetBrains Mono tại đây](https://www.jetbrains.com/lp/mono/).

## Xem thêm:

- [Programmingfonts.com](http://app.programmingfonts.org/#firacode)
- [Các code editor và terminal hỗ trợ ligature](https://github.com/tonsky/FiraCode#editor-support)
- [Các font code có ligature khác](https://github.com/tonsky/FiraCode#alternatives)

---
<small><strong>*</strong>: Theme được sử dụng là **Boxy Ocean (dimmed bg)** trong bộ theme [Boxy Theme Kit](https://marketplace.visualstudio.com/items?itemName=trongthanh.theme-boxythemekit) do tôi port từ Sublime Text sang.</small>

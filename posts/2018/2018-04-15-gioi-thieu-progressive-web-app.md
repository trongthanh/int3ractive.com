---
title: Giới thiệu Progressive Web App
subtitle: Tương lai của web app trên thiết bị di động.
author: Thanh Tran
metaDesc: Progressive Web App (PWA) là một dạng ứng dụng web mới đang thu hút rất nhiều sự quan tâm, tuy nhiên nó vẫn còn khá mới mẻ tại Việt Nam. Trong bài viết này tôi sẽ cố gắng giải thích PWA cho những ai không phải lập trình viên vẫn có thể hiểu.
date: 2018-05-13T17:43:06+07:00
tags: [vietnamese, front end, javascript, mobile web, web app]
image: /images/2018/pwa/pwa-logo.png
---

![logo không chính thức của PWA](/images/2018/pwa/pwa-logo.png) _logo [không chính thức](https://medium.com/samsung-internet-dev/we-now-have-a-community-approved-progressive-web-apps-logo-823f212f57c9) của PWA_

**P**{:.drop-cap}rogressive Web App (PWA) là một dạng ứng dụng web (web app) mới đang thu hút rất nhiều sự quan tâm từ các nhà phát triển web khắp thế giới đặc biệt là các doanh nghiệp hoạt động trực tuyến, tuy nhiên nó vẫn còn khá mới mẻ tại Việt Nam.

Đã có nhiều bài viết liên quan đến PWA dành cho [lập](https://addyosmani.com/blog/getting-started-with-progressive-web-apps/) [trình](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/) [viên](https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/), cho nên trong bài viết này tôi sẽ cố gắng giải thích PWA để người dùng Web phổ thông vẫn có thể hiểu.

## Progressive Web App là gì?

**PWA là ứng dụng web được viết để tận dụng những tính năng mới nhất của trình duyệt Web trên máy tính để bàn (desktop) lẫn điện thoại thông minh, nhưng đồng thời vẫn chạy được trên những trình duyệt và thiết bị cũ hơn. PWA lấy phương pháp [Cải Tiến Tăng Dần (Progressive Enhancement)](https://www.youtube.com/watch?v=5oUSzo1oRv0) làm cốt lõi (nên mới có chữ Progressive).**

Đối với những trình duyệt và thiết bị cũ, PWA hoạt động như một mobile website thông thường. Nhưng với những trình duyệt trên thiết bị di động mới nhất, PWA hoạt động như một _mobile app_[^1] thực thụ.

Những tác giả của khái niệm PWA (đến từ nhóm phát triển trình duyệt Chrome) đã đưa ra những đặc tính cần có của một PWA như sau:

* **Progressive** - Chạy được trên _mọi_ (nên hiểu: tuyệt đại đa số) thiết bị, do được phát triển với phương pháp Cải Tiến Tăng Dần.
* **Responsive** - Có thiết kế _giao diện tùy ứng_ (responsive design), hiển thị và sử dụng được trên mobile, tablet, laptop hay bất kỳ cỡ màn hình nào trong tương lai.
* **Connectivity independent** - PWA vẫn có thể hoạt động tốt với điều kiện kết nối mạng chập chờn hoặc mất hẳn (offline).
* **App-like** - Có giao diện và trải nghiệm như mobile app thực thụ.
* **Fresh** - Dù nó hoạt động như mobile app, nhưng tính năng và giao diện luôn được cập nhật tức thời nhờ nền tảng Web (không cần người dùng update từ Apple App Store hay Google Play - gọi chung là app store).
* **Safe** - PWA phải được tải thông qua giao thức TLS (hay nôm na là HTTPS), để đảm bảo việc trao đổi dữ liệu không bị bên thứ ba can thiệp.
* **Discoverable** - Thông qua file khai báo chuẩn (được thống nhất bởi tổ chức W3C), mà các PWA dễ dàng được các cỗ máy tìm kiếm đánh dấu và thông báo cho người dùng.
* **Re-engageable** - PWA cho phép việc tái tiếp cận người dùng dễ dàng hơn nhờ những tính năng đặc biệt như là push notification (thông báo chủ động).
* **Installable** - PWA cho phép người dùng dễ dàng lưu lại web app trên điện thoại (thường là trên màn hình home screen) mà không cần phải vào app store
* **Linkable** - Dễ dàng share app chỉ với đường link và không cần người nhận phải cài đặt phức tạp chỉ để xem được nội dung bạn muốn share.

## Những điểm khác biệt của Progressive Web App?

Trước tiên cần hiểu rằng, sự tiến hóa của mobile web app cần sự hợp tác của rất nhiều bên liên quan trong đó có các nhà phát triển trình duyệt, hệ điều hành di động, và cả những chuyên gia về ngôn ngữ lập trình cho Web. Sự tiến hóa của mobile web thường đi cùng với sự phát triển và chuẩn hóa của nền tảng Web do tổ chức **W3C**[^2] chịu trách nhiệm.

[![Sự tiến hóa của nền tảng Web](/images/2018/pwa/evolutionoftheweb.jpg "Sự tiến hóa của nền tảng Web")](http://www.evolutionoftheweb.com)

Khi tôi tư vấn và phát triển app cho khách hàng, rất nhiều lần doanh nghiệp từ chối lựa chọn giải pháp web app hoặc hybrid app với lý do chính là _"HTML5 không nhanh bằng native"_. Tuy nhiên điều này không còn đúng tại thời điểm hiện tại.

Nhờ những cải tiến của phần cứng thiết bị, hệ điều hành di động, trình duyệt, và nhất là đặc tả Web trong vài năm gần đây mà web app đã thêm những khả năng không thua kém native app như:

- Giao diện tương tác mượt mà hơn, đặt biệt là hỗ trợ đồ họa 3D, animation từ phần cứng (hardware accelerated)
- Khả năng chơi video, audio thông qua trình duyệt mobile đã hoàn thiện và định dạng gần như đã thống nhất.
- Bàn phím ảo thích ứng với trường nhập web form khác nhau: email, URL, telephone...
- Có khả năng truy xuất các sensor và bộ phận đa phương tiện của thiết bị: định vị GPS, con quay hồi chuyển, trạng thái pin, network, camera, microphone...
- Cơ sở dữ liệu (CSDL) tại trình duyệt cho phép tìm kiếm và truy cập nhanh lượng dữ liệu lớn và cho phép người dùng trở lại trang web app nhanh hơn.
- Đặc tả mới về CSS cho phép designer và front end developer tạo giao diện tùy ứng (responsive design) và giao diện giống app dễ dàng hơn.

![Web app showcase](/images/2018/pwa/web-apps-showcase.jpg)_Từ trái qua, các web app nổi tiếng đã chứng minh được sự thành công của web app trên mobile: <a href="https://app.ft.com">app.ft.com</a>, <a href="https://flipboard.com">flipboard.com</a>, <a href="https://m.aliexpress.com">m.aliexpress.com</a>_

Dù vậy, web app vẫn còn một số hạn chế so với native app. Chúng ta hãy xem PWA đã được bổ sung những khả năng gì để có thể xóa dần khoảng cách giữa web và native:

### Shortcut trên home screen và hỗ trợ theme từ trình duyệt

<figure class="figure figure--right">
    <img class="figure__image" src="/images/2018/pwa/safari-add-to-home-screen.jpg" alt="Chức năng Add to Home Screen trên Safari">
    <figcaption class="figure__caption" style="width:300px">Chức năng Add to Home Screen trên Safari. Ảnh từ <a href="https://www.any-data-recovery.com/iphone-data/how-to-change-safari-default-homepage-on-mac-iphone-and-ipad.html">any-data-recovery.com</a>.
    </figcaption>
</figure>

Ngay từ những thế hệ iPhone đầu tiên, iOS Safari đã có chức năng cho phép người dùng lưu shortcut của một website vào home screen (add to home screen) để truy cập nhanh vào lần sau. Và với những website được người dùng mở từ home screen, chúng có thể có giao diện toàn màn hình (không còn thanh địa chỉ và phần giao diện của Safari), đem tới trải nghiệm như mobile app.

Tuy nhiên những khả năng trên vẫn chỉ là sự hỗ trợ đơn lẻ từ nhà phát triển Apple cho những chiếc iPhone của mình. Giờ đây, tổ chức W3C đã thống nhất đặc tả cho web app với file khai báo **manifest.json** (tên chính thức: Web App Manifest) cho phép lập trình viên có thể tùy chỉnh:

- Màu theme (màu của giao diện trình duyệt và thanh status)
- Màu nền và icon trên splash screen
- Icon và tên app trên home screen
- Khóa hướng xoay màn hình
- Và một số tùy chỉnh kỹ thuật khác...

[![Một số tùy chỉnh có thể thấy được từ manifest.json](/images/2018/pwa/manifest-customizations.jpg)](/images/2018/pwa/manifest-customizations.jpg){: target="_blank" role="figure" } _Ảnh chụp từ một [PWA demo do tôi viết](https://pwa-shop.firebaseapp.com/) để minh họa cho một bài thuyết trình về PWA._

### Banner cài đặt web app và tích hợp sâu hơn trong Android

<figure class="figure figure--right">
    <video class="figure__image" src="/images/2018/pwa/native-add-to-home-screen.mp4" poster="/images/2018/pwa/native-add-to-home-screen.jpg" controls onclick="this.paused ? this.play() : this.pause();"
    ></video>
    <figcaption class="figure__caption" style="width:300px">Banner cài đặt web app. Bấm lên hình để play.</figcaption>
</figure>

Ngoài chức năng "Add To Home Screen" bằng tay đã được hỗ trợ bởi đa số trình duyệt di động hiện nay, một số trình duyệt mới hiện nay còn có thể **chủ động** hiện một banner mời gọi user cài web app lên home screen.

Theo [Addy Osmani](https://addyosmani.com/blog/getting-started-with-progressive-web-apps/), người dùng sẽ được gợi ý cài web app lên home screen của Android nếu:

- Web app có khai báo manifest.json
- Được tải bằng giao thức HTTPS
- Có sử dụng service worker (xem tiếp mục sau)
- Được ghé thăm ít nhất hai lần, với mỗi lần cách nhau ít nhất 5 phút

Ngoài ra Chrome và Android đang được cải thiện để tích hợp PWA tốt hơn. Kể từ Chrome cho Android phiên bản 57, khi một PWA được lưu lại, icon của nó không chỉ xuất hiện tại home screen mà ở cả trong app drawer (trang danh sách tất cả app) và kết quả tìm kiếm app. Không những thế, Android sẽ hỗ trợ PWA của bạn có riêng một "Intent Filter" để khi có bất kỳ app khác trên Android link đến URL của web app của bạn, PWA sẽ được mở ra thay vì URL mở ở trình duyệt mặc định. [Xem thêm tại đây.](https://developers.google.com/web/updates/2017/02/improved-add-to-home-screen)

[![Một số cải tiến tích hợp vào Android của PWA trên Chrome 57](/images/2018/pwa/pwa-integrated.jpg)](/images/2018/pwa/pwa-integrated.jpg){: target="_blank" role="figure"} _Một số cải tiến tích hợp vào Android của PWA trên Chrome 57_

### Hoạt động offline

<figure class="figure figure--right">
    <video class="figure__image" src="/images/2018/pwa/offline-viewing.mp4" poster="/images/2018/pwa/offline-viewing.jpg" controls onclick="this.paused ? this.play() : this.pause();"
    ></video>
    <figcaption class="figure__caption" style="width:300px">Offline demo. Bấm lên hình để play.</figcaption>
</figure>

Một trong những hạn chế của web app so với native app khiến nó chưa thật sự hữu dụng và được triển khai rộng rãi đó chính là khả năng hoạt động ngay cả khi người dùng offline. Khi người dùng mất kết nối (tắt mobile data, tắt wifi, bật flight mode...) hoặc kết nối Internet chậm, web app sẽ không thể sử dụng được do nó phải lấy dữ liệu từ máy chủ trung tâm, và người dùng sẽ nhanh chóng bỏ cuộc hoặc tìm đến native app.

Nhờ một đặc tả mới của Web với tên gọi là **Service Worker**, kết hợp với CSDL tại trình duyệt, PWA đã có thể lưu lại dữ liệu bao gồm văn bản, hình ảnh hay bất kỳ định dạng nào cần thiết cho việc hoạt động offline.

### Nhận push notification

Một tính năng đáng chú ý nữa của native app mà web app trước đây không thể làm được, đó chính là việc nhận push notification (thông báo chủ động). Push notification là một công cụ khá quan trọng cho các nhà phát hành mobile app, kích thích người dùng quay trở lại hoặc suy trì sự tương tác giữa người dùng và app của mình. Push notification cũng đang nhận được sự chú ý đặc biệt của bộ phận marketing cho những doanh nghiệp có mobile app của mình.

Cũng nhờ **Service Worker**, là một chương trình nhỏ viết bằng ngôn ngữ Web JavaScript nhưng nó chạy ngầm và độc lập với web app chính, PWA có khả năng nhận push notification như native app. Điều này đồng nghĩa với việc ngay cả khi web app và trình duyệt đã được đóng hẳn, chúng vẫn có thể nhận được notification[^5].

<figure>
    <video src="/images/2018/pwa/push-notification-demo.mp4" poster="/images/2018/pwa/push-notification-demo.jpg" controls onclick="this.paused ? this.play() : this.pause();"
    ></video>
    <figcaption>Push notification demo. Bấm lên hình để play.</figcaption>
</figure>

### Tự động đồng bộ khi có mạng trở lại

Một khả năng khác của Service Worker, đó là hỗ trợ PWA tự động đồng bộ những yêu cầu từ phía người dùng lên server trung tâm ngay khi thiết bị có mạng trở lại.

Lấy ví dụ: ứng dụng nhắn tin tức thời, người dùng gửi một tin nhắn đi khi điện thoại của họ mất kết nối. Ngay khi điện thoại của họ có Internet trở lại, Service Worker sẽ tiếp tục gửi tin nhắn đi cho người dùng hoặc bất kỳ tác vụ nào cần đến Internet.

<figure>
    <video src="/images/2018/pwa/background-sync.mp4" poster="/images/2018/pwa/background-sync.jpg" controls onclick="this.paused ? this.play() : this.pause();"
    ></video>
    <figcaption>Demo tự động gửi tin sau khi online. Video lấy từ <a href="https://www.youtube.com/watch?v=cmGr0RszHc8">bài thuyết trình của Jake Archibald</a>. Bấm lên hình để play.</figcaption>
</figure>

### Chia sẻ bằng native banner của hệ điều hành

<figure class="figure figure--right">
    <video class="figure__image" src="/images/2018/pwa/web-share.mp4" poster="/images/2018/pwa/web-share.jpg" controls onclick="this.paused ? this.play() : this.pause();"
    ></video>
    <figcaption class="figure__caption" style="width:300px">Demo share bằng banner native của Android. Bấm lên hình để play.</figcaption>
</figure>

Một tính năng tương đối hữu dụng nữa của PWA đó chính là **Web Share**. Để dễ hình dung, nếu bạn đang đọc bài viết này trên điện thoại, cách duy nhất để bạn chia sẻ nó là copy URL[^3] của nó và paste vào app bạn muốn share, hoặc bạn sẽ mở menu của trình duyệt ra, và bấm vào nút share. Chức năng Web Share của PWA sẽ giống như cách thứ hai vừa nêu.

Với PWA có sử dụng Web Share, khi bạn bấm vào nút share ngay trong trang web, banner chia sẻ mặc định của HĐH sẽ hiện ra với tất cả các app và thao tác mà bạn có thể thực hiện với một chuỗi URL hoặc chuỗi băn bản. Một sự tiện lợi giúp tăng sự tương tác trên thiết bị di động.

Để tiếp cận Web Share theo cách Progressive, lập trình viên sẽ kiểm tra nếu trình duyệt không hỗ trợ Web Share, nút share sẽ gọi các widget chia sẻ thông thường như trên máy tính.

### Quản lý đăng nhập và tự động đăng nhập

<figure class="figure figure--right">
    <video class="figure__image" src="/images/2018/pwa/credential-management.mp4" poster="/images/2018/pwa/credential-management.jpg" controls onclick="this.paused ? this.play() : this.pause();"
    ></video>
    <figcaption class="figure__caption" style="width:300px"><a href="https://credential-management-sample.appspot.com/">Demo login vào app với "1 chạm"</a>. Bấm lên hình để play.</figcaption>
</figure>

Một tính năng đang dần trở thành yêu cầu phải có của trình duyệt đó là khả năng đồng bộ giữa các thiết bị và hệ điều hành khác nhau (nhưng cùng một loại trình duyệt). Hiện nay bạn đã có thể tạo một tài khoản đồng bộ trên Firefox, Opera, MS Edge và Chrome. Bạn sẽ thấy việc đồng bộ tạo sự tiện lợi cho người dùng rất nhiều đặc biệt là những ai lướt web trên nhiều thiết bị khác nhau: bookmark, lịch sử, các tab đang mở, thông tin nhập form và đặc biệt là thông tin đăng nhập (username & password) của các website.

Với tính năng trên, người dùng sẽ dễ dàng đăng nhập vào các website trên nhiều thiết bị nhờ vào việc trình duyệt sẽ tự điền vào form đăng nhập. Tuy nhiên, một đặc tả mới dành riêng cho PWA với tên gọi **Credential Management API** cho phép web app thực hiện thao tác đăng nhập cho người dùng chỉ với một cú chạm và không cần phải nhập lại mật khẩu. Đây là một trong những tiện lợi của native app với tài khoản lưu sẵn mà giờ đây web app cũng có thể làm được.

### Quản lý thanh toán và hỗ trợ thanh toán trực tuyến

<figure class="figure figure--right">
    <video class="figure__image" src="/images/2018/pwa/web-payment.mp4" poster="/images/2018/pwa/web-payment.jpg" controls onclick="this.paused ? this.play() : this.pause();"
    ></video>
    <figcaption class="figure__caption" style="width:300px"><a href="https://emerald-eon.appspot.com/">Demo Payment Request API</a>. Bấm lên hình để play.</figcaption>
</figure>

Nếu như thanh toán trên mobile và bằng mobile đang trở thanh xu hướng và đem đến sự tiện lợi chưa từng có cho người dùng, thì Web App cũng không đứng ngoài cuộc.

Với tên gọi **Payment Request API**, một đặc tả mới nữa của W3C, nó cho phép PWA chuyển thao tác thanh toán vốn nhập nhằng và dễ sai sót cho một giao diện chung hỗ trợ bởi trình duyệt. Giao diện này bao gồm các bước: hiển thị tóm tắt đơn hàng (shopping cart), thông tin giao hàng, loại thanh toán, thông tin thẻ và cả việc thực hiện thanh toán. Các form liên quan đều được hỗ trợ tự động điền vào từ thông tin thanh toán đã được lưu trên điện thoại. Và vì giao diện thanh toán lúc này là của trình duyệt nên thông tin thanh toán sẽ được đảm bảo an toàn vì các đoạn mã độc nếu được vô tình nhúng vào website cũng không có khả năng lấy được.

Một khi chuẩn Web này được áp dụng rộng rãi trên tất cả các HĐH mobile, việc xây dựng web app cho các platform thương mại điện tử sẽ trở nên dễ dàng và thuận tiện hơn bao giờ hết.

## Tiến độ hỗ trợ PWA từ các trình duyệt

Đến đây chắc hẳn bạn cũng đã rất hào hứng với PWA. Tuy nhiên, một số bạn am hiểu về Web cũng sẽ có thắc mắc rằng khi nào thì những tính năng  trên của PWA sẽ đến được với đa số người dùng?

Tin tốt lành là đến thời điểm tôi viết bài này, các trình duyệt phổ biến nhất[^4] đã hỗ trợ **Service Worker**, đặc tả quan trọng nhất của PWA. Bảng bên dưới tóm tắt tiến độ hỗ trợ từng tính năng riêng rẽ của PWA tại các trình duyệt khác nhau.

[![Bảng tham khảo tiến độ hỗ trợ PWA từ các trình duyệt khác nhau.](/images/2018/pwa/state-of-pwa-2018.jpg)](/images/2018/pwa/state-of-pwa-2018.jpg){: target="_blank" role="figure"}_Bảng tham khảo tiến độ hỗ trợ PWA từ các trình duyệt khác nhau. Ảnh chụp từ slide [giới thiệu PWA tại Google I/O 2018](https://www.youtube.com/watch?v=NITk4kXMQDw)_

Tuy nhiên tôi muốn nhắc lại rằng với cơ chế Cải Tiến Tăng Dần, PWA có thể được áp dụng ngay từ bây giờ bất kể tính năng bạn cần chưa được hỗ trợ rộng rãi. Và với tiến độ hiện tại, những tính năng vừa nêu trên sẽ được hỗ trợ hoàn toàn trên hai nền tảng di động quan trọng và phổ biến nhất (Chrome trên Android và Safari trên iOS) trong vài tháng tới đây.

## Hiệu quả của PWA

PWA có được thế mạnh của cả hai giải pháp Web và Native. Điểm mạnh của Web đó là sự tiện lợi và dễ truy cập khi mà người dùng chỉ việc mở trình duyệt và tìm đến địa chỉ của trang web app hoặc mở từ đường link được chia sẻ thông qua mạng xã hội hoặc tin nhắn. Một khi người dùng thấy app hữu dụng và có nhu cầu quay lại, họ sẽ lưu lại shortcut của app tại home screen. Và lúc này, người dùng sẽ có được trải nghiệm của PWA như một native app thực thụ mà không phải cất công vào app store để tải về.

PWA đã chứng minh được hiệu quả của mình thông qua một vài con số thống kê với những app đã được triển khai thực tế:

- **02 lần** là [số lượt sử dụng tăng](https://blog.chromium.org/2018/05/the-state-of-web-at-google-io-2018.html) sau khi Starbucks chuyển từ web app sang PWA.
- Sau khi [Alibaba.com triển khai PWA](https://developers.google.com/web/showcase/2016/alibaba), số giao dịch thành công (conversions) tăng **76%**, số lượt truy cập tăng **14%** trên iOS, **30%** trên Android và tỉ lệ tương tác với app sau khi Add to home screen tăng gấp **4 lần**.
- Sau khi triển khai PWA, lượt truy cập Tinder trên mobile web tăng. Và [Tinder PWA có kích thước tải về nhỏ hơn](https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0) so với native app của nó trên Android đến **90%**.
- Thương hiệu Lancôme đã cho thiết kế lại trang web mobile (lancome-usa.com) và [sử dụng một số tính năng của PWA](https://developers.google.com/web/showcase/2017/lancome) với kết quả: conversions tăng **17%**, số lượt sử dụng trên mobile tăng **51%**, và đặc biệt là số lượt người dùng quay lại giỏ hàng và hoàn tất thanh toán nhờ push notification gửi nhắc nhở lên đến **12%**.
- [Trang PWA thử nghiệm của Forbes](http://www.niemanlab.org/2017/03/forbes-rebuilt-its-new-mobile-website-as-a-progressive-web-app/) nhận được gấp **2 lần** thời gian sử dụng trung bình của người dùng so với mobile site cũ, dẫn đến số lượt bài đăng được đọc tăng đến **6 lần**...

Xem thêm những con số thống kê về hiệu quả của PWA tại: [PWAStats.com](https://www.pwastats.com/).

![PWA showcase](/images/2018/pwa/pwa-showcase.jpg)_Một số PWA đã chứng minh được hiệu quả, từ trái qua: <a href="https://m.alibaba.com">m.alibaba.com</a>, <a href="https://tinder.com">tinder.com</a>, <a href="https://m.forbes.com">m.forbes.com</a>_

## Kết luận

Được giới thiệu chính thức [từ 2015](https://en.wikipedia.org/wiki/Progressive_Web_Apps), PWA đã trải qua thời gian thử nghiệm và trưởng thành đủ lâu để giờ đây chúng ta có thể khẳng định PWA chính là tương lai của Web và Web App.

PWA đóng góp thêm một giải pháp ứng dụng di động nhiều hứa hẹn, giải phóng doanh nghiệp khỏi sự lệ thuộc vào app store, những hạn chế của native app. Và nếu được thiết kế hợp lý, PWA sẽ là giải pháp hợp nhất cho "mọi nền tảng" từ desktop đến mobile.

---
#### Ghi chú:

[^1]: Xin tóm tắt lại một số thuật ngữ về **"app"** trên thiết bị di động:
    - Mobile app hoặc native app: (ở Việt Nam thường gọi tắt là "app") là ứng dụng được cài đặt từ app store, được viết bằng ngôn ngữ lập trình dành riêng cho từng hệ điều hành di động khác nhau.
    - (Mobile) web app: là website chạy trên trình duyệt của smart phone nhưng có trải nghiệm giống app và thường trao đổi nhiều dữ liệu giữa người dùng và website.
    - Hybrid app: là ứng dụng được cài đặt từ app store, tuy nhiên được viết bằng cùng ngôn ngữ lập trình với web app. Dù hybrid app có thể cài được trên nhiều HĐH khác nhau nhưng nó chỉ cần được viết cùng một bộ mã nguồn với một ít điều chỉnh riêng cho mỗi loại HĐH mà nó hỗ trợ.

[^2]: Tổ chức World Wide Web Consortium có trách nhiệm chuẩn hóa các đặc tả về Web và khuyến khích các trình duyệt khác nhau phải tuân theo để các website hoạt động một cách đồng nhất bất kể trình duyệt dùng để hiển thị.

[^3]: URL là đường link đến một trang web bất kỳ

[^4]: Các trình duyệt phổ biến nhất bao gồm: Chrome, Firefox, Safari, MS Edge, Opera, Samsung Internet, UC Browser. Tại Việt Nam, trình duyệt phổ biến thứ 2 sau Chrome là CocCoc. Tuy nhiên CocCoc cũng là một trình duyệt biến thể từ mã nguồn mở của Chrome nên những tính năng của PWA cũng sẽ được hỗ trợ.

[^5]: Người dùng sẽ vẫn nhận được push notification cho dù họ không lưu app về home screen chỉ cần họ đã bấm đồng ý nhận push notification. Việc yêu cầu gửi push notification cần thận trọng và chỉ thực hiện khi người dùng đã thể hiện sự quan tâm đến dịch vụ của bạn. (Nếu không khả năng người dùng từ chối nhận push notification là rất cao)

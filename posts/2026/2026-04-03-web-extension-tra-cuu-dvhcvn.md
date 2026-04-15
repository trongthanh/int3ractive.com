---
title: "Web Extension: Tra Cứu Đơn Vị Hành Chính VN"
subtitle:
author: Thanh Tran
metaDesc: Tôi đã "vibe code" browser extension Tra cứu Đơn Vị Hành Chính 🇻🇳 — tra cứu phường xã mới/cũ offline ngay trên trình duyệt.
date: 2026-04-03T12:00:00+0700
tags: [oss, vibe-coding, browser-extension, vietnamese]
image: /images/2026/wx-tra-cuu-dvhcvn-screenshot-1.png
coverImage: /images/2026/wx-tra-cuu-dvhcvn-screenshot-1.png
---

Tôi đã "vibe code" browser extension: [Tra cứu Đơn Vị Hành Chính 🇻🇳](https://tracuudvhc.thanh.im).

Đây là một side project xuất phát từ nhu cầu cá nhân mà mình nghĩ nhiều người cũng sẽ gặp phải: việc sử dụng tên phường xã mới đã xuất hiện sâu rộng trên các văn bản, mẫu đơn, tin tức báo chí... nhưng chúng vẫn quá mới và lạ lẫm đối với những người đã lớn lên cùng với những cái tên phường, tên quận quen thuộc.

Đã có một vài công cụ tra cứu trực tuyến được làm ra từ năm ngoái nhưng khi mình tìm thử một browser extension để tiện việc tra cứu ngay tại tab đang mở thì chưa có ai làm.

![Tab tra cứu Cũ → Mới của extension](/images/2026/wx-tra-cuu-dvhcvn-screenshot-2.png "Tab tra cứu Cũ → Mới")

Với số lượng dữ liệu ĐVHC cấp nhỏ nhất là phường/xã không quá lớn: 3291 đơn vị phường xã mới; 9953 phường xã cũ, tương đương với số lượng đối chiếu giữa cũ và mới). Đây là con số khá lý tưởng để thử khả năng và tốc độ của công nghệ IndexedDB mà các trình duyệt hiện đại đều hỗ trợ. Và nhờ sử dụng IndexedDB, tất cả dữ liệu và xử lý tra cứu hoàn toàn xảy ra offline tại trình duyệt mà không cần đến server.

Một tính năng đáng kể mà chỉ có browser extension mới làm được đó là tự động tìm và chú thích các tên phường / xã mới với tên địa phương cũ trong bất kỳ trang web nào bạn đọc. Việc này giúp độc giả các trang tin tức dễ dàng liên hệ đến vị trí địa lý của địa phương đang được nhắc tới.

![Tính năng tự động chú thích tên phường xã mới trên trang tin tức](/images/2026/wx-tra-cuu-dvhcvn-screenshot-3.png "Tự động chú thích tên địa danh trên trang web")

Ngoài ra, side project này cũng giúp mình thử nghiệm agentic engineering và build software gần như hoàn toàn bằng AI Agent (Claude Code).

Và đến hôm nay, giữa thời đại AI này, mình đã được kiểm chứng rằng: VIẾT CODE sẽ không còn là công việc của lập trình viên nữa. LTV sẽ phải "tiến hóa" sang một vai trò cao hơn và đúng nghĩa engineering hơn. Topic này mình xin bàn trong một bài viết khác.

Cuối cùng, mời mọi người [cài thử extension này](https://tracuudvhc.thanh.im) và cho feedback nhé. Extension này nguồn mở và hoàn toàn không có quảng cáo hay tracking.

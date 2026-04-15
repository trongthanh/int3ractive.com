---
title: "curl https://amlich.app"
subtitle:
author: Thanh Tran
metaDesc: Hiển thị thông tin Âm Lịch ngay trên cửa sổ terminal — chỉ cần gõ `curl https://amlich.app`.
date: 2026-04-14T22:00:00+0700
tags: [oss, amlich, cli, vietnamese]
image: /images/2026/amlich-app-curl-ansi.png
coverImage: /images/2026/amlich-app-curl-ansi.png
---

Một cải tiến với trang [amlich.app](https://amlich.app) mà mình dự định từ lâu, lấy ý tưởng từ trang wttr.in đó là hiển thị thông tin Âm Lịch ngay trên cửa sổ terminal.

Nay nhờ có thằng đệ Claude Code và gói Copilot Pro Github tài trợ cho open source developer, mình đã xong nốt món nợ tech này.

Tính năng rất đơn giản: Ngay trong cửa sổ terminal, chỉ cần gõ

```sh
$ curl -L amlich.app
# hoặc
$ curl https://amlich.app
```

thì thông tin của ngày Âm hiện tại và bảng lịch tháng sẽ hiện thị rõ ràng, "rực rỡ" như một phần mềm CLI.

Ngoài ra, amlich.app cũng được thêm tính năng render thông tin Âm Lịch dưới dạng plain text cho AI Agent hoặc bất kỳ HTTP client nào có truyền header "accept: text/markdown". Việc trả về plain text sẽ giúp tiết kiệm token khi làm việc với LLM.

![Markdown output của amlich.app cho AI Agent](/images/2026/amlich-app-curl-markdown.png "curl -L -H 'Accept: text/markdown' amlich.app")

Bài giới thiệu cũng chỉ đến đây. Bà con có thắc mắc gì thêm mình comment nghen.

---

Ghi chú thêm:

- curl mặc định prepend `http://` nên cần thêm flag `-L` để follow redirection. Domain `.app` bắt buộc phải dùng https.
- Nếu terminal không có curl thì có thể thay bằng `wget -qO-`

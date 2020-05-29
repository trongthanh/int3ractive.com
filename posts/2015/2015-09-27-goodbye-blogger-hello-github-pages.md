---
title: Goodbye Blogger.<br> Hello GitHub Pages.
subtitle: Time for a new refresh.
author: Thanh Tran
description: I just migrate my blog from Blogger to GitHub Pages. Here's why...
date: 2015-09-27T13:56:17+07:00
tags: [thoughts]
updated: 2015-09-29T21:13:04+07:00
image: images/2015/markdown-editing.jpg

---

I have migrated my blog from Blogger to GitHub Pages. I am so far happy with it.

## Why The Change?

My ultimate motivation of this move is the frustration of maintaining a long post's format and hierarchy across multiple platforms and editors. The blog post needed reviewing and editing from different people, so I used Google Doc as the collaborating tool. But its rich format didn't play nice with Blogger's WYSWYG editor, so I had to paste the content as plain text and did the formating and URL linking all over again.

It was when I realized that, rich text editors are a nuisance to long and serious writing, and why some new blog platforms adopting plain text editors (with specialized formating syntax) exclusively. Editing in plain text, in fact, encourages me to focus on the ideas and contents. Besides, I'm not writing just texts but using the [Markdown](https://help.github.com/articles/github-flavored-markdown/) syntax (you should have heard of it) which allows me to annotate the intended hierarchy, web links and images, etc. without compromising the convenience of version tracking or any means of writing collaboration.

Besides, here are other reasons of the move:

- Blogger's WYSWYG editor is way out-dated and lousy. It handles new lines poorly and makes my posts, underneath the markups, like a single paragraph with just line breaks. You can suggest that I could write in HTML since I'm a Front End developer, but authoring HTML is a distraction to my focus on writing.
- Blogger's XML-based template format is difficult to use and customize. Besides it doesn't provide a separate CSS file but inlining to the output HTML. This has kept me from rewriting my blog's theme for a long time.
- There is no static file storage for the blog post's extras. Although it come with handy photo uploading service, for other stuff like downloadable assets and code demos, I had to reside on other services like Github or FileDen which often have cross domain issues or risk of service termination.

## Moving to GitHub Pages

[GitHub Pages](https://pages.github.com/) allows me to overcome all shortcomings above.

Take the issue with text formating for example. Under the hood, GitHub Pages use [Jekyll](http://jekyllrb.com) which is a template-enabled static site generator. That means, I can edit and keep my blog posts in markdown text. At GitHub side, my templates and posts are processed automatically to create a nice static website. (Let me discuss how to edit Markdown text effectively in another post).

A static site means I have all the freedom to customize the theme with the tooling of Front End I'm used to. And the Liquid template language offered by Jekyll is quite similar to Handlebars or EJS.

Another good thing with GitHub is that I can check in any kind of files to the blog repository and the post's extra assets can now be hosted together with the blog for free.

Lastly, Jekyll does have a [Blogger migration tool](http://import.jekyllrb.com/docs/blogger/) and it has well documented settings that allows me to migrate my blog without altering the post URL scheme. And GitHub Pages, for long, has support for custom domains.

### Nothing is perfect!

GitHub Pages has the flaws of any static websites. But in this era of [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service), many of them can be addressed easily, even at no cost:

#### Comments

By using a commenting / discussion service like [Disqus](https://disqus.com), [Facebook Comments Plugin](https://developers.facebook.com/docs/plugins/comments), or [G+ Comments](http://googlesystem.blogspot.com/2013/04/add-google-comments-to-any-web-page.html), etc... my static website can accept readers' comments and feedbacks although it doesn't have a database or any server-side scripts. In fact, I have swapped Blogger's comment system with Disqus for a long time since the latter accepts users with accounts from multiple social networks.

#### Site search

For this, we can use Google's [Custom Search Engine](https://cse.google.com) which can be easily installed on any static HTML pages. The service provides full text search with Google-grade algorithm. You can even force CSE to update your page index if you worry your latest blog won't show up in the results.

In addition we can write a template for the archive page, in which visitors can have quick glance of all published blog posts.

#### RSS

This can be solved by an RSS/Atom template which outputs an updated feed XML every time I push new blog post. However, the trouble has been recently taken away when GitHub Pages rolled out [built-in support](https://help.github.com/articles/atom-rss-feeds-for-github-pages/) for blog feeds.

#### Tags & categories

Currently, Jekyll in GitHub Pages does not support auto tag or category pages generation. However, you can implement a [custom template](http://www.minddust.com/post/tags-and-categories-on-github-pages/) for tags and categories, but it involves some manual preparation.

### The new theme

I have found a nice minimalist blog theme called [Clean Blog](http://startbootstrap.com/template-overviews/clean-blog/) created by [Start Bootstrap](http://startbootstrap.com/) and [modified](https://github.com/trongthanh/startbootstrap-clean-blog-jekyll) it to fit with GitHub Pages and my preferences. You can find the source code and my comments on the changes of this blog theme [here](https://github.com/trongthanh/startbootstrap-clean-blog-jekyll).

At the end of the day, moving my blog from Blogger ([archive site](http://int3ractive.blogspot.com)) to GitHub Pages ([source code](https://github.com/trongthanh/trongthanh.github.com)) is a smooth transition and returning visitors may only notice the change in theme and a much faster loading time.


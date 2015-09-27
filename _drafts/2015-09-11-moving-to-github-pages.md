---
layout: post
title: Goodbye Blogger, hello GitHub Pages.
subtitle: Time for a new refresh
author: Thanh Tran
meta-description: I just migrate this blog to GitHub Pages. Here's why...
date: 2015-09-11T22:33:44+07:00
tags: [Thoughts]
modified: 

---
[Hero banner use an empty sublime text window]

I have just migrated my blog from Blogger to GitHub Pages and adopted a minimalist theme which was created by [Clean Blog author]. I am so far happy with it.

## Why The Change?

My ultimate motivation of this move is the frustration of maintaining a long post's format and hierarchy across multiple platforms and editors. The blog post needed reviewing and editing from different people, so I used Google Doc as the collaborating platform. But its rich format didn't play nice with Blogger's WYSWYG editor, so I had to paste the content as plain text and did the formating and URL linking all over again. 

It was when I realized that, rich text editors are great nuisances to long and serious writing, and why some new blog platforms adopting plain text editor (read: Markdown) exclusively. Editing in plain text actually encourages me to focus on the ideas and contents. Besides, by using [Markdown](https://help.github.com/articles/github-flavored-markdown/) syntax, I can maintain the intended hierarchy, web links and images, etc. without compromising the convenience of version tracking (read Git) or any means of editing collaboration (Google Docs, emails, GitHub itself).

Besides, here are other reasons of the move: 

- Blogger's WYSWYG editor is way out-dated and lousy. It handles new lines poorly and makes my posts, underneath, like a single paragraph with just line breaks. You can say that I should write in HTML since I'm a Front End developer, but authoring HTML will be a distraction to my focus on writing the content. Not to mention that editing a draft in Blogger's HTML editor is somewhere near a torture. [Blogger's editor screenshot?]
- Blogger XML-based template format is difficult to use and customize. Besides it doesn't provide a separate CSS storage but inlining to the output HTML. This has kept me from rewriting my blog's theme for a long time.
- There is no static file storage for the blog post's extras. Although it come with handy photo uploading service, for other stuff like downloadable assets and code demos, I had to reside on other services like Github or FileDen which often have cross domain issues or risk of service termination.

## Moving to GitHub Pages

GitHub Pages allows me to address all shortcomings above.

Take the issue with text formating for example. Under the hood, [GitHub Pages](https://pages.github.com/) use [Jekyll](http://jekyllrb.com) which is a template-enabled static site generator. That means, I can edit and keep my blog posts in plain text with markdown syntax. Only when pushing them to remote repository, GitHub will automatically processes my templates and posts to create a nice static website.

A static site means I have all the freedom to customize the theme with the tooling of Front End I'm used to. And the Liquid template language offered by Jekyll is quite similar to other Front End template languages like Handlebars or EJS. Talking about the theme, I have found a very nice minimalist blog theme for Jekyll and modified it to be compatible with GitHub and to suit my preferences. You can find the source code of my blog theme here.

Another good thing with GitHub is that I can check in any kind of files to the blog repository and the post's extra assets can now be hosted together with the blog for free.

Lastly, Jekyll does have a Blogger migration tool [link?] and it has well documented settings that allows me to migrate my blog without altering the post URL scheme. Besides, GitHub Pages, for long, has support for custom domains. 

~~With all of the above~~, moving my blog from Blogger to GitHub Pages is a smooth transition and returning visitors may only notice the change in theme and a much faster loading time.

### Nothing is perfect!

GitHub Pages has the shortcomings of any static websites. But in this era of SaaS, many of them can be addressed easily, even at no cost:

#### Comments

By using a commenting / discussion service like [Disqus](http://), [Facebook Comments](http://), [G+ Comments](http://), etc... my static blog pages can accept readers' comments and feedbacks in no time. In fact, I have swapped Blogger's comment dialogs with Disqus for a long time since the latter accepts users with accounts from multiple social networks.

#### Site search

For this, we can use Google's [Custome Search Engine](https://cse.google.com) which can be easily installed on any static HTML pages. The service provides full text search with Google-grade algorithm. Worry about indexing latency and late result arrival of new posts? You can force CSE to update your page index in its management page.

Besides my preference to navigate a new blog site is through a big list of previously posted titles so that I can grasp a quick glance at the topics and contents a blogger frequently writes about. So I did an archive page for my own blog.

#### RSS

This can be solved by an RSS/Atom template which outputs an updated feed XML every time I push new blog post. However, the trouble has been recently taken away when GitHub Pages start rolling out [built-in support](http://) for feed XML.

#### Tags & categories 

Currently, Jekyll in GitHub Pages does not support auto tag or category pages generation. You can implement a [custom template](http://) for tags and categories, however, but it involves some manual preparation.


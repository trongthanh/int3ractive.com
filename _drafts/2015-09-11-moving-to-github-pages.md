---
layout: post
title: Moving My Blog to GitHub Pages
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

GitHub Pages has the shortcomings of any static website. But in this era of SaaS, many of them can be addressed easily, at no cost:

- Comments
- Site search
- RSS
- No tags & categories 
- 
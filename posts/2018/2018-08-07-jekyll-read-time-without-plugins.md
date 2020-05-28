---
layout: post
title: Jekyll Read Time Helper without Plugins
subtitle: Implement blog posts "read time" indicator for GitHub Page
author: Thanh Tran
description:
date: 2018-08-07T14:04:35+07:00
tags: [jekyll, github page]
image: images/code-bg.jpg
---

Searching the web for a Jekyll / Liquid template helper that show "read time" of a post without plugins (so that it'll work for GitHub Page) will probably land you at [this post](https://carlosbecker.com/posts/jekyll-reading-time-without-plugins/) by Carlos Alexandro Becker. I also tried the solution of that post which I'll quote it here (assuming **180 word-per-minute**):

```liquid
{% raw %}<span class="reading-time" title="Estimated read time">
    {% assign words = content | number_of_words %}
    {% if words < 360 %}
        1 min
    {% else %}
        {{ words | divided_by:180 }} mins
    {% endif %}
</span>{% endraw %}
```

This partial is okay except for those posts that has words count between 180 - 360 which will result as 1 min instead of 2, and words count between 360 - 539 will result as 2 min instead of 3...

So I have revised the solution with my own as following:

```liquid
{% raw %}<span class="reading-time" title="Estimated read time">
    {% assign words = include.content | strip_html | number_of_words %}
    {{ words | divided_by: 180 | plus: 1 }} min read.
</span>{% endraw %}
```

Since Liquid filter `divided_by` will round down the result if input is integer (0.5 to 0, etc.), adding back 1 will correct this, with the only flaw that any fractions of minute will now be rounded up to one minute.

Besides the new read-time algorithm, I've also added the `strip_html` filter to the partial and use [include parameter](https://jekyllrb.com/docs/includes/#passing-parameters-to-includes) so that it'll work correctly with consistent `min read` value regardless of the context it is used. For example, if it is placed in **post** layout, we will add the partial like so:

```liquid
{% raw %}<p class="meta">
    <span>Posted by {{ page.author }} on {{ page.date }}.</span>
    {% include read-time.html content=content %}
</p>{% endraw %}
```

If it is used in blog index, such as `index.html`, it'll be added like this:

```liquid
{% raw %}{% for post in paginator.posts %}
<div class="post-preview">
    <a href="{{ post.url | prepend: site.baseurl }}">
        <h2 class="post-title">{{ post.title }}</h2>
    </a>
    <p class="post-meta">
        <span>Posted by {{ post.author }} on {{ post.date }}.</span>
        {% include read-time.html content=post.content %}
    </p>
</div>
<hr>
{% endfor %}{% endraw %}
```

My blog has been updated with [read-time partial](https://github.com/trongthanh/trongthanh.github.com/blob/master/_includes/read-time.html) with the adjustment that I'm using **265 WPM** as per [Medium recommendation](https://help.medium.com/hc/en-us/articles/214991667-Read-time)[^1].

So, that's it. Any comments are welcomed.

---
[^1]: It was 275, but it seems they recently updated.

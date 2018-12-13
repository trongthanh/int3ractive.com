## Source code of my blog at [int3ractive.com](http://int3ractive.com)

**Note**: All blog posts remain **copyrighted** by Tran Trong Thanh (int3ractive.com).

My labs site is moved [over here](https://github.com/trongthanh/labs.int3ractive.com), with licenses as per each folder.

### To preview and build locally

#### macOS:

```sh
# install Ruby gem `bundler` (only once)
$ gem install bundler

# then install the `github-pages` plugins set with
$ bundle install

# and finally execute:
$ bundle exec jekyll serve --incremental --livereload
```

#### Linux / Ubuntu:

```sh
# Install **ruby** and **bundler**
$ sudo apt install ruby ruby-dev ruby-bundler

# Install github-pages bundle (will need to key in admin password if prompt)
$ bundle install

# and finally execute:
$ bundle exec jekyll serve --incremental --livereload
```

## The Theme: Clean Blog by Start Bootstrap - GitHub Pages version by Thanh Tran

> This is a modified version of [Clean Blog Jekyll](https://github.com/IronSummitMedia/startbootstrap-clean-blog-jekyll) to be fully compatible with [GitHub Pages](https://help.github.com/articles/using-jekyll-with-pages/) (no pre-compilation needed). Modified by [Thanh Tran](https://github.com/trongthanh) for his own blog.

The official Jekyll version of the Clean Blog theme by [Start Bootstrap](http://startbootstrap.com/).

### Additional notes on the `kramdown` markdown syntax:

- Link with target blank: `[link](http://example.com){:target="_blank"}`
- Add class to previous elements: {: .drop-cap}
- Footnotes: `in body text[^1]` --> at bottom `[^1]: foot note`

### Additional notes from my own tweaks:

- Drop-cap text: `**P**{:.drop-cap}rogressive...` (Letter **P** will enlarge and drop on 2 lines)
- Image with caption (image immediately followed by an italic span):

```markdown
![Image alt text](/path/to/image.jpg)_Caption text_
```

- Image with caption and zoom-in link (large image will open in new tab:

```markdown
[ ![Alt text](/path/to/small.jpg) ](/path/to/large.jpg){: target="_blank" data-figure="" } \_Caption_
```

## CHANGELOG

- New choice of typography, remarkably **Open Sans** for titles and **Lora** for body texts.
- Implement **read-time** partial without plugins, use it in Post meta and blog index.
- Use SASS (SCSS flavor) instead of LESS, with minimal Bootstrap SCSS bundle.
- ~~New choice of typography, remarkably Source Sans Pro for titles and Noto Serif for body texts.~~
- Support Vietnamese texts
- Use client-side [Prism](http://prismjs.com) syntax highlighter (compatible with GitHub-flavored Markdown code fences) instead of pre-rendered Pygments
- Include Google Analytics script tag. Set your GA ID at `site.gaid`
- Include [Disqus](http://disqus.com) script to enable commenting. Set your Disqus site's ID at `site.disqus_site_id`. If not set, the comment section is omitted.
- Full text search using Google site search. See _search.html_.
- A compact posts archive (which list all published blog posts). I believe listing the post titles is better than Search and it generate some sort of information scent.
- Better image caption using `img + em` technique. See [this example](http://blog.int3ractive.com/startbootstrap-clean-blog-jekyll/2015/08/10/Muc-Toi-Thieu-Cua-Lap-Trinh-Vien-Front-End/)
- Enable [automatic feed generation](https://help.github.com/articles/atom-rss-feeds-for-github-pages/) supported by GitHub Pages, added **jekyll-feed** in **gems** in _\_config.yml_ file
- Enable auto sitemap, added [**jekyll-sitemap**](https://help.github.com/articles/sitemaps-for-github-pages/) in **gems** in _\_config.yml_ file
- Enable [**jekyll-seo-tag**](https://github.com/jekyll/jekyll-seo-tag) plugin to generate SEO and social network friendly tags
- **TODO:** Implement tags labelling for posts and view by tags

## Note on the SEO plugin and front matter

- Use `title` for both post title and HTML page title
- Use `subtitle` for the text below the main title
- Use `description` for meta and open graph description
- Use `image` for both post header image and open graph image

## Before You Begin

In the _config.yml_ file, the base URL is set to `/startbootstrap-clean-blog-jekyll` which is this themes gh-pages preview. It's recommended that you remove the base URL before working with this theme locally!

It should look like this:
`baseurl: ""`

## What's Included

This Jekyll theme is customized to run well on GitHub Pages, therefore it must be built or previewed with `github-pages` gem bundle to align the plugins and settings. Follow [this article](https://help.github.com/articles/using-jekyll-with-pages/#installing-jekyll) for environment installation. After that, you can start previewing the generated site with `bundle exec jekyll serve`.

A Grunt environment is also included. There are a number of tasks it performs like minification of the JavaScript, compiling of the SCSS files, adding banners to keep the Apache 2.0 license intact, and watching for changes. Run the grunt default task by entering `grunt` into your command line which will build the files. You can use `grunt watch` if you are working on the JavaScript or the SCSS.

You can also run `grunt serve` to watch for changes and test the blog in one command.

## Support

This theme is for my own blog which is customized with my own preferences. Issue reports are welcome but I may have little time to respond to questions or installation support.

Besides, please visit Clean Blog's template overview page on Start Bootstrap at http://startbootstrap.com/template-overviews/clean-blog/ for extra info and comments.

---

© 2015-2018 Tran Trong Thanh. All rights reserved.

© 2015 Start Bootstrap (theme source)

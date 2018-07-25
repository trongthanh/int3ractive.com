## Source code of my blog at [int3ractive.com](http://int3ractive.com)

All blog posts remain __copyrighted__ by Tran Trong Thanh (int3ractive.com). If you like this blog's theme, feel free to check out [this repository](https://github.com/trongthanh/startbootstrap-clean-blog-jekyll).

### To preview and build locally

#### macOS:

```sh
# install Ruby gem `bundler` (only once)
$ gem install bundler

# then install the `github-pages` plugins set with
$ bundle install

# and finally execute:
$ bundle exec jekyll serve --incremental
```

#### Linux / Ubuntu:

```sh
# Install **ruby** and **bundler**
$ sudo apt install ruby ruby-dev ruby-bundler

# Install github-pages bundle (will need to key in admin password if prompt)
$ bundle install

# and finally execute:
$ bundle exec jekyll serve --incremental
```

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
[ ![Alt text](/path/to/small.jpg) ](/path/to/large.jpg){: target="_blank" data-figure="" } _Caption_
```

Note: my labs site is moved [over here](https://github.com/trongthanh/labs.int3ractive.com), with licenses as per each folder.

---
© 2015-2018 Tran Trong Thanh. All rights reserved.

---
layout: post
title: macOS Mojave dynamic wallpaper for Linux
subtitle: Backgrounds that will change based on time of the day.
author: Thanh Tran
description: I has crafted a Linux built-in background slideshow XML that replicate macOS Mojave dynamic wallpaper in which the images are changed based on the time of the day.
date: 2018-07-25T15:05:40+07:00
tags: [Linux, macOS]
image: img/2018/linux-mojave-bg.jpg
---

I'm a Mac owner but also a Linux enthusiast and currently dual boot macOS and Linux. That's why when I learned about new [dynamic wallpaper feature](https://www.cultofmac.com/553577/grab-all-16-macos-mojave-dynamic-wallpapers-right-here/) of macOS Mojave, and recalled Ubuntu / Linux has a similar feature (note built-in) called [wallpaper slideshow](https://help.ubuntu.com/community/SlideshowWallpapers), I realized "Hey why not recreate the dynamic Mojave sand dune backgrounds on Linux with each image reflect the right moment of the day?".

So after several minutes crafting [this mojave.xml](https://gist.github.com/trongthanh/7d632e90687e1bc219e1f3262d337702) and actually testing and tweaking it on Ubuntu for two days, I posted the XML on [Github Gist](https://gist.github.com/trongthanh/7d632e90687e1bc219e1f3262d337702) and [tweeted about it](https://twitter.com/trongthanh/status/1011470275957800960). It was amid my busy days, so I didn't write a proper blog post. Fortunately, the guys at _OMG! Ubuntu!_ was interested and wrote [a detailed article about it](https://www.omgubuntu.co.uk/2018/06/macos-mojave-dynamic-background-linux) and got many positive comments.

This post is not intended to repeat the instructions that were well written at the _OMG! Ubuntu!_ article. But as a place for further update announcements and discussion since **GitHub Gist sucks at notify commenters and owners** (if not at all) about gist updates.

So from now on, please leave any comments at the bottom of this article (and not on the gist anymore).

From the commenters and my own tests, these are support status of different DE for slideshow XML:

- **GNOME** & **Unity**: Use gnome-tweak to select the XML file from any folder
- **MATE**: Just use the built-in Wallpaper selector from Control panel, make sure **all files** filter is selected at the file chooser.
- **Cinnamon**: From terminal, run `gsettings set org.gnome.desktop.background picture-uri "file:/home/USERNAME/Pictures/wallpapers/mojave-background/mojave.xml"`
- **Xfce**: It reportedly supports background XML, but I have not yet tested to confirm.
- **Budgie**: Sorry, no support. :(
- **KDE**: ???
- **Pantheon** (Elementary): ???

Here I'm embedding the XML again with short instructions for your convenience:

<script src="https://gist.github.com/trongthanh/7d632e90687e1bc219e1f3262d337702.js"></script>


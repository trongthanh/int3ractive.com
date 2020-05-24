---
layout: post
title: On dual booting Linux on a Macbook Air
subtitle: And on choosing a modern Ubuntu desktop environment
author: Thanh Tran
description: I have been using a MacBook Air for both personal use and work since 2012. But in 2018, Apple is not itself anymore. I'm dual booting a Linux distro along with macOS on my MBA, to get familiar with modern Linux desktop experience, and to explore the tools and software that can replace my current ones on macOS.
date: 2018-08-28T01:19:44+07:00
tags: [Linux, macOS, Macbook Air]
---

I have been using a MacBook Air for both personal use and work since 2012. Apple's hardware back then was top notch and reliable. When I did a feature and price comparison between a MacBook Air and other ultrabook offers, MacBook Air can easily rise up to the number one choice for a laptop that is portable, well-built and powerful enough at a reasonable price.

Fast forward to 2018. Apple is not itself anymore, at least in the interest of MacBook. Bad reviews and incidents of the MacBook line just happened one after another. Here are just a few:

- Apple's [slow on updating](https://weblog.rogueamoeba.com/2018/06/14/on-the-sad-state-of-macintosh-hardware/) its laptops hardware
- The [shallow and dirt-prone butterfly keyboards](https://theoutline.com/post/2402/the-new-macbook-keyboard-is-ruining-my-life) on the new MacBook and MacBook Pro
- The [unwanted touch bar](https://www.reddit.com/r/mac/comments/5w3wpy/q_people_who_have_used_the_touch_bar_is_it_worth/)
- The [core i9 chip MacBook throttling](https://www.macrumors.com/2018/07/17/core-i9-chip-macbook-pro-throttling/)
- And for MacBook Air, its chips are [now outdated](https://buyersguide.macrumors.com/#MacBook_Air) (as of 08/2018) and worse its peripheral design hasn't change since... forever.

With all of that, I seriously consider moving away from Apple walled garden and embrace Linux where I can freely choose hardware from other vendors.

However, my aged MacBook Air is still working great. So my strategy for now is to dual boot a Linux distro along with macOS on this machine, first to get familiar with modern Linux desktop experience, and secondly, to explore the tools and software that can replace my current ones on macOS.

My chosen distro is Ubuntu, because I am very much used to it, and it's stable, especially on exotic hardware like MacBook Air. Besides, being the most popular Linux distro, it will be easier for me to find answers to issues if I come across.

At first I installed the default Ubuntu 18.04 with GNOME Shell and felt **really irritated**. After that I tried 2 other desktop environments: Pantheon (of Elementary OS) over Ubuntu 18.04 and MATE (full install of Ubuntu MATE 18.04). I kept a note name _"Linux Grudges"_ to list down what I personally dislike and like about each desktop environments (desktop UI experience only, other functionalities are almost the same), so here they are:

### GNOME Desktop & GNOME Shell (Standard Ubuntu):

![Ubuntu 18.04 default](/images/2018/ubuntu-1804-with-nautilus.jpg)_Default Ubuntu 18.04 with Nautilus_

I tried GNOME 3 desktop with GNOME shell for the first time after long time with the old Unity DE and macOS. I have a lot of irritation with it and God forbid, GNOME shell, on the contrary to its claim, often steps in my way to get things done!

#### Like:
- Activities overview and Show applications screen
- Type to search anything (similar to macOS Spotlight)
- Dash to dock by default (this make GNOME Shell on Ubuntu suck less)
- Support legacy application indicators by default (this is another Ubuntu fix for GNOME Shell)
- Most GNOME apps support pixel perfect scrolling with touch pad

#### Dislike:
- A huge **waste of space on the top panel** and hide everything in the system tray and app menu dropdowns
- If I want to do anything, other than with current windows, I have to visit that Activities overview, like: launch another app, search for files, search for apps, switch workspace... which **became annoying and distracting to current task**
- It's 2018 and people are moving away from hamburger menus and dropdowns. But for GNOME Apps, they **hide everything in that menu**
- Some of my favorite apps like Firefox, Sublime Text are still using fake smooth scrolling. (Not GNOME per se, but it just add up some irritation.)
- Crashy and sometimes CPU-hog GNOME Shell. I have to run: `gnome-shell --replace` once in a while.

If you'd like some more rants on the problematic GNOME 3, check out [this post](https://liam-on-linux.livejournal.com/52807.html).

### Pantheon Desktop on Ubuntu 18.04:

![Elementary OS with Slingshot application menu](/images/2018/elementary-os.jpg)_Elementary OS with Slingshot application menu_

I was curious about Elementary OS which has minimalist and similar UI to macOS, so I tried out its **Pantheon DE** on default Ubuntu 18.04.

#### Like:
- Simple but clean and aesthetic UI, resemble macOS
- It's default Terminal app can use Ctrl-C & Ctrl-V for copy & paste
- Files explorer with column view similar to macOS Finder
- Nice and clean app store

#### Dislike:
- Terminal lack of customization (other shortcuts, color theme....)
- No global menu, so most of the top panel space is also wasted
- Old system tray icons won't show at top bar (iBus, Fcitx, Electron apps...). This is show-stopper for me.
- Log out crash the session (may be due to Pantheon desktop on top Ubuntu, not real Elementary OS)
- Currently, its configuration ability is limited.

### Ubuntu MATE:

![Ubuntu MATE Desktop with Mutiny layout ](/images/2018/ubuntu-mate-mutiny.jpg)_Ubuntu MATE Desktop with Mutiny layout_

I tried **Ubuntu MATE** (with Unity-like layout) solely because I wanted the global menu which, for me, is the best solution of app menu. (Easier to target since it's sticked to top edge; space of top panel is well used; and leave more working area for app window...). I did enjoy Ubuntu MATE and invested some tweaking with it. But after a while, I felt that the MATE experience is not very polished and feel dated.

#### Like:
- Low resource footprint
- Global menu
- HUD (menu items search like macOS)
- App Launcher (like macOS)
- Dock (again, like macOS)

#### Dislike:
- App switcher popup is too small and not having a thumbnail preview
- MATE doesn't have something similar to Activities overview
- Panel icons occasionally hang, and have to restart with: `mate-panel --replace &`
- Lack of theme dedicated for MATE desktop, and the default MATE themes, IMO, lack some taste
- Lack of animation (this should be fine if I'm on very old hardware)
- No built-in color profile manager (this is important, without custom color profile, MacBook Air screen color look very off)

### Ubuntu Budgie:

I learned about **Ubuntu Budgie** after I already chose my distro and DE. I did not tried it but viewed its screen cast walk-through. My immediate impression is that it's just like another Elementary OS and still waste the top panel.

![Budgie desktop maximized window](/images/2018/budgie-maximized.png)_Maximized window on Budgie desktop on a 1920x1080 screen. Imagine it runs a traditional app with title, menu... on a 1366x768 laptop screen, the top bar is wasted and how narrow the space left for actual content._

## Settle on GNOME Desktop and GNOME Shell

After actually trying the three different desktops, I decided, though, to settle on GNOME with these reasons:

- GNOME desktop has the most popular community and is actively developed.
- Crashy and resource-hog problems of GNOME Shell often come from lousy extensions. With some experiment and trials, I have spotted the problematic ones and removed them.
- Although it has many UX problems (that even [Linus bashed it](https://www.zdnet.com/article/linus-torvalds-finds-gnome-3-4-to-be-a-total-user-experience-design-failure/)), it is still very configurable and extensible.
- After finding out **Switcher**, and **Unite** GNOME Shell extensions, GNOME desktop experience is now bearable for me.
- With the main Ubuntu distro chose GNOME as default desktop, I'm in hope that better GNOME enhancements will land from Ubuntu developers as they did for Unity.
- GNOME Shell has JavaScript API and its extensions are written with JavaScript; which really excites a JS guy like me that I'll be able to jump into "hacking" my desktop real soon. I'm going through tutorials during spare time right now.

## The journey has just begun

That said, I have been using Ubuntu on this MacBook Air for two months non-stop and have got used to it to the level of efficiency that I had with macOS.

![My Ubuntu desktop with Unite extension](/images/2018/ubuntu-1804-unite.jpg)_My current Ubuntu desktop with Unite extension which allows me to move window title and buttons up the top panel for maximized windows, making good use of its space._

I did a lot of tweaks and configurations wherever I found it make sense and made the transition from macOS to Linux as quick as possible. For alternative software, I have also found most of the needed applications to avoid switching back to macOS.

If you are interested in installing Ubuntu on a MacBook, stay tuned. In the coming blog posts, I'll share my experience and things I did to configure my current Ubuntu desktop, including: fixing GNOME shell with some extensions, making good use of the multi-touch touch pad, keyboard shortcuts and key swaps for Mac keyboard, fixing the screen color profile, mounting the APFS Macintosh drive, finding the software alternatives, and a lot more...

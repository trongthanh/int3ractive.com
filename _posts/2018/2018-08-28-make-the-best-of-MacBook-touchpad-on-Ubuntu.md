---
layout: post
title: Making the best of MacBook Air touchpad on Ubuntu
subtitle: A guide to mtrack driver and make use of the multi-touch touchpad on Linux
author: Thanh Tran
description: In this post, I'm detailing my touchpad setup that I feel best so far and that it is as close to MacOS experience as I can get on Ubuntu 18.04 dual booted on a MacBook Air
date: 2018-09-17T00:07:16+07:00
tags: [Linux, Macbook Air, Ubuntu, touchpad]
image: img/2018/macbookair-touchpad.jpg
---
<center><small><em>Cover photo by Katarina Šikuljak on Unsplash</em></small></center>

If you are a long time MacBook (Air) user and recently switch to Linux, I bet one of the things you'll miss most is the multi-touch touchpad. As I have [blogged earlier](https://int3ractive.com/2018/08/on-dual-booting-linux-on-a-macbook-air.html) that I decided to dual boot Ubuntu on this MacBook Air, at first, I also struggled to find the best setup for the touchpad to retain my productivity while not having to rely much on mouse.

In this post, I'm detailing my touchpad setup that I feel best so far and that it is as close to MacOS experience as I can get.

Although **libinput** is the default driver on latest Linux distros, we'll switch to **mtrack**[^1] driver which supports many more of multi-touch gestures with flexible configurations, especially the three finger drag, which is also the main reasons for my move. Thanks to this [blog post](https://williambharding.com/blog/technology/toward-a-linux-touchpad-as-smooth-as-macbook-pro/), I got a much faster head start, but there were still a lot of other things I did to get to my current setup.

Before we begin, please noted that mtrack currently and will only support Xorg environment, which I am fine since I don't find Wayland is any better in terms of performance and resource usage on current Ubuntu 18.04. I'm staying with Xorg for now (which is default session of Ubuntu 18.04 by the way).

## Compile and install mtrack driver

Compile a Linux package by yourself might be a little scary for newbies so you just follow these steps carefully, then get to know the ins and outs later:

First, open terminal and install the necessary tools and dependencies for the compilation of the driver:

```sh
# These dependencies were noted by me on default Ubuntu 18.04
sudo apt install build-essential git libmtdev-dev mtdev-tools xserver-xorg-dev xutils-dev
```

Then we'll clone source code and compile the mtrack driver from its currently active [repo](https://github.com/p2rkw/xf86-input-mtrack):

```sh
# execute line by line:
cd /tmp
git clone https://github.com/p2rkw/xf86-input-mtrack.git
cd xf86-input-mtrack
./configure --with-xorg-module-dir=/usr/lib/xorg/modules
sudo make
```

You are most likely not be able to compile the package at the `sudo make` command. Look carefully at the error messages which will tell the missing dependencies for it. If you are stuck, post a comment here and I'll see if I can help.

Finally, install the driver into system:

```sh
sudo make install
```

## Configure the new touchpad driver

The new driver won't be used until there's a proper config file set up. Create the config file at `/usr/share/X11/xorg.conf.d/50-mtrack.conf` (root or admin permission needed) and edit it with your favorite text editor. Or use these commands:

```sh
sudo touch /usr/share/X11/xorg.conf.d/50-mtrack.conf
sudo gedit /usr/share/X11/xorg.conf.d/50-mtrack.conf
```

This will open the file with Gedit (Text Editor) with proper permission to save. Then, copy and paste my current mtrack config below:

```sh
# Install mtrack driver 0.5.0++
# Save this file to /usr/share/X11/xorg.conf.d/50-mtrack.conf
# This config is specialized for MacBook Air 2012 (5,2)
Section "InputClass"
        MatchIsTouchpad "on"
        Identifier      "Touchpads"
        MatchDevicePath "/dev/input/event*"
        Driver          "mtrack"
        # Tweak cursor movement speed with this
        Option          "Sensitivity" "0.10"
        # Pressure at which a finger is detected as a touch
        Option          "FingerHigh" "5"
        # Pressure at which a finger is detected as a release
        Option          "FingerLow" "5"
        # I often use thumb to press down the physical button, so let's not ignore it
        Option          "IgnoreThumb" "false"
        Option          "ThumbRatio" "70"
        Option          "ThumbSize" "25"
        # Ignore palm, with palm takes up to 30% of your touchpad
        Option          "IgnorePalm" "true"
        Option          "PalmSize" "30"
        # Trigger mouse button when tap: 1 finger - left click, 2 finger - right click, 3 - middle click
        Option          "TapButton1" "1"
        Option          "TapButton2" "3"
        Option          "TapButton3" "2"
        Option          "TapButton4" "0"
        Option          "ClickTime" "25"
        # Disable tap-to-drag, we're using three finger drag instead
        Option          "TapDragEnable" "false"
        # While touching the touchpad with fingers, press the touchpad physical click button
        Option          "ClickFinger1" "1"
        Option          "ClickFinger2" "3"
        Option          "ClickFinger3" "2"
        Option          "ButtonMoveEmulate" "false"
        Option          "ButtonIntegrated" "true"
        # The momentum after scroll fingers released
        Option          "ScrollCoastDuration" "300"
        Option          "ScrollCoastEnableSpeed" ".1"
        # Natural scrolling with two fingers
        Option          "ScrollSmooth" "true"
        Option          "ScrollUpButton" "5"
        Option          "ScrollDownButton" "4"
        Option          "ScrollLeftButton" "7"
        Option          "ScrollRightButton" "6"
        # Tweak scroll sensitivity with ScrollDistance, don't touch ScrollSensitivity
        Option          "ScrollDistance" "150"
        Option          "ScrollClickTime" "10"
        # Three finger drag
        Option          "SwipeDistance" "1"
        Option          "SwipeLeftButton" "1"
        Option          "SwipeRightButton" "1"
        Option          "SwipeUpButton" "1"
        Option          "SwipeDownButton" "1"
        Option          "SwipeClickTime" "0"
        Option          "SwipeSensitivity" "1000"
        # Four finger swipe, 8 & 9 are for browsers navigating back and forth respectively
        Option          "Swipe4LeftButton" "9"
        Option          "Swipe4RightButton" "8"
        # Mouse button >= 10 are not used by Xorg, so we'll map them with xbindkeys and xdotool later
        Option          "Swipe4UpButton" "11"
        Option          "Swipe4DownButton" "10"
        # Mouse buttons triggered by 2-finger pinching gesture
        Option          "ScaleDistance" "300"
        Option          "ScaleUpButton" "12"
        Option          "ScaleDownButton" "13"
        # Mouse buttons trigger by 2-finger rotating gesture, disabled to enhance the pinch gesture
        Option          "RotateLeftButton" "0"
        Option          "RotateRightButton" "0"
EndSection
```

Few things to note from above config file:

- This config file is tested on Macbook Air 2012 (5,2)
- You'll most likely need to tweak the cursor sensitivity. Do so at `Option "Sensitivity" "0.10"`, replacing value 0.10 to any other values between 0 and 1. The larger, the more movement.
- You can tweak 2 finger scrolling sensitivity at `ScrollDistance`.
- These scroll and swipe are natural, so you may swap the button number if you want the reverse.
- Click on tap is enabled. If you don't want that, set those `TapButton#` value to "0"
- My config doesn't ignore thumb. I often press the physical touchpad button with thumb. If you want to ignore thumb, set `IgnoreThumb` to "true".

If you want further tweaks, head to [the driver's Github README](https://github.com/p2rkw/xf86-input-mtrack) and read the configuration instructions.

After that, log out and log in to your desktop. You'll know the driver is being used if you can drag or make selection immediately with three fingers on the touchpad.

## Disable touchpad while typing with `dispad`

After using **mtrack** for a while, I notice one of the annoying things is that touchpad is not disabled while typing which make the caret jump if you accidentally tap on it (and because I enabled tap to click). If you have troubles with this, install the `dispad` daemon from the original author of `mtrack`:

```sh
cd /tmp
git clone https://github.com/BlueDragonX/dispad.git
cd dispad
./configure
make
sudo make install
```

Go ahead and start `dispad` by execute this command in terminal. A config file `~/.dispad`[^2] is created for you with default options. You can keep those, or change some options to mine like below:

```ini
poll = 48
delay = 500
```

Lastly, we need to start `dispad` automatically every time we log in, so go to **Activities**, search and open **Startup Applications**. Add new entry, with name as "dispad", command as `/usr/local/bin/dispad` and with an optional comment to remind you what it does.

## Add more gestures with xbindkeys & xdotool

With above **mtrack** config, I already have these gestures (if it's not obvious for you):

- Left mouse click with one finger tap; right mouse with two fingers tap; middle mouse with three fingers tap
- Scroll with two fingers (both horizontal & vertical)
- Drag with three fingers
- Swipe left and right with 4 fingers will simulate mouse button number 9 & 8. This means I can navigate back and forth in browsers and many applications.

`mtrack` can simulate mouse button up to 15 with different gestures. However, Ubuntu only uses mouse buttons up to 9. To make use of other gestures, we need 2 additional tools: `xbindkeys` and `xdotool`.[^3]

Luckily, there's no need for manual compilation this time. Just open terminal and install via command:

```sh
sudo apt install xbindkeys xdotool
```

### So what are xbindkeys & xdotool?

`xbindkeys` is a daemon listening to your inputs from any input devices including keyboard, mouse and touchpad. You'll define a rule at which, if an input or combination of inputs matches, some command can be executed. That's where `xdotool` come in. `xdotool` is the command line tool which is able to simulate other key inputs. So by combining `xbindkeys` and `xdotool`, we'll be able to map high mouse buttons (> 9) to certain shortcuts that suit our needs.

To define the rules, you'll need to open `xbindkeys-config` GUI app, from which you'll define the keys listened and the actions (command). I won't give the how-to here (which you can [look it up here](https://wiki.archlinux.org/index.php/Xbindkeys)), but will provide my current xbindkeys config which you can copy and save it at `~/.xbindkeysrc`:

```sh
# Next Workspace
"xdotool key super+Page_Down"
   b:11

# Move Next Workspace
"xdotool key --clearmodifiers super+shift+Page_Down"
   Control + b:11 + release

# Previous Workspace
"xdotool key super+Page_Up"
   b:10

# Move Previous Workspace
"xdotool key --clearmodifiers super+shift+Page_Up"
   Control + b:10 + release

# Zoom in
"xdotool key ctrl+21"
   b:12

# Zoom out
"xdotool key ctrl+20"
   b:13
```

### What are these rules doing then?

Combined with my **mtrack** config above, and with assumption that default shortcuts in Ubuntu is unchanged, these `xbindkeys` will allow you:

- 4 finger **swipe up**: switch to next workspace
- 4 finger **swipe down**: switch to previous workspace
- While holding **ctrl**, 4 finger **swipe up**: Move active window to next workspace
- While holding **ctrl**, 4 finger **swipe down**: Move active window to previous workspace
- Pinch scaling down (move 2 fingers closer): trigger **ctrl** and **-** combination, which is zoom out in browsers and reduce font size in some apps
- Pinch scaling up (move 2 fingers away): trigger **ctrl** and **=** combination, which is zoom in in browsers and enlarge font size in some apps

I haven't found a use case for rotating gesture (button 14 & 15) so I currently disabled them.

Finally, don't forget to add this command `/usr/bin/xbindkeys_autostart` to **Startup Applications** so that it is automatically started at reboot.

## Final words

That's my whole setup for multi-touch touchpad and it has made my life on Linux a lot easier! However, this may just be temporary since `libinput` and Wayland are already chosen to be the future and they are actively developed. I will revisit `libinput` once it get better multi-touch support and more configurations, but `mtrack` is the way to go, for now.

---
[^1]: Here's a brief touchpad driver 101: There are three known drivers for laptop touchpad on Linux, i.e. **synaptics** (discontinued), **libinput** and **mtrack**. For latest Ubuntu and other popular distros, libinput is the chosen driver because it has decent multi touch support (and being improved) and most importantly, it supports [Wayland](https://en.wikipedia.org/wiki/Wayland_(display_server_protocol)) environment. There are few flaws with current libinput driver though, for example: I cannot adjust the sensitive of scroll with two fingers, I cannot disable tap-and-drag easily (some manual commands involved), I cannot drag with three fingers...

[^2]: The `~/` sign means this file is stored at current user's home folder.

[^3]: These tools also require Xorg.

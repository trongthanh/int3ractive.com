---
layout: post
title: Common Linux / macOS commands that I took notes through the years
subtitle: You should care if you're a full stack developer
author: Thanh Tran
description:
date: 2019-01-17T14:02:33+07:00
tags: [devops, linux, cli, terminal]
image:
---

This will be a living reference blog post that I'll keep updating.

When I started my software engineering career, I was fully immerged with GUI and mouse pointers by the OS and the tooling I used. With irritation at first, I had to self-taught my terminal skills because some of the tasks demanded. However, the more I advanced in my career, the more I see how powerful and convenient CLI can be. Through the years, I had to look up every command that is needed by my job, as a coder, writer, devops and even as casual user, and kept the command usage in a long note. I'm copying and organizing them here for my own reference as well as may it be useful for other peeps.

Sure you can look up commands in cheat sheets or Google up, but these are the commands I had the need to use as a developer so they may be relevant to other programmers and as a guide to terminal dummies.

> I'm composing below snippets and headings following [devhints.io](https://devhints.io) markdown structure with intention that this may be re-deployed in that format later.

**Note:** these commands use Bash and compatible shell (ZSH, fish), which are available as default in Linux and macOS.

## Navigate file systems

### List folder content:

```sh
# list content of current folder
ls
# list content (event hidden files) of current folder
ls -a
# list content of current folder with extra metadata columns
ls -l
```

### Change directory (a.k.a cd):

```sh
# go to a folder with absolute path (start with /)
cd /home/user/documents
# go to a child folder from current folder (./ optional)
cd work/projects/client
# go to parent folder
cd ..
```

### Find files via name:

#### Find files with name in current directory and its children:

```sh
find . -type f -name "postgis-2.0.0”
```

Type: `f` (file); `d` (directory)

#### Find all files in a folder with pattern and execute command on it

```sh
find . -name '*.js' -exec [command] '{}' \;
```

Note:
`{}` is the path to the file of each loop entry
`\;` is the terminate character

Example: `find . -name '*.js' -exec jscodeshift -t /Users/thanh/work/projects/goalify/tools/relay-codemod-master/transforms/migrate-to-modern-1.0.js '{}' \;`

#### Find and remove all `node_modules` folder recursively

Dry run:

```sh
find . -name "node_modules" -type d -exec echo "{}" +
```

Do it:

```sh
find . -name "node_modules" -type d -exec rm -rf '{}' +
```

### Working with file owner and permission

```sh
# Change permission of a file using octal number
chmod 600 key.pem
#
chmod u+x key.pem
# Change permission of a file using u-g-o notation
chmod u+x key.pem

```

Note: add `sudo` if needed.

### Viewing files content:

```sh
# print content of a whole file
cat file.txt

# print only the last 20 lines of a text file
tail -n 20 errors.log
```

## Get server / machine info

### Monitor system resource and workload with `top` command:

```sh
top
```

### To sort and configure `top` command

#### In Linux:

- Capital `P` sort by CPU
- Capital `M` sort by Mem
- `c` to toggle full command path
- `e` to switch memory unit
- `m` to switch memory total display

#### In macOS:

- Type `o`, then key in `cpu` to sort by CPU
- Type `o`, then key in `mem` to sort by Memory

## Working with remote servers

### Connect to remote server shell via SSH:

```sh
# Connect via provided username and password
ssh username@hostdomain.com
# Connect via secret *.pem key
ssh username@hostdomain.com -i /path/to/key.pem
```
Note: `key.pem` must have permission octal less than or equal 600

### Check which distro & distro version

```sh
# try either
uname -r
lsb_release -a
```

#### For CentOS only:

```sh
rpm --query centos-release
```

### Copying from and to remote server with `scp`

#### Copy the file "foobar.tgz" from the remote host to current dir in local host

```sh
scp remote-host:/home/user/foobar.tgz ./
```

`remote-host` is a pre-configured host name in `~/.ssh/config`

#### Copy the file "foobar.tgz" from the local host to a remote host

```sh
scp -i key_file.pem foobar.tgz remote-host:/some/remote/directory
```

#### Copy whole directory from the local host to a remote host

```sh
scp -r uploads/ remote-host:/some/remote/directory
```

Result will be new folder copied to `/some/remote/directory/uploads` at remote.

## Miscellaneous

### Generate SSH key

```sh
ssh-keygen -t rsa -C "your_email@example.com"
```

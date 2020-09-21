---
title: Downloading Tech Ed Australia Content
date: '2010-09-06'
description: 'Downloading Tech Ed Australia Content'
thumbnail: ../../images/blogging.jpg
---

So its Tech Ed time again, this time [Tech Ed Australia](http://australia.msteched.com/) held on the Gold Coast. Over the past couple of days the team have been encoding and uploading the session videos and slides. You can access much of this information from [Tech Ed Online](http://www.msteched.com/australia), but as per my previous post [Downloading Tech Ed Content](https://cookycodes.com/downloading-tech-ed-content/), I have put together a couple of scripts to save you having to right click the file types you want to download (video / PowerPoint slides) and _Save Target As_.

There are two scripts you will need, the first is a downloader script which takes a single parameter to indicate the file type you want to download. These include:

- WMV
- WMVHIGH
- MP4
- PPTX.

The second script is a renamer which also takes the same parameter as the downloader and this will rename the files from the session id to the session title (e.g. ‘DEV362.wmv’ becomes ‘Unit Testing with Visual Studio 2010 and Team Foundation Server(DEV362).wmv’).

The scripts are called ‘TechEdRenamer.txt’ and ‘TechEdDownloader.txt’ and can be downloaded from from my [SkyDrive](http://cid-090d535e56bed79c.office.live.com/browse.aspx/.Public/Tech%20Ed%20Aus%202010). Simply rename to .bat files and follow the instructions in the previous post regarding getting [curl]("http://curl.haxx.se/download.html) etc.

**Note**: At the time of posting, not all of the sessions were yet available, but if you check back over the next couple of days you should see them all appear.

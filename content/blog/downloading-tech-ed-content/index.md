---
title: Downloading Tech Ed Content
date: '2010-06-16'
description: 'Downloading Tech Ed Content'
thumbnail: ../../images/blogging.jpg
---

Last Week Tech Ed North America was held in New Orleans and if like me you were not able to attend, you can view most of the sessions and get access to most of the slide decks through [Microsoft Tech Ed Online](http://www.msteched.com/). Rather than right click and save each of the sessions and slides you can download all of the content using the following method: (Note: Thanks to [Scott Dorman](http://geekswithblogs.net/sdorman/archive/2009/11/26/downloading-pdc-2009-content.aspx) and his PDC09 download script and instructions).

- Get the latest build of [curl](http://curl.haxx.se/download.html) and extract into a folder.
- Download the script [TechEdDownloader-Dev](http://cid-090d535e56bed79c.office.live.com/self.aspx/.Public/TechEdDownloader-Dev.zip) and extract the .bat file into the same folder as above.
- Run the downloader batch file from a command prompt. This takes a single parameter which indicates the file you want to download. This can be:
  - WMVHIGH
  - WMV
  - MP4
  - PPTX
- Download [TechEdRenamer-Dev](http://cid-090d535e56bed79c.office.live.com/self.aspx/.Public/TechEdRenamer-Dev.zip) and extract the .bat file to the same folder as the downloaded content.
- Run the renamer batch file from a command prompt to rename the files to the session title. This batch file also accepts a single parameter as above.

Note the downloader and renamer are currently just for the Developer Tools, Languages &amp; Frameworks stream. Check back for downloader and renamer batch files for the other streams.

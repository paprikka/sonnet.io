---
title: 'TODO Chrome blocking source-view'
date: 2021-03-28
heroURL: /images/hero/code-sober-debug-drunk-hero.png
thumbnail: /images/hero/code-sober-debug-drunk-hero-social.jpg
hidden: true
description: 'Practical snapshot testing tips'
---

## TODO

-   changes in chrome normalise changes that cause the slow erosion of the web platform
-   impact on the development practices (security, quality)
-   learning (by reading and hacking the code)
-   web vs. closed, walled gardens
-   "hacking HTML" and "stealing" SSNs in the US (poor guy)
-   how should we act when we see changes like this?

Today Chrome launched an update allowing enterprise users block the View Source functionality.

A bunch of people got really, really angry. Good.

[insert tweet]

The "it's just an enterprise policy, duh" argument seems to be missing an important point.

Off the top of my head I can think of three reasons why this is just a little bit fucked up:

\## Security:

This isn't more than patching a design issue, and normalising poor security practices in already terrible enterprise software.

Here's what probably happened (1000s of times): a smart kid managed to hack their exam answers by checking the browser code, someone got mad. If you ever worked on any internal tooling in a bank, this might sound a little bit familiar. You might, like me, think that banks or middle school are not that much different from each other, in terms of the IT infrastructure, or the general mentality.

Dropping view-source from Chrome seems like a seemingly small change (again, duh, it's enterprise only), but small changes like this pile up, have consequences. Slowly, but surely they change our idea of what the web is. And what is the web? It's an open platform. When you download a site, you download an open document. You can inspect it, you can, at least to a certan extent, verify what the code executed on your computer is doing. That is one of the reasons that websites are superior to apps in terms of privacy (excluding Chrome). That is one of the reasons so many products try to push you to use a native app instead of the web version.

Browsers are user agents. User agents act on behalf of the user. It's as simple as that. Some users might prefer to access the web without javascript or customise their browsing experience by using extensions. finally, most of us can benefit from not being tracked, and treated a commodity. This is where Google might disagree with you, but that's ok-you can always use a different browser. Sort of.

Finally, how many of you have learned programming by hacking the existing code?

We don't work in vacuum. The same engineer might work on a shitty piece of internal software in their bank, and then end up working on a project served using non-enterprise browsers.Yes, people are not mindless robots, yes people think and generally try to do their best. But, jobs change, habits are likely to remain.

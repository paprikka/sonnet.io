---
title: Design Verbs, Not Nouns
date: 2018-03-21
---

I’ve spent the past 10+ years [helping businesses](https://uk.linkedin.com/in/rafalpast) to move towards digital & mobile.

Recently, I made an app called [Façade](http://facade.photo/), it makes rainbows.

I love [photography](https://www.instagram.com/rafalpast/).


## A subheader would go here

I write, sometimes,
and speak [Persian in my sleep](https://twitter.com/rafalpast). 

There's not much here in the sample post page. Better get to work.


## An example list

Recently, I made an app called [Façade](http://facade.photo/), it makes rainbows.


1. The common front-matter 
2. data for all of the files in the posts
3. section are abstracted into a

The common front-matter data for all of the files in the posts section are abstracted into a `posts.json` file so that we don't need to repeat that on every file. Handy.

![Luna](/images/luna.jpg)


## An example list

Recently, I made an app called [Façade](http://facade.photo/), it makes rainbows.


- The common front-matter 
- data for all of the files in the posts
- section are abstracted into a


It looks like this:

```js
{
  "layout" : "layouts/post.md",
  "tags" : "post",
  "templateEngineOverride": "njk,md"
}
```



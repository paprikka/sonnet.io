---
title: Hej!
layout: layouts/intro.md
---

I’ve spent the past 10+ years helping businesses to move towards digital & mobile.

Recently, I made an app called Façade, it makes rainbows.

I love photography.

I write, sometimes,
and speak Persian in my sleep. 


## Recent Posts

<ul class="listing">
{%- for page in collections.post -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>



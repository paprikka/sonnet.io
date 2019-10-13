---
title: Hej!
layout: layouts/intro.md
---

<p class="intro">
I’ve spent the past 10+ years helping businesses to move towards digital & mobile.
<br>
<br>
Recently, I made an app called Façade, it makes rainbows.
<br>
<br>
I love photography.
<br>
<br>
I write, sometimes,
and speak Persian in my sleep. 
</p>

## Blog

<ul class="listing">
{%- for page in collections.post -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a>
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>



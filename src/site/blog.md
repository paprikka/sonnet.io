---
title: Blog
layout: layouts/intro.md
---

<ul class="listing listing--big">
{%- for page in collections.post -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a>
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>



---
title: Rafał Pastuszak.
subtitle: /‘rafau pastoohshak/
layout: layouts/base.njk
---


## Recent Posts

<ul class="listing">
{%- for page in collections.post -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>



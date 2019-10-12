---
layout: layouts/base.njk
pageClass: posts
templateEngineOverride: njk, md
---

<article class="article">
  <header>
    <time datetime="{{ date }}">{{ date | dateDisplay }}</time>
    <h1 class='title'>{{ title }}</h1>
        {%- if subtitle %}
          <p class="subtitle">{{ subtitle | safe }}</p>
        {% endif %}
  </header>
  {{ content | safe }}
</article>
<aside class="footnote">
  <p>
    This page is part of the posts section.
  </p>
</aside>

---
layout: layouts/base.njk
pageClass: posts
templateEngineOverride: njk, md
---

<main>
<article class="article">
  <header class="article__header">
    <time class='article__time' datetime="{{ date }}">{{ date | dateDisplay }}</time>
    <h1 class='article__title'>{{ title }}</h1>
        {%- if subtitle %}
          <p class="article__subtitle">{{ subtitle | safe }}</p>
        {% endif %}
  </header>
  <div class="article__content">
    {{ content | safe }}
  </div>
</article>
<aside class="footnote">
  <a href="/blog">Show more posts</a>
</aside>
</main>
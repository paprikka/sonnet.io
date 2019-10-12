---
layout: layouts/base.njk
pageClass: intro
templateEngineOverride: njk, md
---

<main>
<article class="article">
  <header class="article__header">
    <h1 class='article__title'>{{ title }}</h1>
        {%- if subtitle %}
          <p class="article__subtitle">{{ subtitle | safe }}</p>
        {% endif %}
  </header>
  <div class="article__content">
    {{ content | safe }}
  </div>
</article>

</main>
---
layout: layouts/base.njk
pageClass: intro
templateEngineOverride: njk, md
---

<main>
<article class="article">
  <header class="article__header">
    <h1 class='title'>{{ title }}</h1>
        {%- if subtitle %}
          <p class="subtitle">{{ subtitle | safe }}</p>
        {% endif %}
  </header>
  <div class="article__content">
    {{ content | safe }}
  </div>
</article>

</main>
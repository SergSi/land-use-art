---
title: Статьи
layout: info
permalink: /articles/
image_url: articles.png
---
<div>
  {% for post in site.posts %}
    {% if post.class == "article" %}
      {% include articles.html %}
    {% endif %}
  {% endfor %}
</div>
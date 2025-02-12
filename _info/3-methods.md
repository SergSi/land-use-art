---
title: Методы
layout: info
permalink: /methods/
image_url: articles.png
---
<div>
  {% for post in site.posts %}
    {% if post.class == "methods" %}
      {% include articles.html %}
    {% endif %}
  {% endfor %}
</div>
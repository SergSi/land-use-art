---
title: Примеры
layout: info
permalink: /expert/
image_url: articles.png
---
<div>
  {% for post in site.posts %}
    {% if post.class == "expert" %}
      {% include articles.html %}
    {% endif %}
  {% endfor %}
</div>
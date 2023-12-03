---
title: Статьи
subtitle: Статьи по теме проекта
layout: info
permalink: /articles/
image_url: articles.png
---
<div>   
  {% for doc in site.articles %}  
    {% include articles.html %}
  {% endfor %}
</div>

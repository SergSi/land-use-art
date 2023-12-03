---
title: Материалы проекта
subtitle: Материалы проекта
layout: info
permalink: /materials/   
image_url: books.png 
---

# Рабочие документы проекта

<div>   
  {% for doc in site.materials %}  
    {% include articles.html %}
  {% endfor %}
</div>

# Результаты проекта

<div>   
  {% for doc in site.results %}  
    {% include articles.html %}
  {% endfor %}
</div>
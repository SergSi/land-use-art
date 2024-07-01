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


 {% for doc in site.data.docs %}
 <div class="left gain-center">
  <a href="\assets\docs\{{ doc.file }}" target="_blank" class="link notall">
    <strong>{{ doc.title | upcase }}</strong>{% if doc.author %} / {{ doc.author }}{% endif %}
    {% if doc.subtitle %}<br>{{ doc.subtitle }}{% endif %}<br>
  </a><br> 
  </div>
  {% endfor %}
<br>
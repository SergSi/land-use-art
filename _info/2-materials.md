---
title: Нормативы
subtitle: Материалы проекта
layout: info
permalink: /materials/   
image_url: books.png 
---

 {% for doc in site.data.docs %}
 <div class="left gain-center">
  <a href="\assets\docs\{{ doc.file }}" target="_blank" class="link notall">
    <strong>{{ doc.title | upcase }}</strong>{% if doc.author %} / {{ doc.author }}{% endif %}
    {% if doc.subtitle %}<br>{{ doc.subtitle }}{% endif %}<br>
  </a><br> 
 </div>
  {% endfor %}
<br>
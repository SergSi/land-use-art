---
title: Материалы проекта
subtitle: Материалы проекта
layout: info
permalink: /materials/   
image_url: books.png 
---

<h1>Рабочие документы проекта</h1>

<div>
  {% for post in site.posts %}
    {% if post.type == "raw" %}
      {% include articles.html %}
    {% endif %}
  {% endfor %}
</div>

<h1 style="margin-top: -0.1rem;" >Результаты проекта</h1>


 {% for doc in site.data.docs %}
 <div class="left gain-center">
  <a href="\assets\docs\{{ doc.file }}" target="_blank" class="link notall">
    <strong>{{ doc.title | upcase }}</strong>{% if doc.author %} / {{ doc.author }}{% endif %}
    {% if doc.subtitle %}<br>{{ doc.subtitle }}{% endif %}<br>
  </a><br> 
 </div>
  {% endfor %}
<br>
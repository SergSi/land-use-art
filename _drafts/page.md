---
title: ""
subtitle: 
summary:
author: 
layout: doc
gallery:
  - image_url: example-1.jpg
    caption: Great images 
  - image_url: example-2.jpg
    caption: Great images 
  - image_url: example-3.jpg
    caption: Great images 
carousel:
  - image_url: example-1.jpg
    caption: Great images 
  - image_url: example-2.jpg
    caption: Great images 
image_url: example.jpg
caption: Пример подписи    
align: left 
align: right  
style: "p + p {
  text-indent: 0em;
}
p {
  margin-bottom: 0.5em;
}"              
---
{% include image-1.html 
file-1="article/Вынос в натуру.jpg" caption-1="Данные для выноса границ в натуру, полученные из реестра недвижимости" %}

{% include image-2.html 
file-1="2023-12-22/Планшет1.jpg" caption-1="Фрагмент ортофотплана с дешифрированными границами угодий" 
file-2="2023-12-22/Планшет2.jpg" caption-2="Фрагмент плана земель сельскохозяйственного предприятия" %}

{% include image-3.html 
file-1="a7.png" caption="Кадастровый квартал 30:04:060101" 
file-2="a8.png" file-3="a9.png"  %}

{% include image-align.html file="СадыНаРеке.jpg" caption="Рекламный щит у въезда на территорию" align="right" width="40%" %}

{% include mermaid.html content='
graph TD
        A[Земельный участок]--> B[Водный объект]
' caption="Название" number="1" %}

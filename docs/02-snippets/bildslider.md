---
sidebar_position: 6
---

# Snippet: ww_image-slider Exempel

En modulär bildslider som kan användas för kampanjer, gallerier eller storytelling-sektioner. Byggd för att vara flexibel, tillgänglig och lätt att anpassa.

## 🧠 Funktionalitet

- Loopar igenom ett antal slides (bild + text)
- Anpassningsbar: stöd för länk, CTA-knapp och alt-text
- Mobilanpassad (kan kombineras med swiper.js eller native scroll)

## ✅ Exempel på användning

```liquid
{% render 'ww_image-slider', slides: section.settings.slides %}
```

```json
{
  "type": "list",
  "name": "Slides",
  "settings": [
    {
      "type": "image_picker",
      "id": "image"
    },
    {
      "type": "text",
      "id": "alt_text"
    },
    {
      "type": "url",
      "id": "link"
    }
  ]
}
```

## Kodskiss

```html
<div class="image-slider">
  {% for slide in slides %}
    <a href="{{ slide.link | default: '#' }}" class="slide">
      <img src="{{ slide.image | img_url: '800x' }}" alt="{{ slide.alt_text }}">
    </a>
  {% endfor %}
</div>
```

## Anpassning
- Byt namn till t.ex. sm_image-slider när den laddas upp till ett kundprojekt.

- Kan kombineras med swiper.js för avancerade övergångar.

- Kan användas som block i en större sektion.
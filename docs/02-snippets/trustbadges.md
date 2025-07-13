---
sidebar_position: 3
---

# Snippet: Trustbadges

Ett enkelt snippet för att visa trygghetssymboler under köpknappen på produktsidan.

## Fil: `snippets/ww_trustbadges.liquid`

```liquid
<div class="flex gap-4 mt-4">
  <img src="{{ 'shipping.svg' | asset_url }}" alt="Fri frakt" class="h-6">
  <img src="{{ 'secure.svg' | asset_url }}" alt="Säker betalning" class="h-6">
</div>
```

## Användning

Lägg till detta i ```product.liquid``` eller ```main-product```-sektionen:

```text
{% render 'ww_trustbadges' %}
```

## Tips

- Ladda upp ikonerna under ```"Assets"```.

- Du kan lägga till fler symboler, eller göra det dynamiskt med ```settings```.


### Exempel: `03-komponenter/sektion-cta.md`

```markdown
# 📣 Sektion: CTA med bakgrund

En sektion som används för att visa en call-to-action med bakgrundsbild och knapp.

## 💾 Fil: `sections/ww_sektion-cta.liquid`

```liquid
{% schema %}
{
  "name": "CTA-sektion",
  "settings": [
    { "type": "text", "id": "title", "label": "Rubrik" },
    { "type": "text", "id": "button_text", "label": "Knapptext" }
  ],
  "presets": [{ "name": "CTA-sektion" }]
}
{% endschema %}

<section class="py-12 bg-primary text-white text-center">
  <h2>{{ section.settings.title }}</h2>
  <a href="#" class="btn">{{ section.settings.button_text }}</a>
</section>
```

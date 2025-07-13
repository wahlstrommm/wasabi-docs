---
sidebar_position: 1
---
## ww_button.liquid (exempel: reagerar på product.tags)

```html5
{% assign tag_style = '' %}
{% assign tag_text = '' %}

{% if product.tags contains 'Rea' %}
  {% assign tag_style = 'btn--sale' %}
  {% assign tag_text = 'REA' %}
{% elsif product.tags contains 'Nyhet' %}
  {% assign tag_style = 'btn--new' %}
  {% assign tag_text = 'Nyhet' %}
{% elsif product.tags contains 'Webb-exklusiv' %}
  {% assign tag_style = 'btn--web' %}
  {% assign tag_text = 'Endast online' %}
{% else %}
  {% assign tag_style = 'btn--default' %}
  {% assign tag_text = 'Läs mer' %}
{% endif %}

<a href="{{ product.url }}"
   class="btn {{ tag_style }}">
  {{ tag_text }}
</a>
```

## CSS-klasser

```css
.btn {
  @apply inline-block px-4 py-2 rounded font-semibold text-sm;
}

.btn--sale {
  @apply bg-red-600 text-white hover:bg-red-700;
}

.btn--new {
  @apply bg-green-600 text-white hover:bg-green-700;
}

.btn--web {
  @apply bg-blue-600 text-white hover:bg-blue-700;
}

.btn--default {
  @apply bg-gray-800 text-white hover:bg-gray-900;
}
```

## Exempel på användning i ```product-card.liquid```

```
<div class="product-card">
  <h2>{{ product.title }}</h2>
  {% render 'ww_button', product: product %}
</div>
```

## Annat exempel

- Döljer köpknappen om produkten är "Utgått"

- Visar annan knapp om produkten är "Kommer snart"

- Visar extra info om produkten är "Webb-exklusiv"

- Default: vanlig köpknapp

## Kodexempel – direkt på produktsidan (main-product.liquid eller liknande)

```
{% assign tags = product.tags %}

{% if tags contains 'Utgått' %}
  <p class="text-red-600 font-semibold mt-4">Denna produkt är inte längre tillgänglig.</p>

{% elsif tags contains 'Kommer snart' %}
  <p class="text-yellow-600 font-medium mt-4">Kommer snart – håll utkik!</p>
  <a href="/pages/nyheter" class="btn btn--soon">Se nyheter</a>

{% elsif tags contains 'Webb-exklusiv' %}
  <p class="text-sm text-gray-600 italic mt-2">Denna produkt finns endast online.</p>
  <form method="post" action="/cart/add">
    <input type="hidden" name="id" value="{{ product.variants.first.id }}">
    <button type="submit" class="btn btn--primary">Lägg i varukorg</button>
  </form>

{% else %}
  <form method="post" action="/cart/add">
    <input type="hidden" name="id" value="{{ product.variants.first.id }}">
    <button type="submit" class="btn btn--primary">Lägg i varukorg</button>
  </form>
{% endif %}
```

```css
.btn--primary {
  @apply bg-black text-white py-2 px-6 rounded hover:bg-gray-800;
}

.btn--soon {
  @apply bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600;
}
```

---
sidebar_position: 1
---

# Komponent: ww_button Exempel

En återanvändbar knappkomponent som används genom hela temat. Byggd för att kunna hantera olika varianter och storlekar med minimal markup.

## Funktionalitet

- Stöd för olika färgvarianter (primary, secondary, ghost)
- Stöd för olika storlekar (small, base, large)
- Kan användas som `<a>` eller `<button>`
- Tillgänglighetsanpassad

## Exempel på användning

```html
{% render 'ww_button', text: 'Lägg i varukorg', url: '/cart', style: 'primary' %}
```


| Namn 	| Typ 	| Beskrivning 	|
|---	|---	|---	|
| ```text``` 	| String 	| Knappens text 	|
| ```url``` 	| String 	| Länk (används som ```<a>```) 	|
| ```style``` 	| String 	| Variant: ```primary```, ```secondary```, ```ghost``` 	|
| size 	| String 	| Storlek: ```small```, ```base```, ```large``` 	|
| target 	| String 	| Länkens mål (t.ex. ```_blank```) 	|

## Kodskiss

```javascript
{% assign tag = url != blank and url != '#' ? 'a' : 'button' %}

<{{ tag }}
  class="btn btn--{{ style | default: 'primary' }} btn--{{ size | default: 'base' }}"
  {% if tag == 'a' %}href="{{ url }}"{% endif %}
  {% if target %}target="{{ target }}"{% endif %}
>
  {{ text }}
</{{ tag }}>
```

## CSS-klasser (exempel)

```css
.btn {
  @apply inline-flex items-center justify-center font-medium rounded-full px-4 py-2;
}

.btn--primary {
  @apply bg-black text-white hover:bg-gray-800;
}

.btn--secondary {
  @apply border border-black text-black hover:bg-gray-100;
}

.btn--ghost {
  @apply text-black hover:underline;
}

.btn--small {
  @apply text-sm py-1 px-3;
}

.btn--large {
  @apply text-lg py-3 px-6;
}
```

## Tips

- Placera alltid knappen i en komponentfil, inte inline.

- Om du använder externa länkar – glöm inte ```rel="noopener"``` med ```target="_blank"```.

- Använd gärna Tailwind utilities för att anpassa vidare.
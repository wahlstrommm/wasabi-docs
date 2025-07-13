# Namnkonventioner

För att hålla våra Shopify-projekt enhetliga och skalbara följer vi en tydlig namngivningsstrategi – både internt och kundspecifikt.

## Prefixstruktur

Vi använder prefix för att särskilja moduler, komponenter och undvika konflikter med temans inbyggda filer.

### Internt (under utveckling)

Använd alltid `ww_` som prefix när du bygger moduler/snippets för återanvändning eller under utveckling.

**Exempel:**

```text
ww_product-slider.liquid
ww_button-primary.liquid
```

```text
snippets/
├── _base/         → Layout-komponenter (t.ex. grid, button)
├── components/    → UI-komponenter (t.ex. badge, rating)
├── sections/      → Fullständiga sektioner (t.ex. hero-banner)
├── product/       → Produktrelaterade snippets
├── utils/         → Hjälpfunktioner eller inline-logik
```

## Kundspecifik implementation

När modulen laddas upp till ett kundprojekt ersätts ww_ med kundens initialer, t.ex. sm_ för "Svenska Möbler":

```text
sm_product-slider.liquid
sm_button-primary.liquid
```

### Format

  -  Använd alltid kebab-case

  -  Separera med _ där det behövs extra läsbarhet

  -  Undvik mellanslag, camelCase eller stora bokstäver

### Exempel:

- ✅ ww_trust-badge.liquid
- ✅ sm_custom_shipping-timer.liquid
- ❌ TrustBadge.liquid
- ❌ customSnippet.liquid
---
### Filtyper och roller
| Typ 	| Prefix 	| Beskrivning 	|
|---	|---	|---	|
| Snippets 	| ```ww_``` 	| Återanvändbar komponent eller modul 	|
| Kundversion 	| ```sm_```,```mb_```, osv. 	| Slutversion för produktion 	|
| Sections 	| ```ww_``` 	| Sektion med schema 	|
| Utils/helpers 	| ```ww_util_``` 	| Små hjälpfunktioner/snippets 	|


 ### Tips

- Kommentera alltid i filen vad den gör om det inte är uppenbart.

- Prefix hjälper till att undvika konflikter med temans originalsnippets.

- Kör en sök/byt-rutin inför leverans till kund.

## Filnamn

- Använd alltid kebab-case (små bokstäver + bindestreck)

- Namnet ska beskriva funktionen tydligt

- Undvik prefix som "shopify-" eller "custom-"
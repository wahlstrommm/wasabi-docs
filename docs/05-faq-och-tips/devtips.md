---
sidebar_position: 6
---

Här är en färdig version av `devtips.md` för din mapp `05-faq-och-tips/`, med konkreta tips för utveckling i Shopify – anpassat till hur ni på Wasabi Web arbetar med modulärt tema, snippets och struktur.

---

## 📄 `05-faq-och-tips/devtips.md`

# Utvecklartips

Här har vi samlat användbara tips, verktyg och arbetssätt som förenklar utvecklingen i Shopify och hjälper dig jobba snabbare, mer konsekvent och med färre buggar.

---

## 1. Använd prefix i alla snippets

För att undvika konflikter mellan teman, sektioner och appar:

<pre> ```liquid {% render 'ww_button' %} ``` </pre>

> Använd alltid `ww_` för globala komponenter. Vid kundanpassning, använd kundinitialer, t.ex. `sm_custom-slider`.

---

## 2. Felsökning via Theme Inspector

Installera [Shopify Theme Inspector for Chrome](https://shopify.dev/docs/themes/tools/theme-inspector) för att analysera prestanda och renderingsproblem i Liquid.

---

## 3. Kommentera alltid större komponenter

Inled alla sektioner och större snippets med en tydlig kommentar:

```liquid
{%- comment -%}
Sektion: CTA med bild
Beskrivning: Används för kampanjer med rubrik och knapp.
{%- endcomment -%}
```

---

## 4. Tailwind + Liquid: Undvik dynamiska klasser

Tailwind purgar bort oanvända klasser vid build – vilket kan orsaka att vissa stilar inte fungerar:

❌ Dåligt exempel:

```liquid
class="text-{{ section.settings.color }}"
```

✅ Bra exempel:

```liquid
{% if section.settings.color == 'red' %}
  class="text-red-500"
{% endif %}
```

---

## 5. Skapa modulära komponenter

Bygg alltid komponenter som är fristående och återanvändbara. Undvik hårdkodad layout i sektioner – låt dem byggas upp av snippets:

```liquid
{% render 'ww_button', text: 'Läs mer', url: '/om-oss' %}
```

---

## 6. Använd Git brancher för featureutveckling

Exempel:

```
git checkout -b feat/cta-sektion
```

När du är klar:

```
git add .
git commit -m "feat: ny CTA-sektion"
git push origin feat/cta-sektion
```

---

## 7. Testa sektioner lokalt i ett tomt tema

Skapa ett isolerat tema med bara en layout, en sektion och din komponent. Perfekt för test & utveckling innan merge mot ett kundprojekt.

---

## 8. Paketera smart

Samla dina snippets i en gemensam `snippets/`-mapp. Undvik duplicering – skapa generiska komponenter som kan anpassas med `params`.

---

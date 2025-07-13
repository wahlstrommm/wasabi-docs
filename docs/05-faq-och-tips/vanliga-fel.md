---
sidebar_position: 1
---

# Vanliga fel och problem

En samling av återkommande problem och buggar som dyker upp i Shopify-teman eller i arbetet med snippets/komponenter. Här hittar du orsaker och hur du snabbt löser dem.

---

## ❌ Snippet renderas inte

**Problem**: Du lägger till `{% render 'ww_trustbadges' %}` men inget visas.

**Orsak**: Snippet-filen `ww_trustbadges.liquid` finns inte i `snippets/`.

**Lösning**:
- Kontrollera stavningen på filnamnet.
- Dubbelkolla att du deployat rätt.
- Inkludera via `render` istället för `include` i Shopify 2.0.

---

## ❌ Theme Editor kraschar vid sektion

**Problem**: En sektion visas inte eller kraschar Theme Editor.

**Orsak**: Felaktig JSON i `{% schema %}`.

**Lösning**:
- Testa JSON i [https://jsonlint.com](https://jsonlint.com)
- Glöm inte kommatecken mellan objekt
- Se till att alla `id`-värden är unika

---

## ❌ Bilder laddas inte

**Problem**: Bilder syns inte på sidan trots korrekt kod.

**Orsak**: Bilden är inte uppladdad i Shopify > Filer eller Assets.

**Lösning**:
- Använd `{{ 'bild.jpg' | asset_url }}` för Assets
- Eller `{{ 'bild.jpg' | file_url }}` för uppladdade filer

---

## ❌ Klass ändrar inte utseende

**Problem**: Du lägger till en Tailwind-klass men inget händer.

**Orsak**: Tailwind bygger bara in klasser som används i temakoden.

**Lösning**:
- Se till att din klass inte är dynamiskt genererad (ex: `text-{{ color }}`)
- Använd `safelist` i `tailwind.config.js` om klasser skapas dynamiskt

---

## ❌ Produktvariant ändras inte

**Problem**: När man väljer en ny variant på produktsidan ändras inte bilden eller priset.

**Orsak**: JavaScript för variantlogik saknas eller är buggig.

**Lösning**:
- Kontrollera att `product-form.js` är inkluderad
- Se till att `<variant-selects>` är korrekt uppsatt
- Använd Shopify’s `product.js` som grund

---

## ✅ Tips

- Kör alltid **kodvalidering** innan deploy.
- Använd `console.log()` ofta vid JavaScript-felsökning.
- Spara denna sida som referens vid support eller onboardings.

---

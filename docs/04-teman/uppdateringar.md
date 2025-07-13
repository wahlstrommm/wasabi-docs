---
sidebar_position: 6
---

# Temauppdateringar

Den här sidan fungerar som changelog för vårt Base Theme. Används av utvecklare, projektledare och redaktörer för att hålla koll på förbättringar, nya sektioner och viktiga ändringar över tid.

---

## 📌 Version 1.4.0 – 2025-06-28

- ✅ Ny sektion: `sektion-product-features.liquid`
- ✅ Uppdaterad `ww_button.liquid` med stöd för `target`- och `rel`-attribut
- ✅ `footer.liquid` omskriven med bättre semantik (t.ex. `<nav>`, `<ul>`)
- ✅ Alla ikoner flyttade till `snippets/icon.liquid` med parameterstyrning
- ✅ Tailwind uppdaterat till v3.4.1

---

## 📌 Version 1.3.0 – 2025-05-10

- ✨ Infört komponent-prefix: `ww_` istället för generiska namn
- ✨ Strukturändring: JS uppdelat i moduler (`cart.js`, `nav.js`, `modal.js`)
- ✨ `settings_schema.json` har nu `meta.title`-fält för enklare SEO
- ✨ Implementerat fallback för WebP → JPG i bildkomponenten

---

## 📌 Version 1.2.1 – 2025-04-18

- 🐛 Fix: Produktvarianter laddades inte korrekt i Chrome
- 🐛 Pris i `product-card` visas nu korrekt även utan jämförpris
- 🐛 Sammanfattande markuprensning i `collection.liquid`

---

## 📌 Version 1.2.0 – 2025-03-30

- ✨ Ny sektion: `sektion-cta.liquid` med färgval via Theme Editor
- ✨ Ny logik: Sektioner döljs om data saknas
- ✨ Optimering: JS-minifiering förbättrad, bundle reducerad med ~22%
- ✨ System-fontstack fallback tillagd för bättre prestanda

---

## 📌 Version 1.1.0 – 2025-02-12

- ✅ Initial version av `base-theme` satt som standard för nya projekt
- ✅ Innehåller startsida, sektioner, snippets, och grundstruktur
- ✅ Förberett för prefixering och isolerade kundanpassningar

---

## Riktlinjer

- Alla Base Theme-uppdateringar dokumenteras här.
- Versionering följer semver: `major.minor.patch`.
- Vid större ändringar, se till att även uppdatera kundprojekt enligt [rekommendationer.md](./rekommendationer.md).

---


---
sidebar_position: 1
---

# Grundtemat (Base Theme)

Vårt grundtema fungerar som en utgångspunkt för alla Shopify-projekt och är byggt med fokus på prestanda, skalbarhet och modulär kodstruktur. Det innehåller standardiserade komponenter, verktyg och konfigurationer som underlättar för både utveckling och underhåll.

---

## Syfte

- Skapa ett enhetligt kodramverk för alla kunder.
- Underlätta onboarding av nya utvecklare.
- Minimera dubbelarbete mellan projekt.
- Säkerställa framtidssäkra uppdateringar.

---

## Innehåll i temat

| Fil / Mapp               | Beskrivning                                                 |
|--------------------------|-------------------------------------------------------------|
| `sections/`              | Alla modulära sektioner (CTA, Hero, Banner etc.)            |
| `snippets/`              | Återanvändbara komponenter (knapp, ikon, badge etc.)        |
| `config/settings_schema.json` | Inställningar till Shopify Theme Editor                |
| `assets/`                | CSS, JS och media. Använder Tailwind och modulär JS.        |
| `templates/`             | Sidmallar: produktsida, samlingar, startsida osv.           |
| `layout/` *(om finns)*   | Gemensamma komponenter för sidhuvud, footer etc.            |

---

## Teknikstack

- **Tailwind CSS** – utility-first för snabb UI-utveckling.
- **ESBuild / Shopify CLI** – för lokal utveckling och kompilering.
- **Liquid** – Shopify’s template-språk.
- **Modulär struktur** – alla sektioner/snippets hålls isolerade.

---

## Versionshantering

Alla större uppdateringar i base-theme dokumenteras i `uppdateringar.md`. Ändringar görs i separata grenar och merge:as in i master/production med PR och kodgranskning.

---

## Testmiljö

Alla ändringar testas på ett staging-tema via CLI eller GitHub Actions (om aktiverat).

---

## Rekommendation

Utgå alltid från senaste versionen av Base Theme när du startar ett nytt kundprojekt. Klona aldrig gamla teman direkt – det riskerar att dra med legacy-problem.

---

Vill du att jag fortsätter med `uppdateringar.md`?  

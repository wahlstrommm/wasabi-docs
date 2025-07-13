---
sidebar_position: 0
---

# Välkommen till Wasabis Shopify-dokumentation

Det här är din snabbstart för att förstå hur vi på **Wasabi Web** arbetar med modulära Shopify-teman, komponenter och snippets. Dokumentationen är byggd i Docusaurus och är till för både utvecklare och projektledare.

---

## Kom igång på 5 minuter

Vill du snabbt förstå hur strukturen fungerar?

Börja här:

1. 👉 [00-kom-igang/intro.md](../docs/category/kom-igång) – Översikt
2. 👉 [01-struktur/filstruktur.md](../docs/struktur/filstruktur) – Hur vi organiserar teman
3. 👉 [02-snippets/](../docs/category/snippets) – Återanvändbara kodblock
4. 👉 [03-komponenter/](../docs/category/komponenter) – Sektioner och UI-komponenter

## Vad innehåller dokumentationen?

- ✅ Standardstruktur för teman & sektioner
- ✅ Namnkonventioner & versionshantering
- ✅ Snippets & komponentbibliotek
- ✅ Rekommendationer för uppdatering & support
- ✅ Vanliga fel & devtips
- ✅ Länkar till externa resurser och guider

---

## Dokumentationsstruktur

### `00-kom-igang/`
Startpunkten för nya projekt. Setup, dev-flow och rekommendationer.

### `01-struktur/`
Hur vi organiserar kodbasen: mappar, konventioner och Git-strategi.

### `02-snippets/`
Återanvändbara kodblock som kan importeras i vilket projekt som helst. Exempel:
- `bildslider.md`
- `trustbadges.md`
- `produktkort.md`

### `03-komponenter/`

Modulära sektioner, knappar, banners och CTA-block. Byggda för att vara flexibla.

### `04-teman/`

Wasabis grundtema, rekommenderade appar, och riktlinjer för uppdateringar.

### `05-faq-och-tips/`

Vanliga fel, praktiska utvecklartips och externa resurser.

---

## Bra att veta

- **Snippets** ska alltid ha prefix som `ww_` eller kundinitialer (`sm_`, `kl_` etc.).
- Koden är **modulärt uppbyggd** så att du enkelt kan återanvända sektioner i flera projekt.
- Vi använder **Git** men undviker Shopify CLI – deploy sker via GitHub → Shopify Admin.

---

## Redigera dokumentationen

All dokumentation skrivs i **Markdown** i `docs/`-mappen.

Vill du redigera denna sida?

> Fil: `docs/intro.md`

---

## Frågor eller feedback?

Skicka feedback till tech-teamet eller skapa en issue i GitHub-repot:

[github.com/wahlstrommm/wasabi-docs](https://github.com/wahlstrommm/wasabi-docs)

Let’s go 🚀
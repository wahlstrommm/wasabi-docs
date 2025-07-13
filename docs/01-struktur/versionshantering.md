# Versionshantering

Vi arbetar strukturerat med Git för att hålla koll på förändringar i både kod och dokumentation – och för att möjliggöra smidiga uppdateringar till kundprojekt.

## Repostruktur

Varje kundprojekt har ett eget repo, men vi utgår från ett gemensamt **basrepo** för komponenter och struktur:

- `wasabiweb/shopify-base-theme` (innehåller snippets, struktur, config)
- `kundnamn/shopify-theme` (utgår från basrepo, med egen branding och anpassning)

## Uppdateringar från basrepo

När basrepon uppdateras (t.ex. med ny modul):

1. Mergas ändringar till kundprojekt via PR eller patch
2. Prefix uppdateras från `ww_` → `sm_` eller motsvarande
3. Test och deploy till kundmiljö

> Tips: Håll basrepon ren från kundspecifik kod – den ska vara så neutral och återanvändbar som möjligt.

## Branch-struktur

```text
main        → produktionsklar kod
develop     → aktiv utveckling
feature/x   → enskilda features eller snippets
```

## Arbetsflöde

- Skapa feature/-branch

- Lägg till eller uppdatera snippet

- Testa lokalt

- Skapa PR → develop

- Efter godkännande: merge till main

## Extern modul-mappning

Vi rekommenderar att du loggar vilka snippets som finns i varje projekt – t.ex. i en ```modules.json``` eller via GitHub projects.

```json
{
  "ww_trust-badge": "1.2.0",
  "ww_product-slider": "2.0.1"
}
```

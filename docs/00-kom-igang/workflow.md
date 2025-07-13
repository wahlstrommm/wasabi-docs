---
sidebar_position: 3
---

# Arbetsflöde

Så här arbetar vi med våra Shopify-projekt för att säkerställa hög kvalitet, återanvändbarhet och enkel uppdatering över tid.

## 1. Skapa ny modul/snippet

- Skapa en ny fil i relevant mapp (`snippets/`, `sections/`, `components/`)
- Döp filen enligt våra [namnkonventioner](../01-struktur/namnkonventioner.md)
- Lägg till Liquid-kommentarer om det behövs för förklaring

```liquid
{% comment %}
  Visar produktens betyg som stjärnor
{% endcomment %}
```

2. Testa lokalt

   - Använd en kodeditor för att ändra för att sen ladda upp för att förändringar

   - Testa både desktop och mobil

   - Säkra att inga globala CSS-klasser bryts

3. Dokumentera

Lägg till en ny ```.md```-fil i ```docs/snippets/``` eller ```docs/komponenter/```:

```liquid
# Komponentnamn

Beskrivning, användning och kodexempel.

```

4. Skapa PR (Pull Request)

   - Skriv en tydlig titel

   - Beskriv vad som är nytt och varför

   - Be minst en kollega om granskning

5. Deploy & merge

När ändringar är godkända:

   - Mergas till main

   - Publiceras till aktuell butik eller tema

---

Checklista innan merge

 - Följer kodstruktur och konventioner

 - Dokumentation är uppdaterad

 - Snippet/modul fungerar i relevant tema
# Rekommendationer för temauppdateringar

Som webbyrå ansvarar vi för att våra kunders teman hålls uppdaterade och följer vår gemensamma kodstandard (base-theme). Här beskriver vi processen för hur vi gör temauppdateringar manuellt, utan Shopify CLI.

---

## När bör ett tema uppdateras?

- När Base Theme fått viktiga förbättringar, nya sektioner eller buggfixar.
- Vid behov av ny funktionalitet i ett projekt (exempelvis ny CTA eller knappkomponent).
- När Shopify introducerar nya krav (t.ex. GDPR-funktioner, app blocks, schema-ändringar).
- Vid större frontendförbättringar, exempelvis Tailwind-uppdateringar eller tillgänglighetsförbättringar.

---

## Steg för att uppdatera ett kundprojekt (utan CLI)

1. **Ladda ned den senaste Base Theme-versionen**
   - Hämta från vårt interna Git-repo eller gemensam zip-mapp (t.ex. från GitHub, Google Drive eller liknande).
   - Se till att du får rätt version – jämför med `uppdateringar.md`.

2. **Jämför skillnader**
   - Identifiera vilka sektioner/snippets som har uppdaterats (t.ex. `ww_button`, `sektion-cta`, `theme.liquid`, etc).
   - Använd Git diff, VSCode eller en filjämförelsetjänst (t.ex. diffchecker.com).

3. **Exportera ett staging-tema från kundens butik**
   - Gå till Shopify Admin → "Teman" → Klicka "•••" → "Duplicera".
   - Döp temat till t.ex. `kundnamn - staging`.

4. **Ladda upp ändrade filer**
   - Öppna staging-temat i Shopify Theme Editor (via Admin).
   - Klistra in uppdaterade Liquid-filer från Base Theme (manuellt eller via zip).
   - Lägg bara till det som behövs – skriv **inte över hela teman**.

5. **Testa noggrant**
   - Kontrollera att inget brutits (t.ex. layout, inställningar, anpassade sektioner).
   - Verifiera att Theme Editor fortfarande fungerar (om du uppdaterat `settings_schema.json`).
   - Jämför med live-temat visuellt.

6. **Dokumentera vad du gjort**
   - Skriv en rad i projektets changelog eller Notion:
     > "2025-07-13 – Uppdaterat `ww_button`, `sektion-cta`, och Tailwind-klasser till v1.4.0"

7. **Publicera (efter godkännande)**
   - När ni och kunden är nöjda → Publicera staging-temat.
   - Ta backup på föregående version innan.

---

## Tips

- Lägg alltid till nya sektioner/snippets istället för att skriva över befintliga.
- Använd prefix för kundunika komponenter: `sm_custom-hero.liquid`, `ab_section-quote.liquid`, etc.
- Håll Base Theme så intakt som möjligt – håll anpassningar isolerade.
- Kommunicera alltid ändringar till kunden om Theme Editor ändrats.

---

## Vanliga misstag att undvika

- Uppdatera direkt i live-temat (utan staging/test).
- Skriv över anpassad kod från kunden.
- Sakna versionsdokumentation – då vet vi inte vad som är nytt eller gammalt.

---

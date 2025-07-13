# Filstruktur

För att göra våra Shopify-projekt lätta att underhålla och skala använder vi en modulär och konsekvent struktur. Den gör det enkelt att återanvända kod, jobba parallellt i team och hålla isär komponenter, sektioner och hjälpfunktioner.

## 📁 Översikt

```text
snippets/
│
├── _base/               → Grundkomponenter (grid, button, layout)
├── sections/            → Fulla sektioner med schema
├── components/          → UI-komponenter (badge, betyg, tabs)
├── utils/               → Hjälpfunktioner och filters
├── product/             → Produktrelaterade snippets
├── cart/                → Varukorgs- och checkoutmoduler
└── theme/               → Globala delar som header/footer
```

## Prefix-struktur

Alla moduler prefixas med ```ww_``` under utveckling. När de laddas upp till kundprojekt byts det till kundinitialer (t.ex. ```sm_```):

```text
ww_product-card.liquid      → sm_product-card.liquid
ww_trust-badge.liquid       → mb_trust-badge.liquid
```

Detta görs manuellt eller via script inför leverans till kund

## Mappbeskrivning

| Mapp 	| Innehåll 	|
|---	|---	|
| ```_base/``` 	| Layoutdelar som används överallt (grid, flex, container) 	|
| ```components/``` 	| UI-element som badges, betyg, tabs etc. 	|
| ```sections/``` 	| Fullständiga Shopify-sektioner 	|
| ```utils/``` 	| Hjälpfunktioner som används inuti andra snippets 	|
| ```product/``` 	| Komponenter relaterade till produktvy 	|
| ```cart/``` 	| Snippets för varukorg, mini-cart, checkout 	|
| ```theme/``` 	| Övergripande komponenter som header, footer, announcement bar 	|

## Regler

- En snippet = en funktion eller komponent

- Alltid tydliga prefix (ww_, sm_, mb_)

- Beskrivande namn i kebab-case

- Undvik beroenden mellan snippets utan render-anrop
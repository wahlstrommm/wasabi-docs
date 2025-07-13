# 🧩 Wasabi Web — Shopify Snippets Library

Welcome to the Wasabi Web central repository for reusable Shopify components.  
This library is built to help our team and clients implement modular, consistent, and maintainable frontend features across Shopify themes.

---

## 📦 What This Repo Contains

- ✅ **Reusable Liquid snippets**  
- 📚 **Documentation per snippet**  
- 🏷️ **Organized by category (e.g., product, cart, UI, etc.)**  
- ⚙️ **Configurable and extendable**  
- 🧑‍💻 **Client-specific overrides**

---

## 🗂️ Structure

```bash
wasabi-shopify-snippets/
├── snippets/
│   ├── product/
│   │   └── ww_product-card.liquid
│   └── cart/
│       └── ab_custom_cart-upsell.liquid
├── docs/
│   ├── product/
│   │   └── ww_product-card.md
│   └── cart/
│       └── ab_custom_cart-upsell.md
├── docusaurus.config.js
└── README.md
```
---
## 📦 Using Snippets in Projects

1. Copy the snippet (e.g., ``` product-gallery-slider.liquid ```) to the Shopify theme's ``` snippets```/ folder.
2. Render the snippet in the appropriate section or template:
```bash
{% render 'product-gallery-slider' %}
```
3. Include CSS/JS if applicable (in ```theme.liquid``` or elsewhere):
```bash
{{ 'wasabi-base.css' | asset_url | stylesheet_tag }}
{{ 'wasabi-utilities.js' | asset_url | script_tag }}
```
4. Customize settings if needed (e.g., update class names, color variables, or logic).

---

## 🧠 Naming Convention



To keep components organized and easily traceable:
```bash
| Prefix | Meaning                                          |
|--------|--------------------------------------------------|
| `ww_`  | Generic Wasabi Web snippet/component             |
| `xx_`  | Client-specific (replace `xx` with initials)     |
```

> **Example:** `ab_custom_product-card.liquid` for client **A&B**


🛠️ Guidelines for Adding New Snippets

   1.  Create a ```.liquid``` file in the correct ```snippets```/ subfolder.

   2. Add a corresponding ```.md``` file in the ```docs/``` directory with:

       - Purpose/Description

       - Setup instructions

       - Configuration options

       - Example usage

       - (Optional) Screenshot

    Add an inline comment at the top of each .liquid file:

```
{%- comment -%}
Wasabi Web — Client: AB — Custom Product Card (2025-07-13)
{%- endcomment -%}
```
---
## Philosophy

We believe in modularity first. Every component should:

  -  Be drop-in ready

   - Avoid tight coupling to theme-specific code

   - Allow basic configuration via schema or props

   - Be documented well enough to reimplement or extend

This approach ensures:

   - Faster dev times across projects

   - Easier onboarding of new team members

   - Safe, isolated updates to snippets

   - Better upgrade paths across themes

---

## 🚀 Getting Started with Docusaurus (Docs)

```bash
npm install
npm start
```
Navigate to ```http://localhost:3000``` to preview the documentation site.

Need help? Check ```/docs/README-EXAMPLE.md``` for how to document a snippet.
---

## 🧪 Contributing

All contributions should follow the naming conventions and folder structure.

  -  Fork, branch, commit, PR

  - Use meaningful commit messages

  - Keep snippets short and purposeful
---
## License & Attribution

All generic code (ww_) is owned by Wasabi Web AB and may be reused across projects.
Client-specific code (xx_) may require permission from the respective client.

Made with ☕ by the Wasabi Web dev team 🍥
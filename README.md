# Labesny — website directions

Three homepage directions for **Labesny** ([labesny.com](https://labesny.com)), the Kuwait
multi-brand fashion store run by Dagher & Hinnawi. Brief: sleek, fashion-led, Alo Yoga calibre.

Each direction is a single self-contained HTML file — no build step, no dependencies, no network
calls. Open `index.html` in any browser.

| Direction | Personality | Typefaces | Ground |
|---|---|---|---|
| [`noir/`](noir/) | Restraint as luxury — monochrome, image-first, zero radius | Instrument Sans | `#FFFFFF` |
| [`silk/`](silk/) | Warm and sensual — ivory, espresso, arch-topped tiles | Young Serif + Karla | `#F6F1EB` |
| [`pulse/`](pulse/) | Loud and young — blush colour blocks, sticky chip rail | Familjen Grotesk + Figtree | `#FFFFFF` |

## Built on the real store

labesny.com is Shopify with an open catalogue. All 3,000 products were walked via
`/products.json`, and 39 were curated across all 12 brands with their **real names, real KWD prices
(three decimals, as Shopify serves them), real sizes, real stock and real photography**. The two
Betty Barclay pieces render as sold out because the whole label currently is.

Operational details are the store's own: the free-delivery bar is set to their 20 KWD threshold,
and the contact block carries their real number, email and hours.

## In every direction

- All 12 brand logotypes — U.S. Polo Assn., La vie en rose, Eden Park, Betty Barclay, Benetton,
  More & More, 7 For All Mankind, Celio, Tom Tailor, Hunkemöller, Vera Mont, bebe
- Mega menus with category columns, collection tiles and upsell products
- Search overlay (⌘K) — scored matching across brands, categories and products, both languages
- Mobile drawer with nested category panels
- Cart drawer with free-delivery progress, one-tap recommendations and gift wrap
- Complete-the-look stack, a buy-together bundle that recalculates as you untick, recently viewed
- **English / Arabic with full RTL**

## Working on them

All three share one engine. Sources live in [`src/`](src/):

```
src/engine.js       shared JS — data, i18n, cards, cart, search, drawer, carousels
src/logos.css       12 brand logotypes, driven by --lg-serif / --lg-sans so they inherit page ink
src/imgs.json       51 base64 images (1.3 MB) — products, heroes, banners
src/manifest.json   the curated product set: ids, prices, sizes, stock, source filenames
src/*.src.html      thin sources: markup + CSS + a LAB_THEME block
src/build.mjs       inlines logos + engine + images into a standalone file
```

To rebuild after editing a source:

```bash
cd src
node build.mjs noir.src.html ../noir/index.html
```

Add `stub` as a third argument for a ~100 KB copy with placeholder images — useful for checking
layout quickly, since the full builds are ~1.4 MB.

Per-site furniture (Pulse's ticker and chip rail, Silk's second pair image) hangs off
`window.labThemeHook(api)`, which the engine calls after every language switch.

### Notes

- Brand logotypes are **typographic stand-ins**, not the official marks. Real vector files drop into
  the same `.bl-*` slots.
- Product imagery belongs to Labesny and the brands they represent. This repository is private.
- The **Arabic toggle was added as a recommendation** — the live site is English-only, which looks
  like a gap for a Kuwait storefront. Remove it if the client disagrees.

---

Built by [band.](https://github.com/band-agents) for Labesny.

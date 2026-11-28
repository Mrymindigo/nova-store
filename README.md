# NOVA Store

> فروشگاه اینترنتی NOVA با Next.js. نسخه فارسی و انگلیسی، تم روشن و تیره، و فهرست محصولات با جستجو، فیلتر، مرتب‌سازی و صفحه‌بندی. (چالش فنی Frontend)

NOVA Store is the customer-facing website of a small online shop. It is built with
Next.js (App Router) and TypeScript. Products come from the public
[FakeStoreAPI](https://fakestoreapi.com). This is the second project of a frontend
technical challenge. The first one is **NOVA Admin**: `<https://github.com/Mrymindigo/nova-admin>`.

**Status:** the main page is working. The shopping cart, the footer content and some
SEO files are not finished. See [What is not finished](#what-is-not-finished) and
[Known issues](#known-issues) below. I list them openly on purpose.

## Tech stack

Next.js (App Router) · TypeScript · styled-components (with SSR setup) · next-intl ·
Axios · React Context (theme) · react-icons

## What works now

- **Two languages:** Persian (`/fa`) and English (`/en`), with correct direction
  (right-to-left or left-to-right). All fixed texts come from dictionary files.
- **Light and dark theme.** The choice is saved in a cookie, so the page is rendered
  with the right theme on the server and does not flash.
- **Header:** logo, links (Home, Categories, Products), search, theme button and cart
  icon. On mobile, the links and search move into a slide-in menu.
- **Hero banner** with a button that scrolls to the products.
- **Categories section** that shows the category names (display only, by request).
- **Products section:**
  - 6 products per page, with page links
  - search (from the header), category filter and sorting (price, title)
  - loading skeleton, error message with a "try again" button, empty state and
    "no results" state
- **Product card** with image, category, title, rating, price and an "Add to cart" button.
- **Page title and description** are translated for each language (`generateMetadata`).

## What is not finished

| Item                                                                 | Status                                                                                             |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Shopping cart (state, quantity, remove, totals, saved after refresh) | Not started. The cart icon shows a fixed `0` and the "Add to cart" button only logs to the console |
| Cart page (`/cart`)                                                  | Not built. The link exists but the page returns 404                                                |
| Zustand                                                              | **Not used.** I ran out of time. It was planned for the cart                                       |
| Footer content                                                       | Only placeholder text (`logo`, `col1`, ...). Real links, shop info and social icons are missing    |
| Newsletter form (Formik + Yup)                                       | Not built. Formik and Yup are not used in this project                                             |
| Language switch button in the header                                 | Not built. The language can only be changed by editing the URL (`/fa` or `/en`)                    |
| `robots.ts` and `sitemap.ts`                                         | Not built                                                                                          |
| `metadataBase` and Open Graph tags                                   | Not added                                                                                          |

## Known issues

- **Responsive layout still has problems.** The category and sort filter boxes are not
  sized well on small screens, and some product cards do not have the same size on some
  widths. I know the cause is in the filter and card styles, and I did not have time to
  fix it.
- **The footer** is only a placeholder.
- **Menu highlight:** "Home" is always shown as active. The links to Categories and
  Products only scroll the page and do not change the highlighted item.

## Getting started

### Requirements

- Node.js 20.9 or newer
- npm

### Install and run

```bash
git clone https://github.com/Mrymindigo/nova-store
cd nova-store
cp .env.example .env
npm install
npm run dev
```

On Windows CMD, use `copy .env.example .env`. The app opens at http://localhost:3000
and redirects to `/fa` or `/en`.

### Scripts

| Command         | What it does                 |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Run the production build     |
| `npm run lint`  | Check the code with ESLint   |

### Environment variables

| Name                       | Meaning                                     | Example                    |
| -------------------------- | ------------------------------------------- | -------------------------- |
| `NEXT_PUBLIC_API_BASE_URL` | Address of the API                          | `https://fakestoreapi.com` |
| `NEXT_PUBLIC_SITE_URL`     | Address of this site (for future SEO files) | `http://localhost:3000`    |

Restart the dev server after you change `.env`. These values are visible in the browser,
so no secrets are stored in them.

## Project structure

```
src/
├── app/[locale]/       pages and the main layout
├── assets/             images
├── components/         parts of the pages (header, hero, categories, products, footer)
├── context/            theme context
├── dictionary/         Persian and English texts
├── requests/           API calls (one function per call)
├── shared/             reusable parts (container, search input, theme, global style, SSR registry)
├── types/              interfaces and enums
├── utils/              helper functions, constants, axios instance, routing
├── i18n.ts             tells next-intl where to find the texts
└── proxy.ts            picks the language and redirects `/` to `/fa` or `/en`
```

Simple rules I followed:

- **Pages and sections** get the data and decide what to show.
- **Small components** only receive data (props) and display it.
- **Requests** know the API addresses and know nothing about React.
- **Helper functions** (filter, sort, pagination) are plain functions, so they are easy to read and test.

Differences from the suggested structure in the brief:

- Folder names are lowercase.
- The Axios instance is in `utils/api/` and the request functions are in `requests/`.
- `modals/`, `storage/` and `validations/` do not exist yet because nothing needs them yet.
  They will be added with the cart and the newsletter form.

## How the main ideas work

### Getting data (server side)

The main page is a Server Component. It fetches the products on the server with Axios,
so the browser receives ready HTML (good for SEO). The request does not appear in the
browser's Network tab, because the server sends it. To see the data, use "View Page Source".

The Axios instance is in `src/utils/api/axiosInstance.ts`. It reads the base address from
`NEXT_PUBLIC_API_BASE_URL`. `src/utils/env.ts` stops the app with a clear message if a
variable is missing.

### Search, filter, sort and pages live in the URL

Example: `/fa?category=electronics&sort=price-asc&page=2`

- The server reads these values, checks them (a wrong value falls back to a default),
  filters and sorts the products, and shows only 6 of them.
- Page numbers are real links, so the Back button works and a link can be shared.
- The search box in the header adds `q=...` to the URL when you press Enter.

I chose the URL instead of a global state because it works with server rendering and
needs no extra library.

### Theme

The theme is stored in a cookie called `nova-theme`. The server reads it, so the first
render already has the right colors. Reading cookies makes pages render on every request
(not statically). SEO is not affected, because the HTML is fully rendered on the server.
Colors are never written directly in components. They come from the theme.

### Languages

`next-intl` gives the `/fa` and `/en` routes. Texts are typed objects in `src/dictionary`.
The Persian file must have the same keys as the English one, otherwise TypeScript shows
an error. Product names and descriptions come from the API in English only, so they are
shown as they are. Category names, prices and numbers are localized.

## FakeStoreAPI limits and my decisions

| Limit                                         | What I did                                                                                                            |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| No real pagination or filter parameters       | All 20 products are fetched, then filtered, sorted and cut into pages of 6 on the server                              |
| Prices are in US dollars                      | Shown in dollars with the correct format for each language. No made-up exchange rate                                  |
| Category names contain spaces and apostrophes | A small map in `utils/categoryKeys.ts` links each API name to a dictionary key. An unknown category is shown as it is |
| No product search endpoint                    | Search is a simple text match on the product title                                                                    |

## Assumptions

- The home page is the only real page for now. The "Categories" and "Products" menu links
  scroll to sections of the home page (`/#categories`, `/#products`).
- Axios does not use the cache of Next's `fetch`. This is fine here, because the page is
  already rendered on every request.

## Use of AI assistance and what I learned

I used an AI assistant (Claude) during this project, mainly as a tutor and for code
review. I want to be clear about it:

- Before this challenge I had not used **Axios**, **next-intl** or **styled-components**.
  I learned them while building this project, and I can explain how they are used here.
- I also needed help with the **SSR setup for styled-components** (the registry file),
  which follows the official documentation.
- I am **still learning Zustand and Formik**. I did not complete the parts that need
  them, instead of adding code I do not understand. This is why the cart and the
  newsletter form are missing.
- Design decisions (cookie for the theme, URL for the filters, which parts are client
  components) were discussed and chosen with reasons that I can explain.

## Time spent

day1: 12 hours
day2: 8 houurs

## Screenshots

To be added

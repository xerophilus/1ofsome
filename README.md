# 1ofsome

Shop page for 1ofsome's hand-cut 3D layered football cards. It's a static site with no build step: `index.html`, `dealers.js` and `img/`.

## Deploy

Import this repo into Vercel and leave the framework preset at **Other**. There's no build command. Every push to `main` redeploys the site.

## Change prices, links or dealers

Everything lives in `dealers.js`.

- `prices`: the five card types and their prices.
- `ebayUrl` / `etsyUrl`: where the store buttons go.
- `dealers`: one entry per dealer. For example:

  ```js
  HARBOR: { name: "Harbor Card Co.", discountCode: "HARBOR10" },
  ```

  That dealer's QR code points to `https://YOUR-DOMAIN/?ref=HARBOR`. A visitor who scans it sees the dealer's name, the code to use at checkout and prices with 10% off. The referral is remembered on their device for 60 days. Create the same discount code as a 10% coupon on eBay and Etsy.
- `customFormEnabled`: stays `false` until custom requests have somewhere to go. Until then, the page tells people to message the shop on eBay or Etsy.

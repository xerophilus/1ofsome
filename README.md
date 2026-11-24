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

  That dealer's QR code points to `https://YOUR-DOMAIN/?ref=HARBOR`. A visitor who scans it sees the dealer's name, the code to use at checkout and prices with 10% off. The referral is remembered on their device for 60 days. Create the same code in Stripe as a promotion code on the 10% coupon. Matching coupons on eBay and Etsy are optional.
- `checkoutEnabled` and `cards`: the Buy buttons. Each finished card gets its own Stripe Payment Link (promotion codes allowed, payments limited to 1). Paste the link into that card's `link`, then set `checkoutEnabled: true`. When a visitor came from a dealer, Buy adds `prefilled_promo_code` and `client_reference_id=dealer_CODE` to the link, so the 10% is filled in and the order shows the dealer. A placeholder link shows Coming soon, and `sold: true` shows Sold.
- `customFormEnabled`: stays `false` until custom requests have somewhere to go. Until then, the page tells people to message the shop on eBay or Etsy.

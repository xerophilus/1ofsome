// Shop settings. Edit this file to change the name, prices, links and dealers.
// A dealer's QR code points to:  https://YOUR-DOMAIN/?ref=CODE

var DEALER = "a 1ofsome dealer";

window.SHOP_CONFIG = {
  shopName: "1ofsome",
  mark: "1/s",
  tagline: "3D layered football cards",

  // Leave blank to show "coming soon" on the button.
  ebayUrl: "https://www.ebay.com/usr/bwilliamp",
  etsyUrl: "https://keelandcompass.etsy.com",

  // Prices in dollars. Change freely; the page reads them from here.
  prices: [
    { name: "Base", price: 25, note: "A flagship base card, four layers deep" },
    { name: "Holo", price: 30, note: "Built from a holo parallel" },
    { name: "Custom base", price: 35, note: "Your player, from a base card" },
    { name: "Custom holo", price: 40, note: "Your player, from a holo parallel" },
    { name: "Relic", price: 45, note: "Built around a relic card" }
  ],

  // How long a dealer referral sticks to a visitor's browser.
  refDays: 60,

  // true = the custom-order form says nothing was sent (preview mode).
  preview: false,

  // false = hide the custom-order form until it has somewhere to send requests.
  customFormEnabled: false,

  // Stripe checkout. Each finished card gets its own Stripe Payment Link,
  // set in Stripe to "Limit the number of payments" = 1, with promotion codes
  // allowed. Keep this false until the first real link is in.
  // A card whose link is still a placeholder shows "Coming soon".
  // After a card sells, set sold: true so its button reads Sold.
  checkoutEnabled: false,
  cards: [
    { id: "lawrence-base-01", player: "Trevor Lawrence", tier: "Base", price: 25,
      img: "img/prototype.webp", link: "https://buy.stripe.com/REPLACE_ME_1", sold: false },
    { id: "example-holo-01", player: "Player name", tier: "Holo", price: 30,
      img: "", link: "https://buy.stripe.com/REPLACE_ME_2", sold: false },
  ],

  // Buyer discount shown to anyone who arrives from a dealer's QR code.
  buyerDiscountText: "10% off",
  // What each dealer earns per sale (for your records; never shown on the page).
  dealerKickback: 5,

  // One entry per dealer. The key is what goes in ?ref=, case doesn't matter.
  // Each discountCode must also exist in Stripe as a promotion code on the
  // 10% coupon; the Buy button fills it in at checkout. Matching 10% coupons
  // on eBay and Etsy are optional.
  // These 20 codes are preloaded for the Dec 19 card show. Until a code is
  // handed to a real dealer, its banner says "You came from a 1ofsome dealer."
  // When you assign one, swap DEALER for their name, e.g.
  //   PRISM: { name: "Harbor Card Co.", discountCode: "PRISM" },
  dealers: {
    GREENCRACKLE:   { name: DEALER, discountCode: "GREENCRACKLE" },
    SUPERFRACTOR:   { name: DEALER, discountCode: "SUPERFRACTOR" },
    GOLDREFRACTOR:  { name: DEALER, discountCode: "GOLDREFRACTOR" },
    XFRACTOR:       { name: DEALER, discountCode: "XFRACTOR" },
    ATOMIC:         { name: DEALER, discountCode: "ATOMIC" },
    GOLDWAVE:       { name: DEALER, discountCode: "GOLDWAVE" },
    ORANGEWAVE:     { name: DEALER, discountCode: "ORANGEWAVE" },
    REDLAVA:        { name: DEALER, discountCode: "REDLAVA" },
    BLACKREFRACTOR: { name: DEALER, discountCode: "BLACKREFRACTOR" },
    PINKREFRACTOR:  { name: DEALER, discountCode: "PINKREFRACTOR" },
    AQUAREFRACTOR:  { name: DEALER, discountCode: "AQUAREFRACTOR" },
    PURPLESPECKLE:  { name: DEALER, discountCode: "PURPLESPECKLE" },
    NEGATIVE:       { name: DEALER, discountCode: "NEGATIVE" },
    PRISM:          { name: DEALER, discountCode: "PRISM" },
    SEPIA:          { name: DEALER, discountCode: "SEPIA" },
    MINIDIAMOND:    { name: DEALER, discountCode: "MINIDIAMOND" },
    RAYWAVE:        { name: DEALER, discountCode: "RAYWAVE" },
    RAINBOWFOIL:    { name: DEALER, discountCode: "RAINBOWFOIL" },
    VINTAGESTOCK:   { name: DEALER, discountCode: "VINTAGESTOCK" },
    PRINTINGPLATE:  { name: DEALER, discountCode: "PRINTINGPLATE" },
  }
};

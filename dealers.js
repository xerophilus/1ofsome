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

  // Buyer discount shown to anyone who arrives from a dealer's QR code.
  buyerDiscountText: "10% off",
  // What each dealer earns per sale (for your records; never shown on the page).
  dealerKickback: 5,

  // One entry per dealer. The key is what goes in ?ref=, case doesn't matter.
  // Create each discountCode as a 10% coupon on eBay and Etsy too.
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

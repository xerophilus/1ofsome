// Shop settings. Edit this file to change the name, prices, links and dealers.
// A dealer's QR code points to:  https://YOUR-DOMAIN/?ref=CODE

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
  dealers: {
    // Add real dealers here, e.g.
    // HARBOR: { name: "Harbor Card Co.", discountCode: "HARBOR10" },
  }
};

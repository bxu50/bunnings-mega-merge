export const catalogAWithSource = [
  {
    Description: "Walkers Special Old Whiskey",
    SKU: "647-vyk-317",
    Source: "A"
  },
  { Description: "Bread - Raisin", SKU: "280-oad-768", Source: "A" },
  { Description: "Tea - Decaf 1 Cup", SKU: "165-rcy-650", Source: "A" },
  { Description: "Cheese - Grana Padano", SKU: "167-eol-949", Source: "A" },
  {
    Description: "Carbonated Water - Lemon Lime",
    SKU: "650-epd-782",
    Source: "A"
  }
];

export const CatalogBWithoutConflict = [
  { Description: "Cheese - Grana Padano", SKU: "999-eol-949" },
  { Description: "Carbonated Water - Lemon Lime", SKU: "999-epd-782" }
];

export const mergedSuperset = [
  {
    Description: "Walkers Special Old Whiskey",
    SKU: "647-vyk-317",
    Source: "A"
  },
  { Description: "Bread - Raisin", SKU: "280-oad-768", Source: "A" },
  { Description: "Tea - Decaf 1 Cup", SKU: "165-rcy-650", Source: "A" },
  { Description: "Cheese - Grana Padano", SKU: "167-eol-949", Source: "A" },
  {
    Description: "Carbonated Water - Lemon Lime",
    SKU: "650-epd-782",
    Source: "A"
  },
  { Description: "Cheese - Grana Padano", SKU: "999-eol-949", Source: "B" },
  {
    Description: "Carbonated Water - Lemon Lime",
    SKU: "999-epd-782",
    Source: "B"
  }
];

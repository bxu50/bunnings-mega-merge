export const catalogAWithSource = [
  {
    Description: "Walkers Special Old Whiskey",
    SKU: "647-vyk-317",
    source: "A"
  },
  { Description: "Bread - Raisin", SKU: "280-oad-768", source: "A" },
  { Description: "Tea - Decaf 1 Cup", SKU: "165-rcy-650", source: "A" },
  { Description: "Cheese - Grana Padano", SKU: "167-eol-949", source: "A" },
  {
    Description: "Carbonated Water - Lemon Lime",
    SKU: "650-epd-782",
    source: "A"
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
    source: "A"
  },
  { Description: "Bread - Raisin", SKU: "280-oad-768", source: "A" },
  { Description: "Tea - Decaf 1 Cup", SKU: "165-rcy-650", source: "A" },
  { Description: "Cheese - Grana Padano", SKU: "167-eol-949", source: "A" },
  {
    Description: "Carbonated Water - Lemon Lime",
    SKU: "650-epd-782",
    source: "A"
  },
  { Description: "Cheese - Grana Padano", SKU: "999-eol-949", source: "B" },
  {
    Description: "Carbonated Water - Lemon Lime",
    SKU: "999-epd-782",
    source: "B"
  }
];
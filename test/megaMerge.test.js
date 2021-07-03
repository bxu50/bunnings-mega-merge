import {
  findConflictedSKUByBarcode,
  megaMerge,
  addSourceColoumForCatalog,
  removeConflictProductBySKU
  } from '../src/megaMerge'
import { pathname, readCsv } from '../src/helper.js'

describe('megaMerge', () => {
  it('should find all conflict SKU in two barcode list', async () => {
    const expectedConflictBarcode = ["999-vyk-317", "999-oad-768", "165-rcy-650"]
    const barcodeA = await readCsv(pathname('../test/mock/barcodesA.csv'))
    const barcodeB = await readCsv(pathname('../test/mock/barcodesB.csv'))
    expect(findConflictedSKUByBarcode(barcodeA, barcodeB)).toEqual(expectedConflictBarcode)
  })

  it('should add source coloum for catalog', async () => {
    const expectedCatalogWithSource = [
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
    const catalog = await readCsv(pathname('../test/mock/catalogA.csv'));
    const catalogWithSource = addSourceColoumForCatalog(catalog, "A");
    expect(catalogWithSource).toEqual(expectedCatalogWithSource);
  })

  it('should remove the row that contains the SKU that is conflict', async () => {
    const expectedCatalogRemovedConflict = [
      { Description: "Cheese - Grana Padano", SKU: "999-eol-949" },
      { Description: "Carbonated Water - Lemon Lime", SKU: "999-epd-782" }
    ];
    const conflictBarcode = ["999-vyk-317", "999-oad-768", "165-rcy-650"]

    const catalog = await readCsv(pathname('../test/mock/catalogB.csv'));
    expect(catalog).not.toEqual(removeConflictProductBySKU(catalog, conflictBarcode))
    expect(removeConflictProductBySKU(catalog, conflictBarcode)).toEqual(expectedCatalogRemovedConflict)
  })

  it('should merge two catalog without any conflict', async () => {
    const catalogA = await readCsv(pathname('../test/mock/catalogA.csv'));
    const catalogB = await readCsv(pathname('../test/mock/catalogB.csv'));
    const barcodesA = await readCsv(pathname('../test/mock/barcodesA.csv'));
    const barcodesB = await readCsv(pathname('../test/mock/barcodesB.csv'));
    const expectedMergedsuperset = [
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
    expect(await megaMerge(catalogA, catalogB, barcodesA, barcodesB)).toEqual(expectedMergedsuperset)
  })
})
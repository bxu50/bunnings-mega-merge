import {
  findConflictedSKUByBarcode,
  megaMerge,
  addSourceColoumForCatalog,
  removeConflictProductBySKU
  } from '../src/megaMerge'
import { pathname, readCsv } from '../src/helper.js'
import {
  catalogAWithSource,
  CatalogBWithoutConflict,
  mergedSuperset
} from './fixtures/megaMergeData'

describe('megaMerge', () => {
  it('should find all conflict SKU in two barcode list', async () => {
    const expectedConflictBarcode = ["999-vyk-317", "999-oad-768", "165-rcy-650"]
    const barcodeA = await readCsv(pathname('../test/fixtures/barcodesA.csv'))
    const barcodeB = await readCsv(pathname('../test/fixtures/barcodesB.csv'))
    expect(findConflictedSKUByBarcode(barcodeA, barcodeB)).toEqual(expectedConflictBarcode)
  })

  it('should add source coloum for catalog with source value', async () => {
    const catalog = await readCsv(pathname('../test/fixtures/catalogA.csv'));
    const catalogWithSource = addSourceColoumForCatalog(catalog, "A");
    expect(catalogWithSource).toEqual(catalogAWithSource);
  })

  it('should remove the row that contains the SKU that is conflict', async () => {
    const conflictBarcode = ["999-vyk-317", "999-oad-768", "165-rcy-650"]

    const catalog = await readCsv(pathname('../test/fixtures/catalogB.csv'));
    expect(catalog).not.toEqual(removeConflictProductBySKU(catalog, conflictBarcode))
    expect(removeConflictProductBySKU(catalog, conflictBarcode)).toEqual(CatalogBWithoutConflict)
  })

  it('should merge two catalog without any conflict', async () => {
    const catalogA = await readCsv(pathname('../test/fixtures/catalogA.csv'));
    const catalogB = await readCsv(pathname('../test/fixtures/catalogB.csv'));
    const barcodesA = await readCsv(pathname('../test/fixtures/barcodesA.csv'));
    const barcodesB = await readCsv(pathname('../test/fixtures/barcodesB.csv'));
    expect(await megaMerge(catalogA, catalogB, barcodesA, barcodesB)).toEqual(mergedSuperset)
  })
})
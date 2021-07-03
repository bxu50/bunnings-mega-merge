import { findConflictedSKUByBarcode, megaMerge } from '../src/megaMerge'
import { pathname, readCsv } from '../src/helper.js'

describe('megaMerge', () => {
  it('should find all conflict SKU in two barcode list', async () => {
    const barcodeA = await readCsv(pathname('../test/mock/barcodesA.csv'))
    const barcodeB = await readCsv(pathname('../test/mock/barcodesB.csv'))
    const expectedConflictBarcode = ["999-vyk-317", "999-oad-768", "165-rcy-650"]
    expect(findConflictedSKUByBarcode(barcodeA, barcodeB)).toEqual(expectedConflictBarcode)
  })
})
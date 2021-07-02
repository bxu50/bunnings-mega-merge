import { pathname, readCsv } from '../src/helper.js'

describe('helper', () => {
  it('should read the svc file to an array', async () => {
    const expectedArray = [
      {
        "Description": "Walkers Special Old Whiskey",
        "SKU": "647-vyk-317"},
      {
        "Description": "Bread - Raisin",
        "SKU": "280-oad-768"
      }
    ]
    const catalog = await readCsv(pathname('../test/mock/catalog.csv'));
    expect(catalog).toEqual(expectedArray)
  })
})
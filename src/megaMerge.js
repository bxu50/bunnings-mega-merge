export const megaMerge = async (
  catalogA,
  catalogB,
  barcodeA,
  barcodeB,
  supplierA,
  supplierB
) => {
  const conflictSKU = findConflictedSKUByBarcode(barcodeA, barcodeB);
  const catalogAWithSource = addSourceColoumForCatalog(catalogA, "A");
  const catalogBWithSource = addSourceColoumForCatalog(catalogB, "B");
};

export const findConflictedSKUByBarcode = (barcodeA, barcodeB) =>
  barcodeA
    .map(rowA =>
      barcodeB
        .map(rowB => rowA.Barcode === rowB.Barcode && rowB.SKU)
        .find(barcode => barcode !== false)
    )
    .filter(barcode => barcode !== undefined)
    .filter((barcode, i, ary) => !i || barcode != ary[i - 1]);

export const addSourceColoumForCatalog = (catalog, source) =>
  catalog.map(row => ({ ...row, source: source }));

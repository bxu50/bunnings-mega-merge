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
  const filteredCatalogB = removeConflictProductBySKU(
    catalogBWithSource,
    conflictSKU
  );
  return catalogAWithSource.concat(filteredCatalogB);
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
  catalog.map(row => ({ ...row, Source: source }));

export const removeConflictProductBySKU = (catalog, SKU) =>
  SKU.reduce((acc, cur) => acc.filter(row => row.SKU !== cur), catalog);

export const megaMerge = async (
  catalogA,
  catalogB,
  barcodeA,
  barcodeB,
  supplierA,
  supplierB
) => {
  const catalogAWithSource = catalogA.map(row => ({ ...row, source: "A" }));
  const catalogBWithSource = catalogB.map(row => ({ ...row, source: "B" }));
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


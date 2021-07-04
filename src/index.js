import { pathname, readCsv } from "./helper.js";
import { megaMerge } from "./megaMerge.js";
import writeCsv from "csv-writer";

const index = async () => {
  const catalogA = await readCsv(pathname("../input/catalogA.csv"));
  const catalogB = await readCsv(pathname("../input/catalogB.csv"));
  const barcodesA = await readCsv(pathname("../input/barcodesA.csv"));
  const barcodesB = await readCsv(pathname("../input/barcodesB.csv"));
  const suppliersA = await readCsv(pathname("../input/suppliersA.csv"));
  const suppliersB = await readCsv(pathname("../input/suppliersB.csv"));
  const mergedSuperset = await megaMerge(
    catalogA,
    catalogB,
    barcodesA,
    barcodesB,
    suppliersA,
    suppliersB
  );
  const createCsvWriter = writeCsv.createObjectCsvWriter;
  const csvWriter = createCsvWriter({
    path: pathname("../output/result_output.csv"),
    header: [
      { id: "SKU", title: "SKU" },
      { id: "Description", title: "Description" },
      { id: "Source", title: "Source" }
    ]
  });
  csvWriter.writeRecords(mergedSuperset).then(() => {
    console.log("merged superset result_output.csv is wrote at output folder");
  });
};

index();

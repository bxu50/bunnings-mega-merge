import { pathname, readCsv } from "./helper.js";

const index = async () => {
  const file = await readCsv(pathname("../input/barcodesA.csv"));
  console.log(file);
};

index();

import buildDevLogger from "./buildDevLogger";
import buildProdLogger from "./buildProdLogger";

let logger = buildProdLogger();
// if (process.env.NODE_ENV !== "development") {
//   logger = buildDevLogger();
// } else {
//   logger = buildProdLogger();
// }

export default logger;

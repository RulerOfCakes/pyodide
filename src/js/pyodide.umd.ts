import { loadPyodide, version } from "./pyodide";
import { type PackageData } from "./load-package";
export { loadPyodide, version, PackageData };
(globalThis as any).loadPyodide = loadPyodide;

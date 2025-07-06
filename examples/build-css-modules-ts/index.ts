import { insertStyleElement } from "bun-styleloader-fork/utils";
import styles, { code } from "./style.module.css";

insertStyleElement(code);

console.dir("Styles loaded:", styles);

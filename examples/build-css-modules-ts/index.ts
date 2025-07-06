import { insertStyleElement } from "bun-style-loader/utils";
import styles, { code } from "./style.module.css";

insertStyleElement(code);

console.dir("Styles loaded:", styles);

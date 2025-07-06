import styleLoader from "bun-styleloader-fork";

Bun.build({
	entrypoints: ["./index.js"],
	outdir: "./dist",
	plugins: [styleLoader()],
});

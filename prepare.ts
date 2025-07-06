import fs from "node:fs";

// Delete the 'types' directory if it exists
if (fs.existsSync("types")) {
	fs.rmSync("types", { recursive: true, force: true });
}

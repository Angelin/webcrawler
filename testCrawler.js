let crawler = require("./crawler.js");

let domain     = process.argv[2];
let outputType = process.argv[3];
if (process.argv.length <= 2) {
    throw new Error("No url was passed. Hint: pass it as the 3rd param");
}
let options = {
	"domain": domain,
	"outputType": outputType
};
crawler.init(options);
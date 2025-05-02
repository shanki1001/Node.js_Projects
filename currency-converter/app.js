const yargs = require("yargs");
const convertCurrency = require("./convert");

yargs.command({
  command: "convert",
  describe: "Convert currency",
  builder: {
    amount: {
      describe: "Amount to convert",
      demandOption: true,
      type: "number",
    },
    from: {
      describe: "From currency code (e.g., USD)",
      demandOption: true,
      type: "string",
    },
    to: {
      describe: "To currency code (e.g., INR)",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    convertCurrency(
      argv.amount,
      argv.from.toUpperCase(),
      argv.to.toUpperCase()
    );
  },
});

yargs.parse();

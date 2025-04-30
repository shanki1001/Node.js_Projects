const yargs = require("yargs");
const getWeather = require("./weather");

yargs.command({
  command: "get",
  describe: "Get weather info for a city",
  builder: {
    city: {
      describe: "City name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    getWeather(argv.city);
  },
});
yargs.parse();

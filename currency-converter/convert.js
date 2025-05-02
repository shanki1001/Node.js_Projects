const axios = require("axios");

const convertCurrency = async (amount, from, to) => {
  const apiKey = "f2ae2d5c33dcef07c0c66f05";
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`;

  try {
    const response = await axios.get(url);
    const rate = response.data.conversion_rates[to];

    if (!rate) {
      console.log(`Unable to find exchange rate for ${to}`);
      return;
    }

    const convertedAmount = (amount * rate).toFixed(2);
    console.log(`${amount} ${from} = ${convertedAmount} ${to}`);
  } catch (error) {
    console.error("Error during conversion:", error.message);
  }
};

module.exports = convertCurrency;

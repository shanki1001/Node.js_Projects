# 💱 Currency Converter CLI

A simple and powerful Command Line Interface (CLI) app built with Node.js to convert currencies using real-time exchange rates from the [ExchangeRate-API](https://www.exchangerate-api.com/).

## 🔧 Features

- Convert any amount from one currency to another using live exchange rates.
- Simple command-line interface using `yargs`.
- Fetches exchange rates from a free, reliable API.

## 📦 Tech Stack

- Node.js
- yargs (for CLI command handling)
- axios (for API requests)
- ExchangeRate-API (for real-time exchange rates)

## 🚀 How to Use

### 1. Clone the repository

git clone https://github.com/yourusername/currency-converter-cli.git
cd currency-converter-cli

### 2. Install dependencies :-
	npm install

### 3. Run the app
node app.js convert --amount=100 --from=USD --to=INR

Example Output
yaml
Copy
Edit
100 USD = 8312.00 INR

####API Used :-
ExchangeRate-API
You must obtain you own API Key and insert it in the code:

###Files:- 
 app.js
 convert.js
 pakage.json

### Sample output:- 

!(Sample run of the project)[screenshot.PNG]

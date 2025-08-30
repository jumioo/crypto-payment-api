const axios = require("axios");
const config = require("./config.json");

function generateString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

class Payments {
    static async createWallet({ currency, amount }) {
        const response = await axios.get("https://api.plisio.net/api/v1/invoices/new", {
            params: {
                currency: currency.toUpperCase(),
                order_name: generateString(),
                order_number: generateString(),
                source_currency: "EUR",
                source_amount: amount,
                api_key: config.api_token,
                expire_min: 1440,
            }
        });

        return JSON.stringify({ success: true, wallet: response.data.data.wallet_hash, amount: response.data.data.amount });
    }
}

module.exports = { Payments };
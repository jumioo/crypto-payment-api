const express = require("express");
const app = express();
const port = 4197;
const { Payments } = require("./plisio.js");

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/create-wallet", async (req, res) => {
    const { currency, amount } = req.query;
    try {
        const wallet = await Payments.createWallet({ currency, amount });
        // console.log(wallet);
        res.json(JSON.parse(wallet));
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Failed to create wallet" });
    }
});
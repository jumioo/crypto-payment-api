# Crypto Wallet API Server

This project provides a simple Express.js server that allows you to create cryptocurrency payment wallets using the [Plisio](https://plisio.net/) API. It exposes a single endpoint to generate a new wallet for a specified currency and amount.

## Features

- **Create Wallet Endpoint**: Generate a new payment wallet for any supported cryptocurrency.
- **White Label Payment Processing**: Integrate seamlessly with your own branding.
- **Easy Integration**: Simple REST API for use in your own applications.

## Requirements

1. **Plisio Account**
   - Sign up for a free account at [Plisio](https://plisio.net/).

2. **API Key**
   - After logging in, navigate to your dashboard.
   - Go to **Settings** > **API Keys**.
   - Create a new API key and copy it.

3. **Enable White Label Payment Processing**
   - In your Plisio dashboard, go to **Settings** > **White Label**.
   - Enable white label payment processing for your account.

4. **Node.js Environment**
   - Make sure you have [Node.js](https://nodejs.org/) installed.

## Setup

1. **Clone the Repository**

   ```
   git clone https://github.com/jumioo/crypto-payment-api/
   cd crypto-payment-api
   ```

2. **Install Dependencies**

   ```
   npm install
   ```

3. **Configure API Key**

   - Open `config.json` and replace the value of `api_token` with your Plisio API key:

     ```json
     {
         "api_token": "YOUR_PLISIO_API_KEY"
     }
     ```

4. **Start the Server**

   ```
   node index.js
   ```

   The server will start on port `4197` by default.

## Usage

### Create a Wallet

Send a GET request to `http://localhost:4197/create-wallet?currency=BTC&amount=15` with your own parameters. The response will be returned in JSON format, containing the generated wallet address and the amount in the specified cryptocurrency and if the request was successfull.

![](https://i.ibb.co/zhHsNFJV/Bildschirmaufnahme-2025-08-30-um-14-52-12.gif)

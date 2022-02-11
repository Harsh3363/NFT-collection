require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",

  networks: {
    rinkeby: {
      // defining which test network to deploy to ->
      // url is for the Eth node ->
      url: ALCHEMY_API_KEY_URL,
      //private key goes below ->
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};

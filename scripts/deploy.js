//ethers.js comes built-in with Hardhat

//import ethers ->
const { ethers } = require("hardhat");

async function main() {

//telling script we want to delpoy NFT.soL,once we give the name of the contract to hardhat it will load the code inside the contract->
    const nftContract  = await ethers.getContractFactory("Nftee");

//deploy it ->
    const deployedNFTContract  = await nftContract.deploy();

    //waiting for the contract to get deployed->
    // await delpoyedContract.deployed();

//print the address of the deployed contract ->
    console.log("NFT contract deployed to: ", deployedNFTContract.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
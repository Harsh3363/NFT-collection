//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

//Importing standard implementationn of ERC721 ->
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//contract Nft is an ERC721 contract->
contract Nftee is ERC721 {

    //ERC721 constructor need 2 arguements which are name and symbol ->
    constructor() ERC721("Learnign NFT","LNFT") {
        //minting NFT ->
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
        _mint(msg.sender, 3);
        _mint(msg.sender, 4);
        _mint(msg.sender, 5);
    }

}
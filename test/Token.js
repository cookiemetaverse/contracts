const { expect } = require("chai");
const { ethers } = require("hardhat");
//The ethers variable is available in the global scope. If you like your code always being explicit, you can add this line at the top:
describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();
    /*A Signer in ethers.js is an object that represents an Ethereum account. It's used to send transactions to contracts and other accounts. Here we're getting a list of the accounts in the node we're connected to, which in this case is Hardhat Network, and we're only keeping the first one.*/
    //A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts, so Token here is a factory for instances of our token contract.
    const Token = await ethers.getContractFactory("Token");

    const hardhatToken = await Token.deploy();
    //Calling deploy() on a ContractFactory will start the deployment, and return a Promise that resolves to a Contract. This is the object that has a method for each of your smart contract functions.
    //Once the contract is deployed, we can call our contract methods on hardhatToken. Here we get the balance of the owner account by calling the contract's balanceOf() method.
    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
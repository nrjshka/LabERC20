require('dotenv').config({ path: '../.env' });

var MyToken = artifacts.require("./MyToken.sol");
var MyTokenSale = artifacts.require("./MyTokenSale.sol");
var KycContract = artifacts.require("./KycContract.sol");

module.exports = async deployer => {
  let addr = await web3.eth.getAccounts();

  await deployer.deploy(MyToken, Number(process.env.INITIAL_TOKENS));
  await deployer.deploy(KycContract);
  await deployer.deploy(MyTokenSale, 1, addr[0], MyToken.address, KycContract.address);

  let tokenInstance = await MyToken.deployed();
  await tokenInstance.transfer(MyTokenSale.address, Number(process.env.INITIAL_TOKENS));
};

var MyToken = artifacts.require("./MyToken.sol");
var MyTokenSale = artifacts.require("./MyTokenSale.sol");

module.exports = function(deployer) {
  let addr = await web3.eth.getAccounts();

  await deployer.deploy(MyToken, 1000000000);
  await deployer.deploy(MyTokenSale, 1, addr[0], MyToken.address);

  let tokenInstance = await MyToken.deployed();
  await tokenInstance.transfer(MyTokenSales.address, 1000000000);
};

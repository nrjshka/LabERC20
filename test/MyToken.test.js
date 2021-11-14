const Token = artifacts.require("MyToken");

const { expect } = require("chai");
var chai = require("chai");

const BN = web3.utils.BN;

const chainBN = require("chai-bn")(BN);
chai.use(chainBN);

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

contract("Token Test", async accounts => {
  const [initialHolder, recipient, anotherAccount] = accounts;

  it("All tokens should be on my account", async () => {
    let instance = await Token.deployed();
    let totalSupply = await instance.totalSupply();

    await expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply);
  });
});
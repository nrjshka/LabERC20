require('dotenv').config({ path: '../.env' });

const Token = artifacts.require("MyToken.sol");

const chai = require("./chaisetup.js");
const BN = web3.utils.BN;
const expect = chai.expect;

contract("Token Test", accounts => {
  const [initialHolder, recipient, anotherAccount] = accounts;

  beforeEach(async () => {
    this.myToken = await Token.new(process.env.INITIAL_TOKENS);
  });

  it("All tokens should be on my account", async () => {
    let instance = this.myToken;
    let totalSupply = await instance.totalSupply();

    return expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply);
  });
});
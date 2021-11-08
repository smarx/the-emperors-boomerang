const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Boomerang", function () {
  it("should get a boomerang", async function () {
    const [me, smarx] = await ethers.getSigners();

    const Boomerang = await ethers.getContractFactory("Boomerang");
    const boomerang = await Boomerang.connect(smarx).deploy();
    await boomerang.deployed();

    // no boomerang yet
    expect(await boomerang.balanceOf(await me.getAddress())).to.equal(0);


    const Thief = await ethers.getContractFactory("Thief");
    const thief = await Thief.deploy();
    await thief.deployed();
    // DO SOMETHING COOL HERE

    // now you have a boomerang
    expect(await boomerang.balanceOf(await me.getAddress())).to.equal(1);
  });
});

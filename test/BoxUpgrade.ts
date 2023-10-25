// test/Box.test.js
// Load dependencies

import { expect } from "chai";
import {ethers, upgrades} from "hardhat";

describe("Box Upgrade", function() {
  it('Should create a Box and upgrade it with BoxV2 using proxy', async () => {
    const Box = await ethers.getContractFactory("Box");
    const BoxV2 = await ethers.getContractFactory("BoxV2");

    const instance = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
    const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);

    let value = await upgraded.retrieve();
    expect(value.toString()).to.equal('42');
    await upgraded.increment();
     value = await upgraded.retrieve();
    expect(value.toString()).to.equal('43');
  });
});

describe("Box beacon Upgrade", function() {
  it('Should create a Box and upgrade it with BoxV2 using beacon', async () => {
    const Box = await ethers.getContractFactory("Box");
    const BoxV2 = await ethers.getContractFactory("BoxV2");

    const beacon = await upgrades.deployBeacon(Box);
    const instance = await upgrades.deployBeaconProxy(beacon, Box, [42], { initializer: 'store' });

    await upgrades.upgradeBeacon(beacon, BoxV2);
    const upgraded = BoxV2.attach(instance.address);

    let value = await upgraded.retrieve();
    expect(value.toString()).to.equal('42');


    await upgraded.increment();
    value = await upgraded.retrieve();
    expect(value.toString()).to.equal('43');
  });
});
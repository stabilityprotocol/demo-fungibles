import { loadFixture } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("ERC20Factory", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployErc20Factory() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.viem.getWalletClients();

    const erc20Factory = await hre.viem.deployContract("ERC20Factory");

    const publicClient = await hre.viem.getPublicClient();

    return {
      erc20Factory,
      owner,
      otherAccount,
      publicClient,
    };
  }

  describe("Deployment", function () {
    it("Should deploy an instance", async function () {
      const { erc20Factory } = await loadFixture(deployErc20Factory);
      expect(await erc20Factory.read.tokenCount()).to.equal(0n);
    });
  });

  describe("ERC20", function () {
    it("deployERC20 - Should deploy a token", async function () {
      const { erc20Factory, publicClient, owner } = await loadFixture(
        deployErc20Factory
      );

      const newTokenHash = await erc20Factory.write.deployERC20([
        "test",
        "TEST",
      ]);

      await publicClient.waitForTransactionReceipt({ hash: newTokenHash });

      // get the withdrawal events in the latest block
      const erc20Events = await erc20Factory.getEvents.ERC20Created();
      expect(erc20Events).to.have.lengthOf(1);
      expect(erc20Events[0].args.owner?.toLowerCase()).to.equal(
        owner.account.address
      );
      expect(erc20Events[0].args.contractIndex).to.equal(0n);

      const erc20Address = erc20Events[0].args.tokenContract;

      expect(await erc20Factory.read.tokenCount()).to.equal(1n);
      expect(await erc20Factory.read.indexToContract([0n])).to.equal(
        erc20Address
      );
    });

    it("deployAndMintERC20 - Should deploy a token and mint", async function () {
      const { erc20Factory, publicClient, owner } = await loadFixture(
        deployErc20Factory
      );

      const newTokenHash = await erc20Factory.write.deployAndMintERC20([
        "test",
        "TEST",
        BigInt(1),
      ]);

      await publicClient.waitForTransactionReceipt({ hash: newTokenHash });

      // get the withdrawal events in the latest block
      const erc20Events = await erc20Factory.getEvents.ERC20Created();
      expect(erc20Events).to.have.lengthOf(1);
      expect(erc20Events[0].args.owner?.toLowerCase()).to.equal(
        owner.account.address
      );
      expect(erc20Events[0].args.contractIndex).to.equal(0n);
      const erc20Address = erc20Events[0].args.tokenContract;

      const erc20MintEvents = await erc20Factory.getEvents.ERC20Minted();
      expect(erc20MintEvents).to.have.lengthOf(1);
      expect(erc20MintEvents[0].args.amount).to.equal(1n);
      expect(erc20MintEvents[0].args.target?.toLowerCase()).to.equal(
        owner.account.address
      );
      expect(erc20MintEvents[0].args.tokenContract).to.equal(erc20Address);

      expect(await erc20Factory.read.tokenCount()).to.equal(1n);
      expect(await erc20Factory.read.indexToContract([0n])).to.equal(
        erc20Address
      );
    });
  });
});

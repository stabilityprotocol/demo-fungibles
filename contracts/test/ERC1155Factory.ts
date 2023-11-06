import { loadFixture } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("ERC1155Factory", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployErc1155Factory() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.viem.getWalletClients();

    const erc1155Factory = await hre.viem.deployContract("FactoryERC1155");

    const publicClient = await hre.viem.getPublicClient();

    return {
      erc1155Factory,
      owner,
      otherAccount,
      publicClient,
    };
  }

  describe("Deployment", function () {
    it("Should deploy an instance", async function () {
      const { erc1155Factory } = await loadFixture(deployErc1155Factory);
      expect(await erc1155Factory.read.tokenCount()).to.equal(0n);
    });
  });

  describe("ERC1155", function () {
    it("deployERC1155 - Should deploy a token", async function () {
      const { erc1155Factory, publicClient, owner } = await loadFixture(
        deployErc1155Factory
      );

      const newTokenHash = await erc1155Factory.write.deployERC1155([
        "test",
        "https://google.com",
      ]);

      await publicClient.waitForTransactionReceipt({ hash: newTokenHash });

      // get the withdrawal events in the latest block
      const erc1155events = await erc1155Factory.getEvents.ERC1155Created();
      expect(erc1155events).to.have.lengthOf(1);
      expect(erc1155events[0].args.owner?.toLowerCase()).to.equal(
        owner.account.address
      );
      expect(erc1155events[0].args.contractIndex).to.equal(0n);

      const erc20Address = erc1155events[0].args.tokenContract;

      expect(await erc1155Factory.read.tokenCount()).to.equal(1n);
      expect(await erc1155Factory.read.indexToContract([0n])).to.equal(
        erc20Address
      );
    });

    it("deployAndMintERC1155 - Should deploy a token and mint", async function () {
      const { erc1155Factory, publicClient, owner } = await loadFixture(
        deployErc1155Factory
      );

      const newTokenHash = await erc1155Factory.write.deployAndMintERC1155([
        "test",
        "https://google.com",
      ]);

      await publicClient.waitForTransactionReceipt({ hash: newTokenHash });

      // get the withdrawal events in the latest block
      const erc20Events = await erc1155Factory.getEvents.ERC1155Created();
      expect(erc20Events).to.have.lengthOf(1);
      expect(erc20Events[0].args.owner?.toLowerCase()).to.equal(
        owner.account.address
      );
      expect(erc20Events[0].args.contractIndex).to.equal(0n);
      const erc1155Address = erc20Events[0].args.tokenContract;

      const erc20MintEvents = await erc1155Factory.getEvents.ERC1155Minted();
      expect(erc20MintEvents).to.have.lengthOf(1);
      expect(erc20MintEvents[0].args.amount).to.equal(1n);
      expect(erc20MintEvents[0].args.target?.toLowerCase()).to.equal(
        owner.account.address
      );
      expect(erc20MintEvents[0].args.tokenContract).to.equal(erc1155Address);

      expect(await erc1155Factory.read.tokenCount()).to.equal(1n);
      expect(await erc1155Factory.read.indexToContract([0n])).to.equal(
        erc1155Address
      );
    });
  });
});

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./ERC20Token.sol";

/**
 * @title ERC20Factory
 * @dev This contract is a factory for ERC20 tokens. It allows for the deployment and minting of new ERC20 tokens.
 */
contract ERC20Factory {
    uint256 public tokenCount; // Total number of ERC20 tokens deployed
    mapping(uint256 => address) public indexToContract; // Mapping of token index to token contract address

    event ERC20Created(
        address owner,
        address tokenContract,
        uint contractIndex
    );
    event ERC20Minted(address target, address tokenContract, uint amount);

    /**
     * @dev Deploys a new ERC20 token with the provided name and URI.
     * Emits an ERC20Created event upon creation.
     * @param _contractName The name of the ERC20 token.
     * @param _symbol The URI for the token's metadata.
     * @return The address of the newly created ERC20 token.
     */
    function deployERC20(
        string memory _contractName,
        string memory _symbol
    ) public returns (address) {
        ERC20Token t = new ERC20Token(_contractName, _symbol);
        tokenCount++;
        indexToContract[tokenCount - 1] = address(t);
        emit ERC20Created(msg.sender, address(t), tokenCount - 1);
        return address(t);
    }

    /**
     * @dev Mints a specified amount of a specific ERC20 token.
     * Emits an ERC20Minted event upon minting.
     * @param _contractIndex The index of the ERC20 token in the factory's token array.
     * @param amount The amount of the token to mint.
     */
    function mintERC20(uint _contractIndex, uint256 amount) public {
        ERC20Token contractTarget = ERC20Token(indexToContract[_contractIndex]);
        contractTarget.mint(msg.sender, amount);
        emit ERC20Minted(msg.sender, address(contractTarget), amount);
    }

    /**
     * @dev Deploys a new ERC20 token with the provided name and URI, and mints a single token.
     * @param _contractName The name of the ERC20 token.
     * @param _symbol The URI for the token's metadata.
     * @return The address of the newly created ERC20 token.
     */
    function deployAndMintERC20(
        string memory _contractName,
        string memory _symbol,
        uint256 _mintAmount
    ) public returns (address) {
        address new1155 = deployERC20(_contractName, _symbol);
        mintERC20(tokenCount - 1, _mintAmount);
        return new1155;
    }
}

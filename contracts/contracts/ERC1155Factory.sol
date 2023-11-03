// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./ERC1155Token.sol";

/**
 * @title FactoryERC1155
 * @dev This contract is a factory for ERC1155 tokens. It allows for the deployment and minting of new ERC1155 tokens.
 */
contract FactoryERC1155 {
    uint256 public tokenCount; // Total number of ERC1155 tokens deployed
    mapping(uint256 => address) public indexToContract; // Mapping of token index to token contract address

    event ERC1155Created(
        address owner,
        address tokenContract,
        uint contractIndex
    );
    event ERC1155Minted(address target, address tokenContract, uint amount);

    /**
     * @dev Deploys a new ERC1155 token with the provided name and URI.
     * Emits an ERC1155Created event upon creation.
     * @param _contractName The name of the ERC1155 token.
     * @param _uri The URI for the token's metadata.
     * @return The address of the newly created ERC1155 token.
     */
    function deployERC1155(
        string memory _contractName,
        string memory _uri
    ) public returns (address) {
        ERC1155Token t = new ERC1155Token(_contractName, _uri);
        tokenCount++;
        indexToContract[tokenCount - 1] = address(t);
        emit ERC1155Created(msg.sender, address(t), tokenCount - 1);
        return address(t);
    }

    /**
     * @dev Mints a specified amount of a specific ERC1155 token.
     * Emits an ERC1155Minted event upon minting.
     * @param _contractIndex The index of the ERC1155 token in the factory's token array.
     * @param amount The amount of the token to mint.
     */
    function mintERC1155(uint _contractIndex, uint256 amount) public {
        ERC1155Token contractTarget = ERC1155Token(
            indexToContract[_contractIndex]
        );
        contractTarget.mint(msg.sender, amount);
        emit ERC1155Minted(msg.sender, address(contractTarget), amount);
    }

    /**
     * @dev Deploys a new ERC1155 token with the provided name and URI, and mints a single token.
     * @param _contractName The name of the ERC1155 token.
     * @param _uri The URI for the token's metadata.
     * @return The address of the newly created ERC1155 token.
     */
    function deployAndMintERC1155(
        string memory _contractName,
        string memory _uri
    ) public returns (address) {
        address new1155 = deployERC1155(_contractName, _uri);
        mintERC1155(tokenCount - 1, 1);
        return new1155;
    }
}

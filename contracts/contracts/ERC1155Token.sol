// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title ERC1155Token
 * @dev This contract is an implementation of the ERC1155 token standard with ownership functionality.
 */
contract ERC1155Token is ERC1155, Ownable {
    /**
     * @dev The name of the ERC1155 token.
     */
    string public name;
    /**
     * @dev A counter of the total number of mints.
     */
    uint256 public id = 0;

    /**
     * @dev The constructor is executed when the factory contract calls its own deployERC1155 method.
     * @param _contractName The name of the ERC1155 token.
     * @param _uri The URI for the token's metadata.
     */
    constructor(string memory _contractName, string memory _uri) ERC1155(_uri) {
        name = _contractName;
    }

    /**
     * @dev Changes the metadata URI. Only the owner can call this function.
     * @param newuri The new URI for the token's metadata.
     */
    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    /**
     * @dev Mints a specified amount of a specific ERC1155 token.
     * @param account The address to mint the token to.
     * @param amount The amount of the token to mint.
     * @return The ID of the minted token.
     */
    function mint(address account, uint256 amount) public returns (uint) {
        id++;
        _mint(account, id - 1, amount, "");
        return id - 1;
    }
}

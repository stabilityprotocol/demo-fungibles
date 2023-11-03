// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title ERC20Token
 * @dev This contract is an implementation of the ERC20 token standard with burnable and ownership functionality.
 */
contract ERC20Token is ERC20, ERC20Burnable, Ownable {
    /**
     * @dev The constructor is executed upon deployment of the contract.
     * It mints an initial amount of tokens to the address deploying the contract.
     * @param name The name of the ERC20 token.
     * @param symbol The symbol of the ERC20 token.
     */
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    /**
     * @dev Mints a specified amount of tokens to a specific address.
     * @param to The address to mint the tokens to.
     * @param amount The amount of tokens to mint.
     */
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}

# demo-fungibles

This project is a comprehensive solution for creating and managing ERC20 and ERC1155 tokens using Solidity, a programming language for Ethereum smart contracts. The project leverages the OpenZeppelin library, which provides secure and community-audited implementations of ERC20 and ERC1155 standards. The ERC20 tokens are fungible, meaning each token is identical to every other token; this is perfect for creating cryptocurrencies. On the other hand, the ERC1155 tokens are a new standard of Ethereum tokens that can represent both fungible and non-fungible tokens.

The project is structured into two main directories: `app` and `contracts`. The `app` directory contains a front-end application built with React and TypeScript, providing a user-friendly interface for interacting with the tokens. The `contracts` directory contains the Solidity smart contracts for the ERC20 and ERC1155 tokens. These contracts include features such as minting new tokens and transferring tokens between addresses. This project serves as a robust starting point for any developer looking to create their own ERC20 or ERC1155 tokens.

## App

The `app` directory contains the front-end application. It's built with React and TypeScript, and uses Vite for bundling and development server. ESLint is used for linting the codebase.

The `app` directory is further divided into several subdirectories:

- `infrastructure`: Contains AWS CDK scripts for provisioning cloud resources.
- `public`: Contains static files that are copied to the build folder during a build.
- `src`: Contains the source code of the application.

## Contracts

The `contracts` directory contains Solidity smart contracts for the Ethereum blockchain. It uses Hardhat for compiling contracts, running tests, and deploying to Ethereum networks.

The `contracts` directory is further divided into several subdirectories:

- `contracts`: Contains the Solidity smart contracts.
- `scripts`: Contains scripts for deploying contracts and interacting with them.
- `test`: Contains test files for the contracts.

## Getting Started

To get started with development:

1. Clone the repository.
2. Run `yarn` in both the `app` and `contracts` directories to install dependencies.
3. Start the development server in the `app` directory with `npm run dev`.
4. Compile and test contracts in the `contracts` directory with `npx hardhat compile` and `npx hardhat test`.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

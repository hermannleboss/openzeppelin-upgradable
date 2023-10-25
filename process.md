# How to setup a Web3 Project

This guide provides step-by-step instructions for setting up a Web3 project using Hardhat and the Nonic Foundation
hardhat-toolbox. Hardhat is a development environment to compile, test, and deploy your Ethereum smart contracts, while
Nonic Foundation hardhat-toolbox is a set of tools and helpers to make it easier to build, test, and deploy smart
contracts.

## 1. Project setup

### 1.1. Setup a node Project

To get started, you need to create an empty Node.js project with default options. You can do this by running the
following command in your terminal:

```shell 
npm init -y
```

This creates a package.json file in your project directory, which will keep track of all the dependencies and scripts
for your project.

### 1.2. Install Hardhat & Nonic Foundation hardhat-toolbox

Next, you need to install Hardhat and Nonic Foundation hardhat-toolbox as development dependencies. Run the following
command in your terminal:

```shell 
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
```

This installs the latest version of Hardhat and the Nonic Foundation hardhat-toolbox.

### 1.3. Setup Project

After installing Hardhat and Nonic Foundation hardhat-toolbox, you can set up your project by running the following
command in your terminal:

```shell 
npx hardhat 
```

This command creates a `hardhat.config.js` file in your project directory, which is the main configuration file for
Hardhat.

### 1.4. Importing OpenZeppelin Contracts

To use OpenZeppelin smart contracts in your project, you can install the `@openzeppelin/contracts` package by running
the
following command in your terminal:

```shell 
npm install @openzeppelin/contracts
```

This installs the latest version of the OpenZeppelin Contracts library.

### 1.4. Make Contract upgradable

If you need to create upgradable smart contract.

#### 1.4.1. Install openzeppelin/hardhat-upgrades

After installing Hardhat and the Nonic Foundation hardhat-toolbox, you also need to install Hardhat Upgrades as a
development dependency. Hardhat Upgrades is a plugin that allows you to upgrade your smart contracts in a safe and
transparent way. To install Hardhat Upgrades, run the following command in your terminal:

```shell
npm install --save-dev @openzeppelin/hardhat-upgrades
```

#### 1.4.2 Install openzeppelin/contracts-upgradeable

OpenZeppelin Contracts Upgradeable is a library of reusable smart contracts for Ethereum development that can be easily
upgraded. To install it, run the following command in your terminal:

```shell
npm install @openzeppelin/contracts-upgradeable
```

## 2. Run script

Now that you've set up your project and installed the necessary dependencies, you can start compiling your Solidity
code, testing your smart contracts, and starting an Ethereum local node.

### 2.1. Compiling Solidity

To compile your Solidity code, run the following command in your terminal:

```shell 
npx hardhat compile
```

This command compiles all the Solidity contracts in the `contracts/` directory and generates the artifacts in the
`artifacts/` directory.

### 2.2. Test the smart contract

To test your smart contract, create a `test/` directory in your project root, and add test files in the following
format: `<contract_name>.test.js`. These files should contain the tests for each contract. To run the tests, execute the
following command in your terminal:

```shell 
npx hardhat test
```

This command runs all the tests in the `test/` directory and generates a report with the results.

### 2.3 Start Ethereum local node Solidity

To start an Ethereum local node, run the following command in your terminal:

```shell 
npx hardhat node
```

This command starts a local Ethereum node with a few pre-funded accounts, which you can use for testing and development
purposes. You can interact with this node using the Hardhat console or any other Ethereum client.

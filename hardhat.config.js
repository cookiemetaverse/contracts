require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
};

/*
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('hardhat-abi-exporter');
require('hardhat-docgen');
require('hardhat-gas-reporter');
require('hardhat-spdx-license-identifier');
require('solidity-coverage');
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("./tasks/deploy_lover");
require("./tasks/deploy_raffle");
require("./tasks/deploy_tribute");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
/*
 module.exports = {
    solidity: {
      version: '0.8.4',
      settings: {
        optimizer: {
          enabled: true,
          runs: 10,
        },
      },
    },
    networks: {
      hardhat: {
        ...(process.env.FORK_MODE
          ? {
              forking: {
                url: `https://eth-${
                  process.env.alchemy || 'mainnet'
                }.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
              },
            }
          : {}),
      },
  
 /*
  mainnet: {
    url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
    accounts: [process.env.ALCHEMY_KEY],
    gas: 2900000,
    gasPrice: 220000000000
} ,}
   rinkeby: {
     url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
     accounts: [process.env.METAMASK_RINKEBY_PRIVATE_KEY],
     gas: 12000000 
    },

  ropsten: {
    url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
    accounts: [process.env.METAMASK_ROPSTEN_PRIVATE_KEY],
    
    },
    
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [process.env.METAMASK_GOERLI_PRIVATE_KEY],
      
  }
}
  abiExporter: {
    clear: true,
    flat: true,
    pretty: true,
  },

  docgen: {
    clear: true,
    runOnCompile: false,
  },

  etherscan: {
    apiKey: process.env.API_KEY,
  },

  gasReporter: {
    enabled: process.env.REPORT_GAS === 'true',
  },

  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },
};
*/
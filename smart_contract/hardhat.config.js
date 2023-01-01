// https://eth-goerli.g.alchemy.com/v2/o9vKr0LRu1NqUG4Lt9DfoNdkknemoHLG

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/o9vKr0LRu1NqUG4Lt9DfoNdkknemoHLG',
      accounts: ['dbbb3e5dd3bae7e362ac8063002737fd4d5db4d44d90c99a3ee77d9a23fa13d0']
    }
  }
}
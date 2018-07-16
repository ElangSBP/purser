module.exports = {
  rootDir: 'src',
  collectCoverageFrom: ['*.{js}', '!index.js'],
  coverageDirectory: '../coverage',
  coverageThreshold: {
    global: {
      branches: 80,
    },
  },
  moduleNameMapper: {
    '^ethers$': '<rootDir>/src/__mocks__/ethers',
    '^qrcode$': '<rootDir>/src/__mocks__/qrcode.js',
    '^ethereum-blockies$': '<rootDir>/src/__mocks__/ethereum-blockies.js',
    '^bip32-path$': '<rootDir>/src/__mocks__/bip32-path.js',
    '^ethereumjs-tx$': '<rootDir>/src/__mocks__/ethereumjs-tx.js',
  },
};

module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/App.js'],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
};

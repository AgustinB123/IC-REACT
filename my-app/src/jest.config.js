module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      "src/App.js"
    ],
    coverageDirectory: "coverage",
    coverageReporters: ["json", "lcov", "text", "clover"]
  };
  
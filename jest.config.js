module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!node_modules/**",
    "!dist/**",
    "!src/stories/*,*",
    "!src/**/*.stories*",
  ],
  collectCoverage: true,
  coverageDirectory: "./coverage/",
  coverageReporters: ["html"],
};

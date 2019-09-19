module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/public(.*)$": "<rootDir>/public/$1"
  },
};

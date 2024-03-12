module.exports = {
  preset: 'ts-jest',
  // testEnvironment: 'jsdom',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    '.*\\.vue$': '@vue/vue3-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(nuxt3|unenv))'],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)", 
    "**/?(*.)+(spec|test).[jt]s?(x)",
    "**/*.test.ts"
  ]
};

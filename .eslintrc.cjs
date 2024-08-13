module.exports = {
  extends: [
    'react-app', // React rules
    'react-app/jest', // Jest rules
  ],
  rules: {
    // Additional rules or overrides here
    'react/react-in-jsx-scope': 'off', // Disable the rule for React in scope
  },
};

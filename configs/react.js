module.exports = {
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: ['plugin:react/recommended'],
    plugins: ['react', 'react-hooks'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'react/prop-types': 'off',
        'react-hooks/rules-of-hook': 'error',
    }
};
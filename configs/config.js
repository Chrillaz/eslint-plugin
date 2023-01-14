module.exports = {
    settings: {},
	extends: [
		'eslint:recommended',
	],
	rules: {
		'block-spacing': 'error',
		'function-paren-newline': [
			'error',
			'multiline-arguments',
		],
		'keyword-spacing': 'error',
		'no-prototype-builtins': 'error',
		'sort-imports': 'error',
		'sort-keys': 'error',
	},
    parserOptions: {},
    ignorePatterns: [],
    plugins: [],
    overrides: []
};
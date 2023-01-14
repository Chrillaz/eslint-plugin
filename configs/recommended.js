const { realpathSync } = require('fs');

/**
 * Checks if package exists
 * 
 * @param { string } packageName 
 * @returns boolean
 */
function hasPackage(packageName) {
    try {
        return Boolean(require.resolve(packageName), {
            paths: [realpathSync(process.cwd())]
        });
    } catch ( error ) {
        return false;
    }
}

const config = {
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
};

if (hasPackage('typescript')) {
	config.extends.push('plugin:@chrillaz/eslint-plugin/typescript')
}

if (hasPackage('react')) {
	config.extends.push('plugin:@chrillaz/eslint-plugin/react');
}

module.exports = config;
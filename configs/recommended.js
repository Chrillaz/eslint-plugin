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
    env: {
        node: true
    },
	extends: [
		'eslint:recommended',
	],
	rules: {
		'block-spacing': 'error',
		'keyword-spacing': 'error',
		'no-prototype-builtins': 'error',
		'sort-imports': 'error',
		'sort-keys': 'error',
	},
    plugins: [],
};

if (hasPackage('typescript')) {
	config.extends.push(require.resolve('./typescript'));
}

if (hasPackage('react')) {
    config.extends.push(require.resolve('./react'));
}

if (hasPackage('prettier')) {
    config.extends.push('prettier');
    config.plugins.push('prettier');
    config.rules = {
        ...config.rules,
        'prettier/prettier': ['error']
    }

    if (hasPackage('@chrillaz/prettier-config')) {
        config.rules['prettier/prettier'].push(require('@chrillaz/prettier-config'));
    }
}

module.exports = config;
const config = require('./config');
const { glob } = require('glob');
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

if (hasPackage('typescript')) {
	config.settings['import/resolver'] = {
        node: {
            extensions: ['.js', '.tsx', '.ts', '.tsx']
        }
    };

    config.extends.push('plugin:@typescript-eslint/recommended');
    config.ignorePatterns.push('**/*.d.ts');
    config.plugins.push('@typescript-eslint');
    config.overrides.push(
        {
            files: [
                '**/*.ts',
                '**/*.tsx',
            ],
            parser: '@typescript-eslint/parser',
        }
    );

    glob('**/tsconfig.json', { cwd: realpathSync(process.cwd) }, (error, matches) => {
        if (!error) {
            config.overrides[0].parserOptions = {
                project: matches[0]
            }
        }
    });
}

if (hasPackage('react')) {
    config.settings.react = {
		version: 'detect',
	};

	config.extends.push('plugin:react/recommended');
    config.plugins.push('react');
	config.plugins.push('react-hooks');
	config.parserOptions.ecmaFeatures = {
		jsx: true,
	};

	config.rules = {
        ...config.rules,
		'react/prop-types': 'off',
		'react-hooks/rules-of-hook': 'error',
	};
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
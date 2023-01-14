const { glob } = require('glob');
const { realpathSync } = require('fs');

const config = {
	extends: [
		'plugin:@typescript-eslint/recommended',
	],
	files: [
		'**/*.ts',
		'**/*.tsx',
	],
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
};

glob('**/tsconfig.json', { cwd: realpathSync(process.cwd) }, (error, matches) => {
    if (!error) {
        config.parserOptions = {
            project: matches[0]
        }
    }
});

module.exports = config;
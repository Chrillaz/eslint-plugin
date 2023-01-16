const { glob } = require('glob');
const { realpathSync } = require('fs')

const config = {
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.tsx', '.ts', '.tsx']
            }
        }
    },
    extends: ['plugin:@typescript-eslint/recommended'],
    ignorePatterns: ['**/*.d.ts'],
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: [
                '**/*.ts',
                '**/*.tsx',
            ],
            parser: '@typescript-eslint/parser',
        }
    ]
}

glob('**/tsconfig.json', { cwd: realpathSync(process.cwd()) }, (error, matches) => {
    if (!error) {
        config.overrides[0].parserOptions = {
            project: matches[0]
        }
    }
});

module.exports = config;
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/all',
        'plugin:styled-components-a11y/recommended',
        'prettier'
    ],
    parserOptions: {
        project: ['./tsconfig.json']
    },
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: [
        'react-refresh',
        '@typescript-eslint',
        'react',
        'styled-components-a11y'
    ],
    overrides: [
        {
            files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx', '**/*.spec.js', '**/*.spec.jsx', '**/*.spec.ts', '**/*.spec.tsx'],
            rules: {
                'import/no-extraneous-dependencies': [
                    'error',
                    {
                        'devDependencies': true
                    }
                ]
            }
        }
    ],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true }
        ],
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': [
            'error',
            {
                'namedComponents': 'arrow-function',
                'unnamedComponents': 'arrow-function'
            }
        ]
    }
};

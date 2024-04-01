module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh', 'import', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'no-console': 'warn',
		'react/jsx-no-target-blank': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'import/prefer-default-export': 'off',
		'react/jsx-no-useless-fragment': 'warn',
		'no-unused-expressions': [
			'error',
			{ allowShortCircuit: true, allowTernary: true },
		],
		'react/self-closing-comp': ['error', { component: true, html: true }],
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'type',
					'object',
				],
				pathGroups: [
					{
						pattern: './assets/**',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: '~/**/components/**',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: '~/**/pages/**',
						group: 'internal',
						position: 'before',
					},
					{
						pattern: './src/utils/**',
						group: 'internal',
						position: 'after',
					},
					{
						pattern: './src/types/**',
						group: 'type',
						position: 'after',
					},
				],
				pathGroupsExcludedImportTypes: ['builtin'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
	},
};

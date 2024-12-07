export default {
	parserPreset: {
		parserOpts: {
			headerPattern: /^(.+?): (.+)$/,
			headerCorrespondence: ['type', 'subject'],
		},
	},
	rules: {
		'body-leading-blank': [2, 'always'],
		'body-max-line-length': [2, 'always', 72],
		'header-max-length': [2, 'always', 50],
		'subject-case': [2, 'always', 'sentence-case'],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-enum': [
			2,
			'always',
			[
				'🦄 new',
				'🌈 improve',
				'🦠 fix',
				'🧺 chore',
				'🚀 release',
				'📖 doc',
				'🚦 ci',
			],
		],
	},
};

module.exports = {
	apps: [
		{
			name: 'sam95link',
			script: './dist/app.js',
			autorestart: true,
			// exec_interpreter: 'node',
			// exec_mode: 'cluster',
			env: {
				NODE_ENV: 'development',
			},
			env_production: {
				NODE_ENV: 'production',
			},
			log_date_format: 'YYYY-MM-DD HH:mm Z',
			combine_logs: true,
		},
	],
};

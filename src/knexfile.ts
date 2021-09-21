// Update with your config settings.

export default {
	productsmysql: {
		client: 'mysql',
		connection: {
			host: 'localhost',
			user: 'admnin',
			password: 'admin',
			database: 'ecommerce',
		},
		migrations: { directory: __dirname + '/db/migrations' },
		seeds: { directory: __dirname + '/db/seeds' },
	},
	productsqlite: {
		client: 'sqlite3',
		connection: { filename: './productos' },
		useNullAsDefault: true,
		migrations: { directory: __dirname + '/db/migrations' },
		seeds: { directory: __dirname + '/db/seeds' },
	},
};

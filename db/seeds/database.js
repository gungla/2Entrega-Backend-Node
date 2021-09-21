import knex from 'knex';

export async function seed(knex) {
	const initProducts = [
		{
			title: 'Manzana',
			description: 'esto es una manzana',
			code: 'codigo_1234',
			price: 100,
			thumbnail: 'https://iconfinder.com',
			stock: 45,
		},
	];
	return knex('products')
		.del()
		.then(() => knex('products').insert(initProducts));
}

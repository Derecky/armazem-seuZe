import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import * as express from "express";
import { router } from "./routes";
import { Product } from "./database/entity/Product";
import { Category } from './database/entity/Category';

var cors = require('cors');

interface ProductItem {
	name: string,
	description: string,
	price: number,
	image: string,
	category: Category
}

interface CategoryItem {
	name: string
}



createConnection().then(async (connection) => {

	// create express app
	const app = express();
	app.use(cors());
	app.use(express.json());
	app.use(router);

	const data = require('./assets/products.json');
	
	data.categories.forEach(category => {
		connection.manager.save(Category, category);
	});

	data.products.forEach(product => {
		connection.manager.save(Product, product);
	});


	// start express server
	app.listen(3333, () => {
		console.log("Yeeeaahh! The server has started on port 3000. Open http://localhost:3333/users");
	});




}).catch(error => console.log(error));

import "reflect-metadata";
import { createConnection, DeepPartial, getRepository } from "typeorm";
import * as express from "express";
import { router } from "./routes";
import { Product } from "./database/entity/Product";
import { Category } from './database/entity/Category';

var cors = require('cors');

createConnection().then(async (connection) => {

	// create express app
	const app = express();
	app.use(cors());
	app.use(express.json());
	app.use(router);

	const data = require('./assets/products.json');
	
	const productRepository = getRepository(Product);
	const allProducts = await productRepository.find();

	
	if(allProducts.length === 0){

		try {
			await data.categories.forEach(async (category) => {
				await connection.manager.save(Category, category);
			});
			
			data.products.forEach(async (product) => {
				await connection.manager.save(Product, product);
			});
		} catch (err){

		}
	}


	// start express server
	app.listen(3333, () => {
		console.log("Yeeeaahh! The server has started on port 3000. Open http://localhost:3333/users");
	});




}).catch(error => console.log(error));

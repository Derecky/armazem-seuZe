import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { router } from "./routes";

var cors = require('cors');


createConnection().then(async () => {

	// create express app
	const app = express();
	app.use(cors());
	app.use(express.json());
	app.use(router);

	// start express server
	app.listen(3333, () => {
		console.log("Yeeeaahh! The server has started on port 3000. Open http://localhost:3333/users");
	});




}).catch(error => console.log(error));

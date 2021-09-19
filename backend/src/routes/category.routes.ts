import { Product } from '../database/entity/Product';
import { Router } from "express";
import { getRepository, Repository } from "typeorm";

const categoryRouter = Router();

categoryRouter.get('/', async (request, response) => {
  const categoryRepository = getRepository(Product);
  const allCategory = await categoryRepository.find();
  return response.status(201).send(allCategory);
});

export{categoryRouter}
import { Category } from '../database/entity/Category';
import { Router } from "express";
import { getRepository, Repository } from "typeorm";

const categoryRouter = Router();

categoryRouter.get('/', async (request, response) => {
  const categoryRepository = getRepository(Category);
  const allCategory = await categoryRepository.find();
  return response.status(201).send(allCategory);
});

categoryRouter.post('/', async (request, response) => {
  const categoryRepository = getRepository(Category);

  const savedCategory = await categoryRepository.save(request.body);

  return response.status(201).json({ messagem: 'Success!'});
});

export{categoryRouter}
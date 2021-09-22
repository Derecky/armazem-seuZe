import { Product } from '../database/entity/Product';
import { Router } from "express";
import { getRepository, Repository } from "typeorm";

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
  const productsRepository = getRepository(Product);
  const allProducts = await productsRepository.find();
  return response.status(201).send(allProducts);
});

productsRouter.get('/list', async (request, response) => {
  const pagina = +request.query.page || 1;
  const limite = +request.query.limit || 12;
  const start = (pagina - 1) * limite;
  const end = pagina  * limite;


  const category = request.query.category;
  
  const productsRepository = getRepository(Product);
  let allProducts =  (await productsRepository.find());
  
  if(!!category){
    console.log('Entrei aqui!')
    allProducts =  (await productsRepository.find({ where: {category: category} }));
  }
  
  return response.status(201).send({
    products: allProducts.slice(start, end),
    total: allProducts.length
  });

});

productsRouter.get('/:id', async (request, response) => {
  const productsRepository = getRepository(Product) 
  try {
    const { id } = request.params;

    const product = await productsRepository.findOne(id);
    
    if(!product) {
      throw Error()
    }
  
    return response.status(201).json({ message: 'Success.' });
  } catch (err) {
    return response.status(404).json({ message: 'Not found.' });
  }
});

productsRouter.put('/:id', async (request, response) => {
  const productsRepository = getRepository(Product);
  try {
    const { id } = request.params;

    productsRepository.update(id, request.body);
  
    return response.status(201).json({ message: 'Success.' });
  } catch (err) {
    return response.status(404).json({ message: 'Not found.' });
  }
});


productsRouter.post('/',async (request, response) => {
  const productsRepository = getRepository(Product)

  try{
    const product = await productsRepository.save(request.body)
    return response.status(200).json({ message: 'Success' })
  } catch (err){
      return response.status(401).json({ message: err })
  }
});

export { productsRouter };
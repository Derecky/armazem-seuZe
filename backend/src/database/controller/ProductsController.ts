import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";

import { Product } from '../entity/Product';

export class ProductController {

  private productsRepository = getRepository(Product);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.productsRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.productsRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.productsRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let productToRemove = await this.productsRepository.findOne(request.params.id);
    await this.productsRepository.remove(productToRemove);
  }

}
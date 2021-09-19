import {
  Entity, 
  JoinColumn, 
  PrimaryGeneratedColumn, 
  Column
} from "typeorm";


import { Product } from './Product'


@Entity()
export class Purchase {

  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn()
  product: Product;

  @Column()
  description: string;

  @Column()  
  price: number;

  @Column()
  image: string;

}
import { Category } from './Category';
import { 
    Entity, 
    JoinColumn, 
    PrimaryGeneratedColumn, 
    Column,
    ManyToOne
} from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Category)
    @JoinColumn()
    category: Category;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    image: string;

}

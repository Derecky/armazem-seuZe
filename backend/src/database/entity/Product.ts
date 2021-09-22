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

    @Column()
    name: string

    @ManyToOne(()=>Category)
    @JoinColumn()
    category: Category;

    @Column()
    description: string;

    @Column({
        type: 'float'
    })
    price: number;

    @Column()
    image: string;

}

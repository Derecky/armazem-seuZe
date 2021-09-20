import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { ProductCard } from '../../components/ProductCard';
import api from '../../server/api';
import { Category, Product } from '../../utils/types';
import {
  Container,
  Select,
  BodyContainer,
} from './styles';

const PRODUCTS: Product[] = [
  {
    id: 1,
    amount: 0,
    description: '375 ml',
    image: 'https://i.imgur.com/DLnknnW.jpeg',
    name: 'Coca Cola Lata',
    price: 3.65,
    category: {
      id: 1,
      name: 'drink'
    }

  },
  {
    id: 2,
    amount: 0,
    description: '1 L',
    image: 'https://i.imgur.com/DLnknnW.jpeg',
    name: 'Coca Cola litrão',
    price: 6.75,
    category: {
      id: 1,
      name: 'drink'
    }

  },
  {
    id: 3,
    amount: 0,
    description: '200 g',
    image: 'https://i.imgur.com/DLnknnW.jpeg',
    name: 'Pipoca',
    price: 4.75,
    category: {
      id: 2,
      name: 'food'
    }

  },
  {
    id: 4,
    amount: 0,
    description: '1 L',
    image: 'https://i.imgur.com/DLnknnW.jpeg',
    name: 'Chicletinho',
    price: 24.10,
    category: {
      id: 1,
      name: 'drink'
    }

  } 
]



export const Home: React.FC = () => {
  const [selected, setSelected] = useState<string>('all');
  const [page, setPage] = useState<number>(1)
  const [options, setOptions] = useState<Category[]>([{id: 0, name: 'all'}]);
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  

  function handleSelectCategory(event: any){
    setSelected(event?.target.value);
  }

  useEffect(() => {
    //TO DO: Ao mudar o state selected, pedir da api os produtos
  },[selected]);

  useEffect(() => {
    //Carrega as categorias da API
    async function loadCategories() {
      await api.get('/categories').then((response) => {
        const categories = [...options]
        const apiCategories: Category[] = response.data;
        apiCategories.forEach(category => {
          categories.push(category);
        })
        
        setOptions(categories);
      })
    } 

    loadCategories();
  },[]);

  return(
    <Container>

      <Header type='home'/>

      <Select value={selected} onChange={handleSelectCategory}>
        {options.map(option => (         
            <option key={option.id} value={option.name}>{option.name}</ option>
        ))}
      </Select>

      <BodyContainer>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))} 
      </BodyContainer>

      <Pagination 
        onPageChange={setPage}
        totalCountOfRegisters={1000}
        currentPage={page}
        registerPerPage={12}
      />

    </Container>
  )
}
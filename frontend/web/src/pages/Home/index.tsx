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

export const Home: React.FC = () => {
  const [selected, setSelected] = useState<string>('all');
  const [page, setPage] = useState<number>(1)
  const [options, setOptions] = useState<Category[]>([{id: 0, name: 'all'}]);
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  

  function handleSelectCategory(event: any){
    setSelected(event?.target.value);
    setPage(1);
  }

  async function loadProducts() {
    if(selected === 'all'){
      await api.get(`/products/list?&page=${page}`).then(response =>{
        response.data.products.forEach((product: Product) => {
          product.amount = 0;
        })
        setProducts(response.data.products);
        setTotal(response.data.total)
      })
    } else {
      const category = options.find(category => category.name === selected)
      await api.get(`/products/list?category=${category?.id}&page=${page}`).then(response =>{
        response.data.products.forEach((product: Product) => {
          product.amount = 0;
        })
        setProducts(response.data.products);
        setTotal(response.data.total)
      })
    }
  }

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
  }, [options]);

  useEffect(() => {
    //Carrega produtos

    loadProducts();
  }, [selected]);

  useEffect(() => {
    loadProducts();
  }, [page])

  return(
    <Container>

      <Header type='home'/>

      <Select value={selected} onChange={handleSelectCategory}>
        {options.map(option => (         
            <option key={option.id} value={option.name}>{option.name}</ option>
        ))}
      </Select>

      <BodyContainer>
        {!!products && products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))} 
      </BodyContainer>

      <Pagination 
        onPageChange={setPage}
        totalCountOfRegisters={total}
        currentPage={page}
        registerPerPage={12}
      />

    </Container>
  )
}
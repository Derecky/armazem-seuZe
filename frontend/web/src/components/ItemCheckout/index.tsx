import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { Product } from '../../utils/types';
import {
  ItemContainer,
  ItemTitle,
  CountButton,
  ButtonLeft,
  ButtonRight,
  QuantityInput,
  Price,
  Divider,
} from './styles';

interface ItemCheckoutProps {
  product: Product
}

export function ItemCheckout({ product }:ItemCheckoutProps) {

  const { amount, name, price } = product;
  const { updateProduct } = useCart()

  function handleAdd(){
    updateProduct(product, 'plus');
  }

  function handleSub(){
    updateProduct(product, 'minus');
  }

  function handleChange(e: any){
    updateProduct(product, 'set', Number(e.target.value));
  }

  return(
    <>
      <ItemContainer>
        <ItemTitle>{name}</ItemTitle>

        <CountButton>
          <ButtonLeft onClick={handleSub}>
            –
          </ButtonLeft>
          <QuantityInput 
            value={amount} 
            onChange={handleChange}
            type="number"  
          />
          <ButtonRight onClick={handleAdd}>
            +
          </ButtonRight>
        </CountButton>
          
        
        
        <Price>
          {
            (amount*price)
            .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
          }
        </Price>
      </ItemContainer>
      <Divider />

    </>
  );
};
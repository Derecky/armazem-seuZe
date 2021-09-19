import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { Product } from '../../utils/types';
import {
  CardContainer,
  CardImageContainer,
  CardImage,
  CardInfo,
  Title,
  Description,
  PriceContainer,
  BRLCentavo,
  Real,
  ButtonContainer,
  Button,
} from './styles';

 interface ProductCartProps{
   product: Product;
 }

export function ProductCard({product}: ProductCartProps) {

  const { add, cart } = useCart();

  const real = Math.floor(product.price * 100 / 100)
  const centavoAux = product.price.toString();
  

  function handleAddProductOnChart(){
    add(product);
  }

  /* Não sei pra quê inventei os tamanhos diferentes no preço
    Esse useEffect é só para organizar o centavo.
    Coloquei o state aqui, porque em outro projeto, não é necessário usar (provavelmente)
  */
  const [centavo, setCentavo] = useState('');
  useEffect(() => {
    console.log(centavoAux);
    if(centavoAux[centavoAux.length - 1] === '.'){
      
      setCentavo('00') ;
    }

    if(centavoAux[centavoAux.length - 2] === '.'){
      setCentavo(centavoAux[centavoAux.length - 1] + '0');
      console.log('entrei aqui')
    }

    if(centavoAux[centavoAux.length - 3] === '.') {
      setCentavo(centavoAux[centavoAux.length - 2] + centavoAux[centavoAux.length - 1])
    }
  }, [])

  return(
    <CardContainer>
      <CardImageContainer>
        <CardImage src={product.image} alt="food"/>
      </CardImageContainer>

      <CardInfo>
        <Title>{product.name}</Title>
        <Description>• {product.description}</Description>
        <PriceContainer>
          <BRLCentavo>R$</BRLCentavo>
          <Real>{real}</Real>
          <BRLCentavo>,{centavo}</BRLCentavo>
        </PriceContainer>
        <ButtonContainer>
          <Button
            onClick={handleAddProductOnChart}
          >Adicionar produto</Button>
        </ButtonContainer>
      </CardInfo>

    </CardContainer>
  );
}
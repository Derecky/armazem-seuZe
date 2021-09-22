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

  const { add } = useCart();

   
  const real = Math.floor(product.price * 100 / 100)  
  const centavoAux = product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  const centavo = centavoAux.slice( centavoAux.length - 2 , centavoAux.length)

  
  function handleAddProductOnChart(){
    add(product);
  }

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
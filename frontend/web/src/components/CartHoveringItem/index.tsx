import { Product } from "../../utils/types";
import { Divider } from "../ItemCheckout/styles";

import {
  Container,
  Field,
  ItemName,
  InfoItemContainer,
  InfoContainer,
  Text,
  Amount,
} from './styles';

interface CartHoveringItemProps {
  product: Product;
}

export function CartHoveringItem({ product }: CartHoveringItemProps) {

  const {name, amount, price} = product;

  return(
    <Container>
        <ItemName>{name}</ItemName>
        
        <InfoItemContainer>
          
          <InfoContainer>
            <Text>Qtd.</Text>
            <Amount>{amount}</Amount>
          </InfoContainer>

          <InfoContainer>
            <Text>Total</Text>
            <Amount>
              {(amount * price)
              .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
            </Amount>
          </InfoContainer>

        </InfoItemContainer>

    </Container>
  );
}
import { Header } from '../../components/Header';
import { ItemCheckout } from '../../components/ItemCheckout';
import { Modal } from '../../components/Modal';
import { useCart } from '../../hooks/useCart';
import {
  Container,
  BodyContainer,
  Title,
  InfoContainer,
  Icon,
  MarketContainer,
  Text,
  TimeInfo,
  ReviewText,
  ReviewItemsContainer,
  TotalCotainer,
  TotalText,
  ButtonContainer,
  Alert,
  Info,
  Image,
  ButtonLeave,
  Title2
} from './styles';

import Empty from '../../assets/empty.svg';
import { useState } from 'react';

export function Checkout() {
  const [isBuying, setIsBuying] = useState(false);

  const { cart, total, time } = useCart();

  return (
    <Container>
      <Header type="checkout"/>

      <BodyContainer>
        <Title>Finalizar pedido</Title>
        <InfoContainer>
          <Icon />
          <MarketContainer>
            <Text>Armazém do seu zé</Text>
            <TimeInfo>
               {time.m < 10? '0' + time.m.toString(): time.m.toString()}
              :{time.s < 10? '0' + time.s.toString(): time.s.toString()} min restantes</TimeInfo>
          </MarketContainer>
        </InfoContainer >
        
        <ReviewText>Revise seus itens</ReviewText>

        <ReviewItemsContainer>
          
          {cart.map((product) => {
            return(
              <ItemCheckout
                key={product.id} 
                product={product}
              />
            )
          })}
          

          <TotalCotainer>
            <TotalText>TOTAL</TotalText>
            <TotalText>
              {
                total
                .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
              }
            </TotalText>
          </TotalCotainer>

        </ReviewItemsContainer>

        <ButtonContainer>
          <Modal buying={setIsBuying}/>
        </ButtonContainer>

      </BodyContainer>

      {cart.length === 0 && !isBuying && (
        <Alert>
          <Info>
            <Title2>Seu carrinho está vazio...</Title2>
            <Image src={Empty}/>
            <ButtonLeave to='/'>
              <TotalText>
                Voltar as compras
              </TotalText>
            </ButtonLeave>
          </Info>
        </Alert>
      )}
      
    </Container>

  )
}
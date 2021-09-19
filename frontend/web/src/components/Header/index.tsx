import {
  Container,
  HeaderField,
  FieldText,
  Text1,
  Text2,
  Text3,
  Text4,
  ImageContainer,
  Bullet,
  Image,
  ShowCartList,
  Title,
  TooltipContainer,
  Arrow,
} from './styles';


import CartLogo from '../../assets/cart.svg';
import Back from '../../assets/back.svg';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CartHoveringItem } from '../CartHoveringItem';

interface HeaderProps {
  type: 'checkout' | 'home';
}

export function Header({ type }:HeaderProps) {

  const [showCart, setShowCart] = useState(false)

  const { cart } = useCart();

  function handleShowCart(){
    setShowCart(true);
  }

  function handleUnShowCart(){
    setShowCart(false);
  }

  return(
    <Container>
      <HeaderField>
        <ImageContainer>
          {type === 'checkout' && (
            <Link to="/">
              <Image 
                src={Back} 
                alt="back"
                onClick={() => {/* TO DO */}}
              />
            </Link>
          )}
        </ImageContainer >

       <Link to="/" style={{textDecoration: "none"}}>
        <FieldText>
          <Text1>Armazém</Text1>
          <Text2>.</Text2>
          <Text3>seu</Text3>
          <Text4>Zé</Text4>
        </FieldText>
       </Link>
        
        <ImageContainer
          onMouseOver={handleShowCart}
          onMouseOut={handleUnShowCart}
        >
          
          {type === 'home' && (
            <Link to="/checkout">
              <Bullet>{cart.length}</Bullet>
              <Image src={CartLogo} alt="Cart Logo" />
            </Link>
          )}
        </ImageContainer>
      </HeaderField>

      { showCart &&
        <TooltipContainer>
          <Arrow />
          <ShowCartList>
            
            {cart.length >= 1? (<Title>Produtos no carrinho:</Title>) : (<Title>O carrinho está vazio!</Title>)}
            {cart.length >= 1 && cart.map(product => (
              <CartHoveringItem  product={product}/>
            ))}
          </ShowCartList>
        </TooltipContainer> 
      }

    </Container>
  );
}
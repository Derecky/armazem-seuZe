import { useState } from 'react';
import {
  Button,
  ModalOverlay,
  ContainerModal,
  Title,
  Image,
  ButtonContainer,
  CloseButton,
} from './styles';

import Success from '../../assets/success.svg';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

interface ModalProps {
  buying: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({buying}: ModalProps) {
  const [ isModalVisible, setIsModalVisible ] = useState<boolean>(false);

  const { clear } = useCart();

  function handleChangeVisibility(e: any){
    setIsModalVisible(!isModalVisible);
    buying(true);
    clear();
  }
  // function handleOverlayClose(e: any){
  //   if(e.target.id === 'overlay'){
  //     setIsModalVisible(!isModalVisible);
  //   }
  // }

  return (
    <>
      <Button onClick={handleChangeVisibility}>Finalizar Compra</Button>
      {isModalVisible && (
        <ModalOverlay id="overlay" >
          <ContainerModal >
            <Title>Pedido Realizado com sucesso!</Title>
            <Image src={Success}/>
            <ButtonContainer>
              <Link to="/">
                <CloseButton onClick={handleChangeVisibility}>Fechar</CloseButton>
              </Link>        
            </ButtonContainer>

          </ContainerModal>
        </ModalOverlay>
      )}
    </>
  );
};
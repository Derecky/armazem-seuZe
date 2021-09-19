import ReactDOM from 'react-dom';
import App from './App';
import CartProvider from './hooks/useCart';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <CartProvider>
    <GlobalStyle />
    <App />
  </CartProvider>,
  document.getElementById('root')
);

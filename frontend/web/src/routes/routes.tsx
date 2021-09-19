import { BrowserRouter, Route } from 'react-router-dom';
import { Checkout } from '../pages/Checkout';
import { Home } from '../pages/Home';

export function Routes() {
  return(
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={Checkout} path="/checkout" />
    </BrowserRouter>
  );
}
import {
  useContext,
  createContext,
  useState,
  useEffect
} from 'react';

import { Product } from '../utils/types';

interface ICartContextProps {
  cart: Product[];
  total: number;
  add: (item: Product) => void;
  updateProduct: (item: Product, type: 'plus' | 'minus' | 'set', value?: number) => void;
  time: {
    s: number, 
    m: number, 
  };
  clear: () => void 
}

const CartContext = createContext({} as ICartContextProps);

export default function CartProvider({children}:any){
  const [cart, setCart] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  function updateProduct ( item: Product, type: 'plus' | 'minus' | 'set', value?: number ){
    const newCart = [...cart];

    if(type === 'plus'){
      newCart.find(product => {
        if(item === product){
          product.amount = product.amount + 1;
        }
      })
      
      setCart(newCart)
    } 
    if(type === 'minus') {
      newCart.find(product => {
        if(item === product){
          product.amount = product.amount - 1;
        }
      })
      
      setCart(newCart)
    }
    if(type === 'set') {
      newCart.find(product => {
        if(item === product){
          product.amount = Number(value);
        }
      })
      
      setCart(newCart)
    }
  }

  function add (item: Product){
    const newCart = [...cart];

    const itemAlreadyExists = newCart.find((product) => product === item);
    
    if(!!itemAlreadyExists){
      newCart.forEach((product) => {
        if(product === item){
          product.amount = product.amount + 1;
        }
      });
    } else {
      if(item.amount > 0){
        item.amount = 0;
      }
      item.amount = item.amount + 1;
      newCart.push(item);
    }
    

    setCart(newCart);
  }

  // function remove(item: Product){
  //   const newCart = cart.filter((product) => item.id !== product.id )
  //   setCart([...newCart]);
  // }

  function clear(){
    const newCart:Product[] = [...cart]
    newCart.forEach(product => product.amount = 0);
    setCart(newCart);
    setCart([]);
  }


  const [time, setTime] = useState({s:0, m:15});
  const [interv, setInterv] = useState<any>();
  const [watch, setWatch] = useState(true);
 

  const start = () => {
    run();
    setInterv(setInterval(run, 1000));
  };

  var updatedS = time.s, updatedM = time.m;

  const run = () => {
    if(updatedM === 0 && updatedS === 0){
      clear()
      return setTime({s: 0, m: 15})
    }

    if(updatedS === 0){
      updatedS = 60;
      updatedM--;
    }

    updatedS--;
    return setTime({s:updatedS, m:updatedM});
  };

  // const stop = () => {
  //   clearInterval(interv);
  // };

  const reset = () => {
    clearInterval(interv);
    setTime({ s:0, m:15})
  };

  // const resume = () => start();

  useEffect(() => {
    if(cart.length >= 1 && watch === true){
      setWatch(false);
      start();
    } 
    
    if( cart.length === 0 && watch === false){
      reset();
      setWatch(true);
    }
  }, [cart]);

  useEffect(() => {
    let newTotal = 0;
    cart.forEach(product => {
      if(product.amount === 0){
        const newCart = cart.filter(item => item !== product)

        setCart(newCart);
      }

      newTotal = (product.amount * product.price) + newTotal;
    })
    setTotal(newTotal);
  }, [cart])


  const store: ICartContextProps = {
    add,
    cart,
    total,
    updateProduct,
    time,
    clear,
  }

  return (
    <CartContext.Provider value={store}>
      {children}
    </CartContext.Provider>
  )
}



export function useCart() {
  const context = useContext(CartContext);

  const { 
    cart,
    add, 
    total,
    updateProduct,
    time,
    clear
  } = context;

  return {
    cart,
    add,
    total,
    updateProduct,
    time,
    clear
  }
}
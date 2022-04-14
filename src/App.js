import { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  // const [cartIsShown, setCartIsShown] = useState(true);

  // const showCartHandler = () => {
  //   setCartIsShown(true);
  // };

  // const hideCartHandler = () => {
  //   setCartIsShown(false);
  // };

  return (
   <div>
     {showCart && <Cart />}
      <Header  />
      <main>
        <Meals />
      </main>
      </div>
    
  );
}

export default App;

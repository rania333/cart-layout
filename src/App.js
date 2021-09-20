import { useState } from 'react';
import './App.css';
import AdjacentHeader from './Components/Layout/AdjacentHeader';
import Header from './Components/Layout/Header';
import IMG1 from './Mask Group 3.png';
import IMG2 from './Mask Group 4.png';
import Payment from './Pages/Payment';
import ShoppingCart from './Pages/ShoppingCart';

function App() {
  const data = [{
    img: IMG1,
    name: 'T-Shirt Summer Vibes',
    code: '#261311',
    color: 'White',
    size: 'XL',
    Amount: 1,
    price: '89.99'},
    {
    img: IMG2,
    name: 'Basic Slim Fit T-Shirt',
    code: '#212315',
    color: 'Black',
    size: 'XL',
    Amount: 1,
    price: '69,99'
    }];
  const [products, Setproducts] = useState(data);
  console.log(products);
  return (
    <div className="App">
      {/* <Header/>
      <AdjacentHeader> hey </AdjacentHeader> */}
      <ShoppingCart products={products}/>
      <Payment products={products}/>
    </div>
  );
}

export default App;

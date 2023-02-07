// Modules
import firebase from './firebase';
import {useEffect, useState} from 'react';
import {getDatabase, ref, onValue} from 'firebase/database';
// Components
import Header from "./Components/Header";
import Cart from "./Components/Cart";
// Assets
import './App.css';

function App() {
  // products state for inventory
  const [products, setProducts] = useState([]);
  // cart state for cart items
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)
    onValue(dbRef, (response) => {
      const newState = [];
      const data = response.val();
      for (let key in data) {
        newState.push(data[key]);
      }
      setProducts(newState);
    })
  }, [])


  const handleAddToCart = (product) => {
    const copy = [...cart]
    copy.push(product)
    setCart(copy)
  }

  return (
    <div className="App">
      <Header itemsInCart={cart.length}/>
      <div className='wrapper'>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <p className='product-name'>{product.name}</p>
                <p className='price'>Price: {product.price} GP</p>
                <button onClick={() => { handleAddToCart(product) }}>Add To Cart</button>
              </li>
            )
          })}
        </ul>
        <Cart />
      </div>
    </div>
  );
}

export default App;

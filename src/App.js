// Modules
import firebase from './firebase';
import {useEffect, useState} from 'react';
import {getDatabase, ref, onValue, push} from 'firebase/database';
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
    const dbRef = ref(database, "/inventory")
    const cartRef = ref(database, "/cart")
    // pulling inventory data
    onValue(dbRef, (response) => {
      const newState = [];
      const data = response.val();
      for (let key in data) {
        newState.push(data[key]);
      }
      setProducts(newState);
    })
    // pulling cart data
    onValue(cartRef, (response) =>{
      const newState = [];
      const cartData = response.val();
      for (let key in cartData) {
        newState.push({
          fbID: key, 
          data: cartData[key]
      });
      }
      setCart(newState);
    })
  }, [])

  const handleAddToCart = (product) => {
    const database = getDatabase(firebase)
    const cartRef = ref(database, "/cart")
    push(cartRef, product)
  }

  return (
    <div className="App">
      <Header itemsInCart={cart.length}/>
      <div className='wrapper'>
        <ul className='inventory'>
          {products.map((product) => {
            return (
              <li className="inventory" key={product.id}>
                <p className='product-name'>{product.name}</p>
                <p className='price'>Price: {product.price} GP</p>
                <button className="add-to-cart" onClick={() => { handleAddToCart(product) }}>Add To Cart</button>
              </li>
            )
          })}
        </ul>
        <Cart cart={cart}/>
      </div>
    </div>
  );
}

export default App;

// Modules
import firebase from './firebase';
import {useEffect, useState} from 'react';
import {getDatabase, ref, onValue} from 'firebase/database';
// Components
import Header from "./Components/Header";
// Assets
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);

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

  const handleAddToCart = () => {
    setCart()
  }

  return (
    <div className="App">
      <Header />
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <p>{product.name}</p>
              <p>{product.price} GP</p>
              <button onClick={handleAddToCart}>Add To Cart</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;

import firebase from '../firebase';
import { getDatabase, ref, remove } from 'firebase/database';

const Cart = (props) => {
  const handleRemoveCartItem = (itemID) => {
    const cartDatabase = getDatabase(firebase);
    const itemRemoveRef = ref(cartDatabase, `/cart/${itemID}`)
    remove(itemRemoveRef)
  }
  return (
    <aside className="cart">
      <h3>Your Cart</h3>
      {props.cart.length === 0 && <p className="empty"> - Cart Is Empty - </p>}
      <ul className="cart-container">
        {props.cart.map((cartItem) => {
          return (
            <li className="cart-list" key={cartItem.fbID}>
              <p className='cart-name'>💫 {cartItem.data.name}</p>
              <p className="cart-price">. . . {cartItem.data.price} GP</p>
              <button className="remove" onClick={() => { handleRemoveCartItem(cartItem.fbID)}}>🗑️</button>
            </li>
          )
        })}
      </ul>
      <p>Thank you for shopping!</p>
    </aside>
  )
}

export default Cart;
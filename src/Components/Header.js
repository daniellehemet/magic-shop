import shoppingcart from '../shoppingcart.svg';

const Header = (props) => {
  return (
    <div className="header">
      <div className='header-wrapper'>
        <h2>Welcome adventurers...</h2>
        <h1>MagicShop</h1>
        <div className="cart-counter">
          <p>{props.itemsInCart} items in cart</p>
          <img src={shoppingcart} alt="shopping cart" />
        </div>
      </div>
    </div>
  )
}

export default Header;
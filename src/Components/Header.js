const Header = (props) => {
  return (
    <div className="header">
      <h2>Welcome adventurers...</h2>
      <h1>MagicShop</h1>
      <p>{props.itemsInCart} items in cart</p>
    </div>
  )
}

export default Header;
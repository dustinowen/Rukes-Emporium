import { useShoppingCart } from "../../context/cart-context";

export default function ShoppingCart() {
  //using useShoppingCart hook to access cart state/functions
  const { cart, addToCart, removeFromCart } = useShoppingCart()

  return (
    <div className="cart">
      <div>
      <h1> this will be the shopping cart</h1>
      </div>
      <div className='cartItems'>

      <ul>
          {cart.map((item) => (
       
            <li key={item.id}> {item.prodName} - ${item.prodCost}
              <button onClick={() => removeFromCart(item.id)}> Remove</button>
            </li>
        
          ))}
        </ul>
        

        {/* below for testing */}
        {/* Add products to cart */}
      <button onClick={() => addToCart({ id: 1, name: 'Product 1', price: 10 })}>
        Add Product 1
      </button>

      </div>



    </div>
    
  );
};

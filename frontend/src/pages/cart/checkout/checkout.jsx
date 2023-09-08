import { useEffect } from "react"
import complete from "../../../assets/imgs/order_complete.png"

function clearCart() {
  localStorage.setItem("shopCart", "[]")
}
export default function Checkout() {

  useEffect(() => {
    clearCart();
  }, []);

  return <img className="  " src={complete} />

}

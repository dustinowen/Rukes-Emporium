import { useEffect } from "react";
import complete from "../../../assets/imgs/order_complete.png";

function clearCart() {
  localStorage.setItem("shopCart", "[]");
}

export default function Checkout() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
    clearCart();
  }, []);

  return <img className="  " src={complete} />;
}

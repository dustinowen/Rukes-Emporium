import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";

export default function Supplies(inventoryItem) {
  const cart = useContext(CartContext);
  const { addToCart } = useContext(CartContext);

  const handleClickAdd = (item) => {
    addToCart(item);
  };

  const { _id, prodName, prodCategory, prodImage, prodCost } =
    inventoryItem.data;

  if (prodCategory === 400) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
          {/* <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> */}
          <section className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={prodImage}
                alt=""
                className="h-full w-full object-cover object-center"
              />
              <h3 className="mt-4 text-m font-semibold text-center text-gray-700">
                {prodName}
              </h3>
              <p className="mt-1 text-m font-normal text-center text-gray-900">
                ${prodCost}
              </p>

              <button
                className=" mx-36 my-3 relative flex items-center justify-center text-center rounded-md border border-transparent bg-gray-400 px-6 py-2 text-sm font-medium text-gray-900 hover:bg-black hover:text-white"
                onClick={() => handleClickAdd(inventoryItem)}
              >
                add to cart
              </button>
            </div>
          </section>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

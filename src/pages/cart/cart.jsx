import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";
import { CheckIcon, ClockIcon, XMarkIcon } from "@heroicons/react/20/solid";

export default function Cart() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { cart, setCart } = useContext(CartContext);

  async function getProducts() {
    try {
      const data = JSON.parse(localStorage.getItem("shopCart"));

      if (data) {
        setProducts(data);
        setIsLoading(false);
      } else {
        console.log("Error with data");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const removeFromCart = (removedItem) => {
    const removeReq = removedItem.data._id;
    const updatedCart = products.filter((item) => item.data._id !== removeReq);
    setProducts(updatedCart);
    setCart(updatedCart);
    localStorage.setItem("shopCart", JSON.stringify(updatedCart));
  };

  const handleClickRemove = (input) => {
    removeFromCart(input);
  };

  // Calculate total using cents; toFixed(2) on total for $$$
  const cartItems = JSON.parse(localStorage.getItem("shopCart"));
  let subtotalCents = 0;
  cartItems.forEach((item) => {
    const costInCents = Math.round(item.data.prodCost * 100);
    subtotalCents += costInCents;
  });

  let taxCents = Math.round(subtotalCents * 0.075);
  let shippingCents = subtotalCents > 0 ? 500 : 0;
  let totalCents = subtotalCents + taxCents + shippingCents;

  let total = (totalCents / 100).toFixed(2);

  useEffect(() => {
    getProducts();
  }, []);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {products.map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-6">
                  <div className="flex-shrink-0">
                    <img
                      src={product.data.prodImage}
                      alt={product.imageAlt}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-22 sm:w-22"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-8">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a
                              href={product.data.href}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {product.data.prodName}
                            </a>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">{product.data.color}</p>
                          {product.data.size ? (
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                              {product.data.size}
                            </p>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          ${product.data.prodCost}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">


                        <div className="absolute right-0 top-0">
                          <button
                            type="button"
                            onClick={() => handleClickRemove(product)}
                            className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product.data.inStock ? (
                        <CheckIcon
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <ClockIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-300"
                          aria-hidden="true"
                        />
                      )}

                      <span>
                        {product.data.inStock
                          ? "In stock"
                          : `Ships in ${product.data.leadTime}`}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">
                  ${(subtotalCents / 100).toFixed(2)}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                <span>Shipping (flat-rate)</span>
                </dt>
                <dd className="text-sm font-medium text-gray-900">
                  ${(shippingCents / 100).toFixed(2)}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>

                </dt>
                <dd className="text-sm font-medium text-gray-900">${(taxCents / 100).toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">
                  Order total
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  ${(totalCents / 100).toFixed(2)}
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                <Link to="./checkout">Checkout</Link>
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

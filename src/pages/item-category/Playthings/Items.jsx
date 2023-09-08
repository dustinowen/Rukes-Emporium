import "./items.css";
import { useEffect, useState } from "react";
import Playthings from "./Playthings";

export default function Items() {
  const [items, setItems] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const URL = "http://localhost:4000/products/";

  async function getItems() {
    try {
      const response = await fetch(URL);
      const data = await response.json();

      if (response.ok) {
        setItems(data);
        setIsLoading(false);
      } else {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
      <div className="items">
        {items.map((inventoryItem) => (
          <Playthings data={inventoryItem} />
        ))}
      </div>
  );
}

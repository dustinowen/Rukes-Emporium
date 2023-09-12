import "./items.css";
import { useEffect, useState } from "react";
import Threads from "./Threads";
import { Loading } from "../../loading/loading"

export default function Items() {
  const [items, setItems] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const URL = "https://rukes-emporium-f5f19c1d148c.herokuapp.com/products/";

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
    <Loading />
  ) : (
    <div className="items">
      {items.map((inventoryItem) => (
        <Threads data={inventoryItem} />
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import GrubNibbles from "./GrubNibbles";
import { Loading } from "../../loading/loading"

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
    <Loading />
  ) : (
    <div className="inventory-display">
      <div className="items">
        {items.map((inventoryItem) => (
          <GrubNibbles id={inventoryItem._id} data={inventoryItem} />
        ))}
      </div>
    </div>
  );
}

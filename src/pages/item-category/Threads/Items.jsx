import './items.css'
import { useEffect, useState } from 'react'
import Threads from './Threads'


export default function Items() {

  const [items, setItems] = useState(null)

  const [isLoading, setIsLoading] = useState(true)

  const URL = "http://localhost:4000/products/"
  
  async function getItems() {
    try {
      console.log(URL)
      const response = await fetch(URL)
      const data = await response.json()

      if (response.ok) {
        setItems(data)
        setIsLoading(false)
      } else {
        throw Error(response.statusText)
      }

      console.log(response)
      console.log("data test ", data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getItems()
  },[])
 
  console.log("Current product count: ", items?.length)

  return isLoading ?( <h3>Loading...</h3>) : (
    <div className='inventory-display'>

      <div className='inventory-title-container'>
    <h1> Parent comp to 'Threads' displaying items for sale:</h1>
      </div>

      <div className='items'>
        {items.map((inventoryItem) => (<Threads data={inventoryItem} />))}

       </div>
      
      </div>
  )
}

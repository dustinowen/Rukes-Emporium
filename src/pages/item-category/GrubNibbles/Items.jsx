import './items.css'
import { useEffect, useState } from 'react'
import GrubNibbles from './GrubNibbles'


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
      console.log(data)

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
    <h1> Parent comp to 'Grub & Nibbles' displaying items for sale:</h1>
      </div>

      <div className='items'>
        {items.map((inventoryItem) => (<GrubNibbles data={inventoryItem} />))}

       </div>
      
      </div>
  )
}







// export default function Items() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="sr-only">Products</h2>

//         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//           {products.map((product) => (
//             <a key={product.id} href={product.href} className="group">
//               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
//                 <img
//                   src={product.imageSrc}
//                   alt={product.imageAlt}
//                   className="h-full w-full object-cover object-center group-hover:opacity-75"
//                 />
//               </div>
//               <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
//               <p className="mt-1 text-lg font-medium text-gray-900">
//                 {product.price}
//               </p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

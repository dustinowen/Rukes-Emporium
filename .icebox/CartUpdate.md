Reference code to reverse engineer a quantity function:


const data = [ {name: "abc", quantity: 0}, {name: "cde", quantity: 0} ]

function updateProduct(name, cb){
  const resultPos = data.findIndex((e)=>e.name===name)
  if(resultPos != -1){ 
  cb(resultPos)
  }
}

function incrementProductCount(idx){
  data[idx].quantity ++
}
function decrementProductCount(idx){
  data[idx].quantity --
}



updateProduct("abc", incrementProductCount)
updateProduct("abc", incrementProductCount)
updateProduct("abc", decrementProductCount)
data




APP.JS -> ADD TO CART (start of update)

  const addToCart = (item) => {
    const curCart = JSON.parse(localStorage.getItem('shopCart'))
    const resultPosition = curCart.findIndex((e) => e.data._id === item.data._id)
    console.log("Res Pos.. ",resultPosition)
    console.log("Item .. ", item.data._id)

    if (resultPosition !== -1) {
      curCart[resultPosition].data.quantity ++
      console.log(curCart[resultPosition])
    } else {
      setCart([...cart, item]);
    }   
  };
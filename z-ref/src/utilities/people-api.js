const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log(BASE_URL);

export async function index() {
  // fetch -> fetch does not throw errors -> account for errors by throwing a new error
  const res = await fetch(BASE_URL, {
    method: "GET",
  });

  console.log(res);

  if (res.ok) {
    return res.json();
  } else {
    return new Error("Invalid Request");
  }
}

// POST request - base url -> configure headers -> content type

// http://localhost:4000/people
export async function create(data) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": tokens
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(BASE_URL, config);

  console.log(res);

  if (res.ok) {
    return res.json();
  } else {
    // console.log(res.statusText)
    throw new Error("Invalid Request");
  }
}

export async function detail(id) {
  const URL = `${BASE_URL}/${id}`;
  const config = {
    method: "GET",
  };
  const res = await fetch(URL, config);
  // console.log(res);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function destroy(id){
  const URL = `${BASE_URL}/${id}`;
  const config = {
    method: "DELETE",
  };
  const res = await fetch(URL, config);
  // console.log(res);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}


export async function update(id, data) {

  const URL = `${BASE_URL}/${id}`;
  
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(URL, config);

  console.log("update response", res);

  if (res.ok) {
    return res.json();
  } else {
    // console.log(res.statusText)
    throw new Error("Invalid Request");
  }
}

// Alternative status error handling in API response 
// export async function detail(id){
//     const URL = `${BASE_URL}/${id}`
//     const config = {
//         method: "GET"
//     }
//     const res = await fetch(URL, config)
//     console.log(res)
//     if(res.ok){
//         return res.json()
//     } else {
//         // console.log(res.statusText)
//         throw new Error("Invalid Request",{cause: {status: res.statusText, code: res.status}})
//     }
// }






// considerations for POST + PUT requests
//  send data you will always have a body property in your config{}
//  for backend to parse body prop in request -> specify content-type header: 'Content-Type': 'application/json'

// considerations - GET leave out a config option (fetch defaults to GET request)
// considerations - DELETE { method: "DELETE"}

// detail action - http://localhost:4000/:id (objectID)

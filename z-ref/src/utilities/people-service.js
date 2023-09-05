import * as peopleAPI from './people-api'

// console.log(peopleAPI.index.toString())

export async function getPeople(){
    try {
        const data = await peopleAPI.index()
        // the promise from res.json()
        return data
    }catch(err){
        return err
    }
}
export async function createPerson(newPersonData){
    // createPerson is called by handleSubmit NewPersonForm 
    // newForm state 

    // extension: we might pass the data through a few helper functions for normalizing data
    // after data parsing - provide data to create

    try {
        const data = await peopleAPI.create(newPersonData)
        // the promise from res.json()
        return data
    }catch(err){
        return err
    }
}

export async function getPerson(id){
    try{
       const data = await peopleAPI.detail(id)
       return data
    }catch(err){
        return err
    }
}

export async function deletePerson(id){
    try{
       const data = await peopleAPI.destroy(id)
       return data
    }catch(err){
        return err
    }
}

export async function updatePerson(id, data){
    try{
       const resp = await peopleAPI.update(id, data)
       return resp
    }catch(err){
        return err
    }
}

// }
// example error handling for more detailed error responses
// export async function getPerson(id){
//     try{
//         const data = await peopleAPI.detail(id)
//         return data
//      }catch(err){
//          return ({...err.cause}) 
//      }
//  }

import * as peopleApi from './people-api'

export async function getPeople(){
try {
    const data = await peopleApi.index()
} catch (err) {
    console.log(err)
    return err
}
}

export async function getPerson(id){
    try {
        const foundPerson = await peopleApi.detail(id)
        return foundPerson
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}


export async function deletePerson(id) {
    try {
        const foundPerson = await peopleApi.destroy(id)
        return foundPerson
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}


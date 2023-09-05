import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import { getPerson } from '../../utilities/people-service'

import Spinner from '../../components/Spinner'
import EditPersonForm from './EditPersonForm'
import "./Edit.css"

export default function Edit(props){

    const [person, setPerson] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams()
    // useParams -> {} {id: ObjectId}
    const navigate = useNavigate()

    async function handleRequest(){
        try {
            const personData = await getPerson(id)
            if(personData._id){
                setPerson(personData)
                setIsLoading(false)
            }else {
                throw Error('Something went wrong!')
            }
        } catch (error) {
            // console.log(error)
            navigate(`/people/${id}`)
        }   
    }

    useEffect(()=>{
        handleRequest()
    }, [])

    if(isLoading){
        return <Spinner/>
    }
    return(<EditPersonForm initialData={person} />)
}
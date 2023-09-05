import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getPerson, deletePerson } from "../../utilities/people-service";

import './Show.css'

import Spinner from "../../components/Spinner";
export default function Show(props) {
  
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState(null);

  const navigate = useNavigate()
  
  const { id } = useParams(); // useParams -> { id: "objectIdString" } -> 

  async function handleRequest() {
    const personResponse = await getPerson(id);
    if (personResponse?._id) {
      // setPerson
      setPerson(personResponse);
      // isLoading
      setIsLoading(false);
    } else {
      navigate('/')
    }
  }

  async function handleDelete(){
    try {

      console.log(id)
      // the destroy func()
      const deleteResponse = await deletePerson(id)
      
      if (deleteResponse._id) {
        console.log('redirecting')
      } else {
        throw Error("something went wrong")
      }
      // parse the response -> if an id 
        // navigate()
      // else throw an error
      navigate('/home')
    
    } catch (error) {
      console.log(error)
      // log the error
      // navigate() back to show page

      // TODO: determine redirect path for error condition
      // set error context in state -> redirect to error
    }
  }

  console.log(id);
  useEffect(() => {
    handleRequest();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <section className="Person">
        <p>People App Profile: {person._id}</p>

        <h3>{person.name}</h3>
        <img src={person.image} alt={`${person.name} pgrofile pic`} />
        <p>{person.title}</p>
        <div>
          <button className="delete" onClick={handleDelete}> Remove Person</button>
          <Link className="edit" to={`/people/${person._id}/edit`}> Edit Person</Link>
        </div>
      </section>
    </>
  );
}

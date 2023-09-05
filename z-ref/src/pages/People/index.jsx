import { useState, useEffect, useCallback } from "react";

import "./People.css";

import Spinner from "../../components/Spinner";
import PeopleList from "./PeopleList";
import NewPersonForm from "./NewPersonForm";
import { getPeople } from "../../utilities/people-service";

export default function People(props) {
  const [people, setPeople] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function handleRequest() {
    const peopleResponse = await getPeople();

    if (peopleResponse.length) {
      setPeople(peopleResponse);
      setIsLoading(false);
    } else {
      console.log(peopleResponse);
      // context update for error handling might be called
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);

  // call getPeople handle async code
  // console.log("Current People Count", people?.length, isLoading && "Loading");

  // if(isLoading) { return(<Spinner/>) }
  // ... return other JSX 

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <NewPersonForm updatePeople={handleRequest}/>
      <PeopleList people={people} />
    </>
  );
}


// example of useCallback example
// const getPeople = useCallback(async ()=>{
//     try {
//         console.log(URL)
//         const response = await fetch(URL)

//         if(response.ok){
//             const data = await response.json()
//             console.log(data)
//             setPeople(data)
//             setIsLoading(false)
//         }else {
//             throw Error(response.statusText)
//         }
//         console.log(response)
//         // contact API - request - await fetch(URL)
//         // parse the response -> throw error (caught) ->update state
//     } catch (error) {
//         console.log(error)
//         // update context ->
//     }
// })

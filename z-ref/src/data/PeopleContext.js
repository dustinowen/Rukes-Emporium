// Steps for using React Context API 

// 1 import the api tools - createContext
import { createContext } from "react";

// 2 create a new context object
const PeopleContext = createContext()

// PeopleContext type: {}
    // Provider - React Component ***
    // Comsumer - React Component ***
        // useContext - imported at the component level 

// 3 named export of our context object

export {
    PeopleContext
}
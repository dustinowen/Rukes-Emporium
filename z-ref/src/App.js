import "./App.css";

import {useState} from 'react'
// importing header main
import Header from "./components/Header";
import Main from "./components/Main";


// setting React Context 
// 1. import the PeopleContext {}
import { PeopleContext } from "./data/PeopleContext";

function App() {
  // object destructing of the PeopleContext object
  // providing an override key to our provider
  
  // 2. destructure our provider and consumer components from context import
  const { Provider: PeopleData } = PeopleContext;
  
  // 3. initalize some global 'state' in APP
  const [state, setState] = useState({
    error: ""
  })
  
  return (
    <div className="App">
      {/* 4. value providing state to the Provider component - wrap components which might consume context in a provider component */}
      <PeopleData value={state}>
        <Header />
        <Main />
      </PeopleData>
    </div>
  );
}

export default App;

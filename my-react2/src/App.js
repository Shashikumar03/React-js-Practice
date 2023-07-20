
import './App.css';
import React, { useState } from 'react'
// import FormExample from './FormExample';
// import RedingExamples from './RedingExamples';
import FormValidation from './FormValidation';





function App() {
  const [status, setStatus] = useState(true);
  return (
    <>
      <div className="App">
      
        {status?<div className="status">Content</div>:null}
        <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>show</button>
        <button onClick={()=>setStatus(!status)}>toggle</button>
         
      </div>
      {/* <FormExample/> */}
      {/* <RedingExamples/> */}
      <FormValidation/>

    
 </>
     );
}

export default App;

import React, { useState } from 'react'

export default function RedingExamples() {
    const [isLoggedIn,setLoggOut] = useState(true)
    
    const arr = ['apple', 'mango', "patato"];
    const [isAuthenticate, setAuthenticate] = useState(true);

    return (<>
        <div>RederingExamples</div>
        {isLoggedIn ? <h2>Welcome User</h2> : <h2>Welcome guest</h2>}

        <div>
            {arr.length > 0 ? (
                <ul>
                    {
                        arr.map((item, index) => (
                            <li key={index}>{item}

                            </li>
                    
                ))
                    }
                </ul>
            ):(<p>on item to display</p>)}
        </div>
        <div>
            {isAuthenticate && <button onClick={()=>setAuthenticate(false)
            } >Logut</button>}
            {!isAuthenticate && <button onClick={()=>setAuthenticate(true)
             } >LogIn</button>}
        </div>
        
    </>
  )
}

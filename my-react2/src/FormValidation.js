import React, { useState } from 'react';

export default function FormValidation() {
    const [getName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmitData] = useState(null);


    const validateForm = () => {
        let isValidate = true;
        const newErrors = {};

        if (!getName.trim()) {
            newErrors.getName = "Name is required";
            isValidate = false;
        }
       // setErrors(newErrors);
        //return isValidate;

        if (!email.trim()) {
            newErrors.email = "email is required";
            isValidate = false;
        }
        else if (!(/\S+@\S+\.\S+/.test(email))) {
            newErrors.email = "email is not valid";
            isValidate = false;
        }
        if (!password.trim()) {
            newErrors.password = "password  is required";
            isValidate = false;
        }
        else if (password.length < 6) {
            newErrors.password = "password atleat 6 length";
        }

        setErrors(newErrors);
        return isValidate;
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()){
            const submittedData = {
                getName,
                email,
                password
            };
            setSubmitData(submittedData);
            console.log(submittedData);
        }
    }

    

    return (
        <>
            <div className="container">
                <form  className='formValidation' onSubmit={handleSubmit}> 
                <div  >
                    <label htmlFor="name">name</label>
                    <input type="text" value={getName}   onChange={(event) => setName(event.target.value)}  />
                    {
                        errors.getName && <span className='error'>{errors.getName }</span>
                    }
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}  />
                    {
                        errors.email && <span className='error'>{errors.email }</span>
                    }
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}  />
                    {
                        errors.password && <span className='error'>{errors.password }</span>
                    }
                </div>
                
                <button type='submit' className='validationButton'> submit</button>
            </form>
            </div>
            {
                submittedData && (
                    <div>
                        <h2>submitted data</h2>
                        <p>name:{submittedData.getName}</p>
                        <p>Email:{ submittedData.email}</p>
                        <p>password:{ submittedData.password}</p>
                        
                    </div>
                )
            }
        </>
  )
}

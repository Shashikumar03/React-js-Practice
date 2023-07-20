import React,{useState} from 'react'

export default function FormExample() {
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        isSubscribe: '',
        role:''
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: fieldValue
        });
        
    }
    const handleSubmit = (event) => {
            event.preventDefault();
            console.log('form Data', formData)
        }
  return (
      <div className='form'>
          <div className='innerform'>
          <form  onSubmit={handleSubmit}> 
              <h3>Form Handling</h3>
             
              <div>
                  <label htmlFor="username">userName</label>
                  <input
                      type="text"
                      id="username"
                      name="username"
                          value={formData.username}
                          onChange={handleChange}
                />
              </div>

               <div>
                  <label htmlFor="email">email</label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                       value={formData.email}
                        onChange={handleChange}
                />
              </div>
               <div>
                  <label htmlFor="password">password</label>
                  <input
                      type="password"
                      id="password"
                      name="password"
                       value={formData.password}
                       onChange={handleChange}
                />
              </div>
               <div>
                  <label htmlFor="isSubscribe">subscribe</label>
                  <input
                      type="checkbox"
                      id="isSubscribe"
                      name="isSubscribe"
                       value={formData.isSubscribe}
                       onChange={handleChange}
                />
              </div>
               <div>
                  <label htmlFor="role">Role</label>
                  <select
                      name="role"
                          id="role"
                           value={formData.role}
                          onChange={handleChange}
                          >
                      <option value="">select roles</option>
                      <option value="admin">Admin</option>
                          <option value="user">user</option>
                      <option value="guest">guest</option>
                          


                      
                      </select>
              </div>
              <button type='submit'>submit</button>
          </form> 
          
          
          </div>         
















    </div>
  )
}

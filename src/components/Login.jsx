import React, {useState} from 'react'
import styles from '../componentStyles/Login.module.css'

const Login = () => {

 const [formData, setFormData ] = useState ({
  name: '',
  email: '',
  password: ''
 })

 const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({    
      ...formData,
      [name] : value
    }
    )
 }

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    if(response.ok){
      console.log('Data saved successfully');
    }
    else {
      console.log('Error saving data')
    }
  }
  catch(error) {
    console.log('Error is:',error) 
  }  
 }



  return (
    <>
        <form className={styles.form} onSubmit={handleSubmit}> 
            <h1>Name:</h1>
            <input type="text" placeholder='Enter your name here' name='name' value={formData.name} onChange={handleChange}/>
            <h1>E-mail</h1>
            <input type="email" placeholder='Enter your email here' name='email' value={formData.email} onChange={handleChange} />
            <h1>Password</h1>
            <input type="password" placeholder='Enter your passsword here' name='password' value={formData.password} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
     
        <div className={styles.output}>Your saved username is {formData.name} and your email is {formData.email}</div>
    </>
  )
}

export default Login
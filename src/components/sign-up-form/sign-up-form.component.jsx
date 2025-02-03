import {useState} from 'react';
import { createAuthUserWithEmailAndPassword, createUserAuth } from '../../utils/firebase/firebase.utils.js';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = ()=> {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  console.log(formFields);

  const resetFormFields = ()=>{
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event)=>{
    event.preventDefault();

    if (password !== confirmPassword){
      alert ('passwords do not match');
      return;
    }    

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      await createUserAuth(user, {displayName});
      resetFormFields();
    } catch (error){
      if (error.code === 'auth/email-already-in-use'){
        alert('email in use');
      }
      else {
        console.log('user creation encountered an error', error);
      }
    }
  }

  const handleChange = (event)=>{
    const {name, value} = event.target;

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div>
      <h1>Sign up with your Email and Password</h1>
      <form onSubmit={handleSubmit}>
        
        <label>Display Name</label>
        <input type='text' required onChange={handleChange} 
                           name="displayName" value={displayName}/><br />

        <label>Email</label>
        <input type='email'required onChange={handleChange} 
                           name="email" value={email}/><br />

        <label>Password</label>
        <input type='password' required onChange={handleChange} 
                               name="password" value={password}/><br />

        <label>Confirm Password</label>
        <input type='password' required onChange={handleChange} 
                               name="confirmPassword" value={confirmPassword}/><br />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm;
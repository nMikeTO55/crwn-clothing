import { signInWithGooglePopup, createUserAuth } from '../../utils/firebase/firebase.utils.js';

const SignIn = ()=> {
  const logGoogleUser = async ()=> {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserAuth(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default SignIn;
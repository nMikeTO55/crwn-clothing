import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";

const Authentication = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
  };
  return (
    <div>
      <h2>Sign In Page</h2>
      <span>Sign in with your email and password</span>
      <form>
        <SignInForm />
        <button onClick={signInWithGoogle}>Sign in with google popup</button>
      </form>
    </div>
  );
};

export default Authentication;

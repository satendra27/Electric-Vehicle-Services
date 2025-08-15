import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../assets/firebase";
import { toast } from "react-toastify";

export const handleGoogleSignIn = async (navigate) => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    toast.success("Signed in successfully!");
    console.log("User:", result.user);

    navigate("/");
  } catch (error) {
    toast.error(error.message);
  }
};

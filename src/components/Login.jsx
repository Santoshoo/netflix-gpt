

import React, { useRef, useState } from "react";
import Header from "./Header";
import { isValidData } from "../utils/validate";
import {auth} from "../utils/firebase"
import {
  createUserWithEmailAndPassword,signInWithEmailAndPassword
} from "firebase/auth";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errors,newErrors] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  // const formData = useRef({
  //   email: "",
  //   password: "",
  // });

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleClick = (e) => {
    // e.preventDefault(); // prevent page reload
    // const emailValue = email.current.value;
    // const passwordValue = password.current.value;
     const data = isValidData(email.current.value, password.current.value);
     newErrors(data);
    if (data)    return;
    
    if(!isSignIn){
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          newErrors(errorCode + " " + errorMessage);
          // ..
        });
    }else{
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          newErrors(errorCode + " " + errorMessage);
        });
    }
   
    
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://www.themoviedb.org/t/p/original/4X2x1v0Y5j6g3c7k8m9qz2f3h4d.jpg"
          alt="login"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white w-3/12 p-12 absolute bg-black my-24 mt-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-6xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          // ref={formData.current.email}
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
<p className="text-3xl font-bold text-red-500">{errors}</p>
        <button onClick={handleClick} className="bg-red-700 p-4 my-6 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <button
          type="button"
          className="py-4 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;

import React,{useState} from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
setIsSignIn(!isSignIn);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full "
          src="https://www.themoviedb.org/t/p/original/4X2x1v0Y5j6g3c7k8m9qz2f3h4d.jpg"
          alt="login"
        />
      </div>

      <form className=" text-white w-3/12 p-12 absolute bg-black my-24 mt-36 mx-auto left-0 bg-optacity-80 rounded-lg">
        <h1 className="font-bold text-6xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email addresss"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <button className="bg-red p-4 my-6 w-full">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <button className="py-4" onClick={toggleSignInForm}>
          New to Netflix? Sign Up Now
        </button>
      </form>
    </div>
  );
}

export default Login
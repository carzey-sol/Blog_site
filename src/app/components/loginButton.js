"use client";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../lib/contexts/AuthContext";

const LoginButton = () => {
  const { user, isLoading, error, handleSignInWithGoogle, handleLogout } = useAuth();

  if(isLoading){
    return <h1>Loading</h1>
  }
  if(user){
    return <div>
        <button onClick={() => {
      user ? handleLogout() : handleSignInWithGoogle();
    }}>Logout</button>
    </div>
  }

  return (
    <div onClick={() => {
      user ? handleLogout() : handleSignInWithGoogle();
    }}>
      <FaRegUserCircle className='text-3xl' />
    </div>
  );
};

export default LoginButton;

import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import Logout from "./Logout";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="z-10 flex justify-between items-center w-full">
      <h1 className="text-white font-semibold text-3xl">Chat</h1>
      {user ? <Logout /> : <SignIn />}
    </div>
  );
};

export default Navbar;

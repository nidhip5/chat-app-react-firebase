import React from "react";
import { auth } from "../firebase";

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <button
      onClick={() => auth.signOut()}
      className="bg-blue-400 px-2 text-white rounded-xl p-2 boxShadow text-sm"
    >
      Sign Out
    </button>
  );
};

export default LogOut;

import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div className="h-screen md:grid md:grid-rows-[0.2fr,1fr] md:w-[600px] boxShadow p-4 relative mx-auto">
      <div className="mt-10 mx-12 lg:text-start justify-self-center">
        <div className="lg:text-5xl text-3xl font-semibold text-black text-center">
          Get Started
        </div>
        <div className="text-gray-400 lg:text-base text-sm mt-3 text-center">
          Start with signing in
        </div>
      </div>
      <div className="">
        <img
          src="/chat_user.jpg"
          alt=""
          className="h-full w-full lg:h-[480px] lg:w-[480px] mx-auto"
        />
      </div>
      <div className="md:mx-12 md:bottom-32 bottom-16 absolute mx-auto p-4">
        <div className="font-semibold lg:text-3xl text-xl text-black text-center">
          Connect easily with your family and friends over countries
        </div>
        <div className="mt-10 lg:block flex justify-center text-center">
          <button
            className="bg-blue-600 text-white lg:text-lg text-sm px-8 py-3.5 rounded-3xl boxShadow"
            onClick={googleSignIn}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

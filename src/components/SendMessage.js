import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { IoSend } from "react-icons/io5";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form
      className="h-20 text-xl fixed bottom-0 p-4 z-10 grid grid-cols-[1fr,50px] gap-1 bg-blue-500 boxShadow md:w-[600px] w-screen"
      onSubmit={sendMessage}
    >
      <input
        type="text"
        placeholder="Start typing here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full md:text-base text-sm px-5 py-3  text-black outline-none border-none rounded-xl placeholder-white bg-white z-10 h-12"
      />
      <button
        type="submit"
        className="text-white relative ml-2 mr-3.5 rounded-full bg-white h-12 w-12 z-10"
      >
        <IoSend className=" text-blue-500 text-xl left-[16px] top-[14px] absolute" />
      </button>
      <svg
        className="wave-2 absolute md:bottom-[53px] bottom-[65px] left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#1e90ff"
          fill-opacity="1"
          d="M0,224 C480,320 960,128 1440,224L1440,320L0,320Z"
        ></path>
      </svg>
    </form>
  );
};

export default SendMessage;

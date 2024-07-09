import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import SendMessage from "./SendMessage";
import Navbar from "./Navbar";

const Chat = () => {
  const [message, setMessage] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessage(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="relative h-screen mainClass bg-cover bg-center md:w-[600px] md:mx-auto bg-slate-100 boxShadow">
      <div className="fixed top-0 flex justify-between items-center pt-3 px-4 w-full z-10 bg-blue-700 md:w-[600px] md:mx-auto">
        <Navbar />
        <svg
          className="absolute md:-top-[10px] left-0 wave top-[10px] w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1e90ff"
            fill-opacity="1"
            d="M0,0 L0,224 C480,320 960,128 1440,224L1440,0Z"
          ></path>
        </svg>
      </div>
      <div className="h-[calc(100vh-90px)] overflow-y-auto maskDiv">
        <main className="flex flex-col px-3 py-5 relative top-20 rounded-tl-2xl">
          {message &&
            message.map((message) => (
              <Message key={message.id} message={message} />
            ))}
        </main>
      </div>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </div>
  );
};

export default Chat;

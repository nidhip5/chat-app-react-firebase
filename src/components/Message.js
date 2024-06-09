import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex items-center shadow-xl my-6 py-2 px-3.5 rounded-tl-3xl rounded-tr-3xl text-sm`,
  name: `absolute top-[5px] text-gray-600 text-[11px]`,
  sent: `bg-blue-500 text-white flex-row-reverse text-end float-right rounded-bl-3xl text-sm`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-3xl text-sm`,
};

const Message = ({ message }) => {
  const result = message.uid === auth.currentUser.uid;
  const messageClass = result ? `${style.sent}` : `${style.received}`;
  return (
    <div className="relative">
      <div className={`${style.message} ${messageClass}`}>
        <p className={`${style.name} ${result ? "right-[5px]" : "left-[5px]"}`}>
          {message.name}
        </p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;

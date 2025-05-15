import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((state) => state.chat.messages);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage() + "🚀",
        }),
      );
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="border border-black h-[450px] w-full p-2 m-2 overflow-y-auto flex flex-col-reverse transition-shadow">
        {chatMessages.map((c, index) => (
          <ChatMessage name={c.name} message={c.message} key={index} />
        ))}
      </div>
      <form
        className="flex m-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "srinivas", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="h-10 w-full p-2 border border-black rounded-sm mr-2"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 bg-red-500 rounded-sm text-white font-bold"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({ name: "srinivas", message: liveMessage }));
            setLiveMessage("");
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;

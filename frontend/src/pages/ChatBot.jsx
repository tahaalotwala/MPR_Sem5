import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../assets/icons/logo.png";

const chatbotURL = import.meta.env.VITE_CHATBOT_URL;

export const ChatBot = () => {
  const [chat, setChat] = useState([]);
  const [text, setText] = useState("");
  const containerRef = useRef(null);

  const handleChat = async (e) => {
    e.preventDefault();
    const query = text;
    const {
      data: { response, intent },
    } = await axios.post(chatbotURL, { query });
    setText("");
    const decodedResponse = response.replace(/â€™/g, "'");
    console.log({ decodedResponse, intent });
    setChat((oldChat) => [...oldChat, query, decodedResponse]);
  };

  useEffect(() => {
    if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [chat]);

  return (
    <>
      <div className="w-full h-full max-w-[40rem] mx-auto my-10 relative border-2 border-gray-500 rounded-xl shadow-xl overflow-hidden">
        <section className="logo flex gap-1 items-center p-3">
          <p className="text-xl mr-1">Welcome to</p>
          <h2 className="logo-text text-xl font-extrabold">Travel</h2>
          <img src={logo} alt="Logo" className="h-6" />
        </section>
        <div ref={containerRef} className="p-4 max-h-[25rem] overflow-auto">
          {chat.length ? (
            <div className="flex flex-col gap-5 min-h-[10rem] py-5">
              {chat.map((msg, idx) => {
                return (
                  <div key={idx} className={`chat ${idx % 2 ? "chat-left" : "chat-right"}`}>
                    <div className="message">
                      <AccountCircleIcon />
                      <p className="">{msg}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h3 className="min-h-[10rem] py-8 text-center text-3xl font-bold tracking-wider text-slate-300">
              How can I help you?
            </h3>
          )}
        </div>

        <footer className="p-3 sticky bottom-0 bg-white/50 backdrop-blur-md">
          <form className="flex gap-2 border-2 border-gray-300 rounded-full p-2" onSubmit={handleChat}>
            <input
              type="text"
              className="w-full border-2 border-gray-500 p-1 px-4 rounded-full"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Send a message"
            />
            <button className="bg-black text-white px-3 flex gap-2 items-center rounded-full">
              <p>Send</p> <SendIcon fontSize="small" />
            </button>
          </form>
        </footer>
      </div>
    </>
  );
};

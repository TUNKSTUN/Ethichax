import React, { useState, useEffect } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import {BsFillPersonFill} from "react-icons/bs"
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA4A3LrAKntsYEjnmgQCCoNWiGxfKXQS6I",
  authDomain: "ethichax.firebaseapp.com",
  databaseURL: "https://ethichax-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ethichax",
  storageBucket: "ethichax.appspot.com",
  messagingSenderId: "481317404873",
  appId: "1:481317404873:web:27149fa35543002b76cd18"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref("messages");

const Guest = () => {
  const [message, setMessage] = useState("");
  const [messageCards, setMessageCards] = useState([]);

  useEffect(() => {
    db.on("value", (snapshot) => {
      if (snapshot.exists()) {
        const messagesObject = snapshot.val();
        const messagesArray = Object.keys(messagesObject)
          .map((key) => ({ id: key, ...messagesObject[key] }))
          .reverse();
        setMessageCards(messagesArray);
      }
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      db.once("value", (snapshot) => {
        if (snapshot.exists()) {
          const messagesObject = snapshot.val();
          const messagesArray = Object.keys(messagesObject)
            .map((key) => ({ id: key, ...messagesObject[key] }))
            .reverse();
          setMessageCards(messagesArray);

          const MESSAGE_LIMIT = 50;

          if (messagesArray.length > MESSAGE_LIMIT) {
            const oldestMessage = messagesArray[MESSAGE_LIMIT];
            db.child(oldestMessage.id).remove();
            messagesArray.splice(0, MESSAGE_LIMIT);
          }
          
        }
      });
    }, []);

    return () => clearInterval(intervalId);
  }, []);

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const newMessage = { text: message, timestamp: Date.now() };

    db.push(newMessage);

    setMessage("");
  };

  return (
    <div className="xl:right-0 xl:top-0 lg:right-0 lg:top-0  flex xl:mt-0 lg:mt-0 absolute flex-col p-10 xl:pt-20 lg:pt-16 xl:p-10 lg:p-10  bg-stone-300 pt-32 w-full h-full xl:w-4/5 lg:w-4/5 text-start font-Epilogue ">
      <h1 className="text-4xl pb-5 font-bold drop-shadow-md">Guest Book:</h1>
      <form
        className="w-full flex justify-center items-center mb-5"
        onSubmit={handleMessageSubmit}
      >
        <input
          type="message"
          className="w-full h-10 px-5 border-none rounded-full font-mono text-2xl tracking-widest bg-stone-900 text-stone-300 text-md shadow-sm shadow-black"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit" className="px-2 xl:text-xl lg:text-xl text-base transition ease-in-out duration-500 hover:text-stone-700 ">
          <RiSendPlane2Fill />
        </button>
      </form>
      <div className="overflow-y-auto h-full overflow-x-hidden bg-stone-900 p-5 scrollbar-thumb-stone-100 scrollbar-thumb-rounded scrollbar-track-black scroll-auto scrollbar-thin  transition ease-in-out duration-500 hover:scrollbar-thumb-stone-300 border-black border rounded-md ">

      {messageCards.map((messageCard) => (
        <div
        key={messageCard.id}
        className="bg-stone-800  w-auto border-b-stone-600 border-b my-4 p-4 text-start text-stone-300 flex text-xs lg:text-lg md:text-lg xl:text-xl  gap-x-2 shadow-inner shadow-black"
        ><span className="w-9 h-9 text-xl rounded-full border-stone-100 border p-[7px] font-light bg-gradient-to-br from-white to-stone-700 text-stone-800 transition ease-linear duration-75 hover:cursor-pointer hover:bg-stone-100 hover:text-black"><BsFillPersonFill/></span>
          <div className="text-md text-justify font-mono bg-stone-900 border-2 border-stone-700 shadow-md shadow-black w-max h-full overflow-x-clip py-1 px-3 rounded-xl">{messageCard.text}</div>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Guest;

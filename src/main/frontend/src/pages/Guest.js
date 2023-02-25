import React, { useState, useEffect } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
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

          const MESSAGE_LIMIT = 20;

          if (messagesArray.length > MESSAGE_LIMIT) {
            const oldestMessage = messagesArray[MESSAGE_LIMIT - 1];
            db.child(oldestMessage.id).remove();
            messagesArray.splice(0, MESSAGE_LIMIT - 1);
          }
          
        }
      });
    }, 3600000);

    return () => clearInterval(intervalId);
  }, []);

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const newMessage = { text: message, timestamp: Date.now() };

    db.push(newMessage);

    setMessage("");
  };

  return (
    <div className="flex flex-col p-10 bg-stone-300 w-full h-screen text-start font-mono overflow-y-scroll">
      <h1 className="text-4xl font-bold drop-shadow-md">Guest Book:</h1>
      <form
        className="w-full flex justify-center items-center"
        onSubmit={handleMessageSubmit}
      >
        <input
          type="message"
          className="w-full h-10 px-5 border-none rounded-full bg-slate-900 text-stone-300 text-md"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit" className="px-2 text-xl transition ease-in-out duration-500 hover:text-slate-700">
          <RiSendPlane2Fill />
        </button>
      </form>
      {messageCards.map((messageCard) => (
        <div
          key={messageCard.id}
          className="bg-transparent border-b-slate-900 border-b my-4 p-4 text-start"
        >
          <div className="text-md">{messageCard.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Guest;

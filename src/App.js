import "./styles.css";
import React, { useState } from "react";

// var userName = prompt("enter your name")

export default function App() {
  var [emojiMessage, setEmojiMessageHandler] = useState("");

  const emojiDictionary = {
    "😀": "Smiling",
    "😂": "Laughing",
    "😭": "Crying",
    "😲": "Surprised",
    "😞": "Disappointed",
    "🤔": "Thinking",
    "😏": "Smirking",
    "😴": "Sleeping",
    "😵": "Dizzy",
    "😡": "Furious"
  };

  var emojisWeKnow = Object.keys(emojiDictionary);

  function onChangeHandler(event) {
    // console.log(event.target.value);
    var emojiMessage = emojiDictionary[event.target.value];

    if (emojiMessage === undefined) {
      setEmojiMessageHandler("couldn't find this in our database 😞");
    } else {
      setEmojiMessageHandler(emojiMessage);
    }
  }

  function emojiClickHandler(emo) {
    var emojiMessage = emojiDictionary[emo];
    setEmojiMessageHandler(emojiMessage);
  }

  return (
    <div className="App">
      <h1>emoji-interpreter</h1>
      <input style={{ padding: "1rem" }} onChange={onChangeHandler} />
      <h1>{emojiMessage}</h1>
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}

import React, { useState } from "react";

function TypingTrainer() {
  const [right, setRight] = useState(0);
  const [issue, setIssue] = useState(0);

  const words = ["message", "keyboard", "computer", "programming", "developer"];

  let index = 0;
  const wordTimer = setInterval(() => {
    console.log(words[index]);
    index++;
    if (index === words.length) {
      clearInterval(wordTimer);
    }
  }, 3000);

  document.addEventListener("keyup", (event) => {
    console.log(event.key);
  });

  return (
    <>
      <h1 className="mark">Typing Trainer</h1>
      <div className="m-3">
        <p className="h5">Правильных слов: {right}</p>
        <p className="h5">Ошибок в словах: {issue}</p>
      </div>
    </>
  );
}

export default TypingTrainer;

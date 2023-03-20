import React, { useState, useEffect } from "react";
import SetTimer from "../utils/setTimer";

function TypingTrainer() {
  const [currentWord, setCurrentWord] = useState("");
  const [usedWords, setUsedWords] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [issue, setIssue] = useState(0);

  const words = [
    "JS",
    "borderlands",
    "message",
    "keyboard",
    "bob",
    "coding",
    "computer",
    "programming",
    "developer",
    "javascript",
  ];
  const [availableWords, setAvailableWords] = useState(words);

  useEffect(() => {
    const randomIndx = Math.floor(Math.random() * availableWords.length);
    const chosenWord = availableWords[randomIndx];

    const wordsInterval = setInterval(() => {
      setCurrentWord(chosenWord);
      setAvailableWords(availableWords.filter((word) => word !== chosenWord));
      setUsedWords((prev) => [...prev, currentWord]);
    }, 300);

    if (usedWords.length > words.length) {
      clearInterval(wordsInterval);
    }
    return () => clearInterval(wordsInterval);
  }, [currentWord, usedWords, availableWords, words.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {};

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const numberAttempts = usedWords.length;

  const handleRestart = () => {
    setAvailableWords(words);
    setCurrentWord("");
    setUsedWords([]);
    setCorrect(0);
    setIssue(0);
  };

  return (
    <>
      <h1 className="mark">Typing Trainer</h1>
      <div className="m-3">
        <p className="h5">Правильных слов: {correct}</p>
        <p className="h5">Ошибок в словах: {issue}</p>
      </div>
      {numberAttempts < words.length ? (
        <div className="h3 m-3">{currentWord}</div>
      ) : (
        <>
          <div className="m-3">
            Ваш коэффициент верных ответов: {(correct / numberAttempts) * 100}%
          </div>
          <button className="m-3" onClick={handleRestart}>
            Еще раз
          </button>
        </>
      )}
    </>
  );
}

export default TypingTrainer;

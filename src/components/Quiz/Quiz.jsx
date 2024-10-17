import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    { question: 'What is React?', options: ['A library', 'A framework', 'A language'], answer: 'A library' },
    // Add more questions
  ];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <h2>Quiz</h2>
      {currentQuestion < questions.length ? (
        <div>
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
          ))}
        </div>
      ) : (
        <p>Quiz completed! Your score: {score}/{questions.length}</p>
      )}
    </div>
  );
};

export default Quiz;

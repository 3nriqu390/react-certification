import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { decodeHtml } from './utils';

function Quiz({ quizData }) {
  const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
  const navigate = useNavigate();

  const handleAnswer = (questionIndex, answer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = answer;
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    navigate('/results', {
      state: {
        userAnswers: answers,
        quizData: quizData, // pass quizData here
        correctAnswers: quizData.map((question) => question.correct_answer),
      },
    });
  };

  return (
    <div>
      {quizData.map((question, index) => (
        <div key={index}>
          <p className="question">{decodeHtml(question.question)}</p>
          {question.incorrect_answers
            .concat(question.correct_answer)
            .map((answer, answerIndex) => (
              <button
                key={answerIndex}
                className={`answer-button ${
                  answers[index] === answer ? 'selected' : ''
                }`}
                onClick={() => handleAnswer(index, answer)}
              >
                {decodeHtml(answer)}
              </button>
            ))}
        </div>
      ))}
      {answers.every((answer) => answer !== null) && (
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
}

export default Quiz;

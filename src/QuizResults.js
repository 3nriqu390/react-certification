import { useLocation, useNavigate } from 'react-router-dom';
import { decodeHtml } from './utils';

function QuizResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const userAnswers = location.state.userAnswers;
  const correctAnswers = location.state.correctAnswers;
  const quizData = location.state.quizData || [];
  const score = userAnswers.filter(
    (answer, i) => answer === correctAnswers[i]
  ).length;
  const scoreColor = score <= 1 ? 'red' : score <= 3 ? 'yellow' : 'green';

  const handleNewQuiz = () => {
    navigate('/');
  };

  return (
    <div>
      {quizData.map((question, i) => (
        <div key={i}>
          <p>{decodeHtml(question.question)}</p>
          {question.incorrect_answers
            .concat(question.correct_answer)
            .map((answer, answerIndex) => (
              <button
                key={answerIndex}
                className={`noEvent button ${
                  answer === question.correct_answer
                    ? 'correct'
                    : answer === userAnswers[i]
                    ? 'incorrect'
                    : ''
                }`}
              >
                {decodeHtml(answer)}
              </button>
            ))}
        </div>
      ))}
      <p className={`results ${scoreColor}`}>Score: {score} / 5</p>
      <button className="button" onClick={handleNewQuiz}>
        New Quiz
      </button>
    </div>
  );
}

export default QuizResults;

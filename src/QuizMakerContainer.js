import { useState, useEffect } from 'react';
import QuizMakerForm from './QuizMakerForm';
import Quiz from './Quiz';

function QuizMakerContainer() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((response) => response.json())
      .then((data) => setCategories(data.trivia_categories));
  }, []);

  const handleCreate = () => {
    setLoading(true);
    fetch(
      `https://opentdb.com/api.php?amount=5&category=${selectedCategory}&difficulty=${selectedDifficulty}&type=multiple`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setQuizData(data.results)
      });
  };

  return (
    <div>
      <QuizMakerForm
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        handleCreate={handleCreate}
      />
      {loading && (
        <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      )}
      {!loading && quizData && <Quiz quizData={quizData} loading={loading}/>}
    </div>
  );
}

export default QuizMakerContainer;

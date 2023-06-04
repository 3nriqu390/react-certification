import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizMakerContainer from './QuizMakerContainer';
import QuizResults from './QuizResults';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/results" element={<QuizResults />} />
        <Route path="/" element={<QuizMakerContainer />} />
      </Routes>
    </Router>
  );
}

export default App;


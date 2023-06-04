import './App.css';

function QuizMakerForm({
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
  handleCreate
}) {
  return (
    <div>
      <select
        id="categorySelect"
        className="dropdown"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <select
        id="difficultySelect"
        className="dropdown"
        value={selectedDifficulty}
        onChange={(e) => setSelectedDifficulty(e.target.value)}
      >
        <option value="">Select difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button className="button" id="createBtn" onClick={handleCreate}>
        Create
      </button>
    </div>
  );
}

export default QuizMakerForm;

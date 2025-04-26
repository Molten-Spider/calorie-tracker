import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResultDashboard from './components/ResultDashboard';

function App() {
  const [foodData, setFoodData] = useState([]);

  const handleAddFood = (foodItem) => {
    setFoodData([...foodData, foodItem]);
  };

  return (
    <div className="container">
      <h1>Calorie & Nutrition Tracker</h1>
      <InputForm onAddFood={handleAddFood} />
      <ResultDashboard foodData={foodData} />
    </div>
  );
}

export default App;

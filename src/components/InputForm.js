import React, { useState } from 'react';

const foodDatabase = {
    "rice": { calories: 130, carbs: 28, protein: 2.7, fat: 0.3 },
    "chicken breast": { calories: 165, carbs: 0, protein: 31, fat: 3.6 },
    "apple": { calories: 52, carbs: 14, protein: 0.3, fat: 0.2 },
    "banana": { calories: 89, carbs: 23, protein: 1.1, fat: 0.3 },
    "egg": { calories: 155, carbs: 1.1, protein: 13, fat: 11 },
    "paneer": { calories: 265, carbs: 1.2, protein: 18.3, fat: 20.8 },
    "milk": { calories: 42, carbs: 5, protein: 3.4, fat: 1 },
    "bread": { calories: 265, carbs: 49, protein: 9, fat: 3.2 },
    "roti": { calories: 120, carbs: 20, protein: 3, fat: 3 },
    "dal": { calories: 116, carbs: 20, protein: 9, fat: 0.4 },
    "potato": { calories: 77, carbs: 17, protein: 2, fat: 0.1 },
    "sweet potato": { calories: 86, carbs: 20, protein: 1.6, fat: 0.1 },
    "mango": { calories: 60, carbs: 15, protein: 0.8, fat: 0.4 },
    "orange": { calories: 47, carbs: 12, protein: 0.9, fat: 0.1 },
    "cheese": { calories: 402, carbs: 1.3, protein: 25, fat: 33 },
    "butter": { calories: 717, carbs: 0.1, protein: 0.9, fat: 81 },
    "curd": { calories: 98, carbs: 3.4, protein: 11, fat: 4.3 },
    "almonds": { calories: 579, carbs: 22, protein: 21, fat: 50 },
    "cashews": { calories: 553, carbs: 30, protein: 18, fat: 44 },
    "peanuts": { calories: 567, carbs: 16, protein: 26, fat: 49 },
    "fish": { calories: 206, carbs: 0, protein: 22, fat: 12 },
    "beef": { calories: 250, carbs: 0, protein: 26, fat: 17 },
    "mutton": { calories: 294, carbs: 0, protein: 25, fat: 21 },
    "pasta": { calories: 131, carbs: 25, protein: 5, fat: 1.1 },
    "noodles": { calories: 138, carbs: 25, protein: 4.5, fat: 2.1 },
    "idli": { calories: 58, carbs: 12, protein: 2, fat: 0.4 },
    "dosa": { calories: 133, carbs: 17, protein: 2.7, fat: 5 },
    "samosa": { calories: 308, carbs: 31, protein: 6, fat: 18 },
    "chocolate": { calories: 546, carbs: 61, protein: 4.9, fat: 31 },
    "ice cream": { calories: 207, carbs: 24, protein: 3.5, fat: 11 },
    "burger": { calories: 295, carbs: 30, protein: 17, fat: 12 },
    "pizza": { calories: 266, carbs: 33, protein: 11, fat: 10 },
    "biryani": { calories: 290, carbs: 34, protein: 9, fat: 13 },
    "poha": { calories: 180, carbs: 30, protein: 4, fat: 5 },
    "upma": { calories: 210, carbs: 30, protein: 6, fat: 8 },
};

function InputForm({ onAddFood }) {
  const [food, setFood] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const foodKey = food.toLowerCase();
    const foodInfo = foodDatabase[foodKey];

    if (foodInfo) {
      const qty = quantity ? parseFloat(quantity) : 100;
      const factor = qty / 100;

      onAddFood({
        food: `${food} (${qty}g)`,
        calories: foodInfo.calories * factor,
        carbs: foodInfo.carbs * factor,
        protein: foodInfo.protein * factor,
        fat: foodInfo.fat * factor,
      });

      setFood('');
      setQuantity('');
    } else {
      alert("Food item not found in database. Please enter a valid item like Rice, Chicken Breast, Apple, etc.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Food Item</label>
        <input
          type="text"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          placeholder="e.g., Rice, Chicken Breast, Apple"
          required
        />
      </div>
      <div className="form-group">
        <label>Quantity (grams) (Optional)</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="e.g., 150"
        />
      </div>
      <button type="submit">Add Food</button>
    </form>
  );
}

export default InputForm;

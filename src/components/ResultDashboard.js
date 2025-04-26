import React from 'react';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function ResultDashboard({ foodData }) {
  const totalCalories = foodData.reduce((acc, item) => acc + item.calories, 0);
  const totalCarbs = foodData.reduce((acc, item) => acc + item.carbs, 0);
  const totalProtein = foodData.reduce((acc, item) => acc + item.protein, 0);
  const totalFat = foodData.reduce((acc, item) => acc + item.fat, 0);

  const pieData = [
    { name: 'Carbs', value: totalCarbs },
    { name: 'Protein', value: totalProtein },
    { name: 'Fat', value: totalFat },
  ];

  return (
    <div style={{ marginTop: '50px' }}>
      <h2>Daily Summary</h2>
      <p><strong>Total Calories:</strong> {totalCalories.toFixed(2)} kcal</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px', marginTop: '40px' }}>
        <div style={{ width: '400px', height: '300px' }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={{ width: '400px', height: '300px' }}>
          <ResponsiveContainer>
            <BarChart data={pieData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ResultDashboard;

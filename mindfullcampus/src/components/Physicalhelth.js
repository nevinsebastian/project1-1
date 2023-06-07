import React, { useState } from 'react';

const Physicalhealth = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100; // Convert height to meters
    const bmiValue = weight / (heightInMeters * heightInMeters); // Calculate BMI
    setBMI(bmiValue.toFixed(2)); // Set BMI value with two decimal places
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  const getBMIInterpretation = () => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };
  

  return (
    <div>
      <h1>Physical Health Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="height">Height (in cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />

        <label htmlFor="weight">Weight (in kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />

        <button type="submit">Calculate BMI</button>
      </form>

      {bmi && (
        <div>
          <h2>Your BMI: {bmi}</h2>
          <p>Interpretation: {getBMIInterpretation()}</p>
        </div>
      )}
    </div>
  );
};

export default Physicalhealth;

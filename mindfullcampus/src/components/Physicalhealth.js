import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './physicalhealth.css'

const Physicalhealth = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        height: parseFloat(height),
        weight: parseFloat(weight),
        goal: goal,
      };

      const response = await fetch('http://localhost:8000/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Stored Result:', result);
        sessionStorage.setItem('result', JSON.stringify(result));
        navigate('/physicalhealth/result');
      } else {
        throw new Error('Error calculating result');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
      
    <div className="formContainer">
      <div className="formWrapper">
      <h1>Enter your physique details</h1>
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

        <label htmlFor="goal">Select your goal:</label>
        <select
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        >
          <option value="">Select an option</option>
          <option value="gain">Weight gain</option>
          <option value="lose">Weight loss</option>
        </select>

        <button type="submit">Get Result</button>
      </form>
    </div>
    </div>
  );
};

export default Physicalhealth;

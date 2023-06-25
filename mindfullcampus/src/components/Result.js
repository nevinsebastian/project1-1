import React, { useEffect, useState } from 'react';


const Result = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Retrieve the result from sessionStorage
    const storedResult = sessionStorage.getItem('result');
    setResult(JSON.parse(storedResult));

    // Clean up sessionStorage after retrieving the result
    // sessionStorage.removeItem('result');
  }, []);

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
   <div className='formContainer'>
    <div className="card-row">
    <div class="card text-bg-secondary mb-3" style={{ width: '18rem'}}>
  <div class="card-header"><h2>BMI :</h2></div>
  <div class="card-body">
    <h5 class="card"><p>BMI: {result.bmi}</p></h5>
    
</div>
</div>

<div class="card text-bg-secondary mb-3" style={{ width: '20rem'}}>
  <div class="card-header"><h2>Diet recommendations</h2></div>
  <div class="card-body">
    <h5 class="card"><p>{result.diet_recommendations}</p></h5>
    <p className='card'>Calorie Intake: {result.calorie_intake}</p>
</div>
</div>
      
<div class="card text-bg-secondary mb-3" style={{ width: '20rem'}}>
  <div class="card-header"><h2>Excersice recommendations</h2></div>
  <div class="card-body">
    <h5 class="card"><p>{result.exercise_recommendations}</p></h5>
    
</div>
</div>
      


      
      
</div>
      
    </div>
    
 
  );
};

export default Result;

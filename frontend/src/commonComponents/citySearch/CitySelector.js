import React from 'react';
import './CitySelector.css';

const CitySelector = () => {
  return (
    <div className='container'>
        <div className='city-container'>
        <form action="/action_page.php">
  <label for="cars">Select A City:</label>
  <select id="cars" name="cars">
    <option value="volvo">Bareilly</option>
  </select>
</form>
        </div>
    </div>
  )
}

export default CitySelector
import React from 'react';
import Button from './Button';


const MyComponent = () => {
  const handleButtonClick = () => {
    // Handle button click logic here
  };

  return (
    <div>
      <Button text="Primary" onClick={handleButtonClick} color="primary" />
      <Button text="Secondary" onClick={handleButtonClick} color="secondary" />
      <Button text="Success" onClick={handleButtonClick} color="success" />
      <Button text="Danger" onClick={handleButtonClick} color="danger" />
      <Button text="Gradient" onClick={handleButtonClick} color="gradient" />
      <Button text="Rounded" onClick={handleButtonClick} rounded />
      <Button text="Large" onClick={handleButtonClick} size="large" />
      {/* <Button text="Icon" onClick={handleButtonClick} icon={<HeartIcon />} /> */}
      {/* Add more buttons as needed */}
    </div>
  );
};

export default MyComponent;

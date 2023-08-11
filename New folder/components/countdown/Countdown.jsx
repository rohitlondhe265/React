import React from 'react';
import CountdownTimer from './CountdownTimer';

const Countdown = () => {
  // Replace 'targetDate' with the date you want to count down to (format: yyyy-mm-dd)
  const targetDate = '2023-7-22';

  return (
    <div className="mx-auto max-w-screen-md p-4">
      <h1 className="text-2xl font-bold mb-4">Countdown Timer</h1>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default Countdown;

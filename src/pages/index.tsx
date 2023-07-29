import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [beerTax, setBeerTax] = useState(2);

  useEffect(() => {
    // Function to update the beer tax value every hour
    const updateBeerTax = () => {
      setBeerTax((prevBeerTax) => prevBeerTax * 1.01);
    };

    // Schedule the update function to run every hour (3600000 milliseconds)
    const intervalId = setInterval(updateBeerTax, 5000);

    // Clear the interval when the component is unmounted to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Carbo's beer tax: {beerTax.toFixed(2)} øl</h1>
    </div>
  );
};

export default HomePage;
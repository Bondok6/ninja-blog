import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('bondok');

  return (
    <div className="home">
      <h2>{name}</h2>
      <button onClick={() => setName('kyrillos')}>Click Me</button>
    </div>
  );
};

export default Home;

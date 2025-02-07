import './App.css';
import Like from '@/assets/svg/LikeLionSogang.svg?react';
import React from '@/assets/svg/React.svg?react';

function App() {
  return (
    <h1 className="text-red-500 text-3xl font-bold underline bg-primary-normal font-d2">
      Hello world! 1010
      <Like />
      <React />
    </h1>
  );
}

export default App;

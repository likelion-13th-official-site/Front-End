import './App.css';
import { RouterProvider, useLocation } from 'react-router-dom';
import router from './Router';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App bg-surface-primary w-full min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

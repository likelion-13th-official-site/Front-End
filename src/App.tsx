import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import ReactLenis from 'lenis/react';

function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      }}
    >
      <div className="App bg-surface-primary w-full min-h-screen">
        <RouterProvider router={router} />
      </div>
    </ReactLenis>
  );
}

export default App;

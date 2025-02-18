import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

function App() {
  return (
    <div className="App bg-surface-primary w-full min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

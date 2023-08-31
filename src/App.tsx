import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>헤더</header>

      <Outlet />
    </div>
  );
}

export default App;

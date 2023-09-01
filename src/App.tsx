import Header from './components/common/Header/Header';
import { Outlet } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';

function App() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}

export default App;

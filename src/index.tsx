import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import router from './router/Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router}></RouterProvider>);

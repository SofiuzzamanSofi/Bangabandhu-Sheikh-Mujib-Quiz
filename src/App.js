import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './layout/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return <>
    <RouterProvider router={router} />
    <ToastContainer position='top-center' />
  </>
}

export default App;

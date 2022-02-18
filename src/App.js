import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CMS from './CMS';

function App() {
  return (
    <div>
      <ToastContainer
      position='bottom-right'
      autoClose={2000}/>
      <Swal/>
      <CMS />
    </div>
  );
}

export default App;

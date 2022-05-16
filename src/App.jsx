import React from 'react'
import Card from './component/Card'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
        <ToastContainer/>
        <Card/>
    </div>
  )
}

export default App

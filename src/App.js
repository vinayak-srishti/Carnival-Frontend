import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Component/Login';
import {BrowserRouter,Routes,Route}from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div >
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Component/Login';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import Navbar from './Component/Navbar';
import Demo from './Component/Demo';
import Home from './Component/Home';


function App() {
  return (
    <BrowserRouter>
    <div >
      <Routes>
        <Route path="/login" element={[<Navbar/>,<Login/>]}/>
        <Route path="/nav" element={<Navbar/>}></Route>
        <Route path="/demo" element={<Demo/>}></Route>
        <Route path="/home" element={<Home/>}></Route>

        
      </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;

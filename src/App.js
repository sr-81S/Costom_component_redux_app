
import './App.css';
import Navtop from './components/Navtop';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';


function App() {
  return (
    <>
      <Navtop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/card' element={<Cards/>}/>
        <Route path='/cart/:id' element={<CardDetails/>}/>
      </Routes>
    </>
  );
}

export default App;

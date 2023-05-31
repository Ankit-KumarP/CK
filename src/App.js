import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Section from './component/Section';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} /> // Router1 is an indivbidual component
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/section' element={<Section/>}></Route>
      </Routes>
    </>
  );
}

export default App;

import './App.css';
import About from './components/About';
import Businformation from './components/Businformation';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/information' element={<Businformation/>} exact/>
        <Route path='/about' element={<About/>} exact/>
      </Routes>
    </Router>
  );
}


export default App;

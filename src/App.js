
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Jeux from './components/Jeux/Jeux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="bg"><Router>
    <Navbar />
    <Jeux></Jeux>
  </Router></div>
    
    
  );
}

export default App;

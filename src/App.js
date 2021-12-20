import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './Pages/Profile';
import Private from './Pages/Private';
import Globe from './Pages/Globe';
import Public from './Pages/Public';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Globe/>}/> 
      <Route path="/profile" element={<Profile/>}/>  
      <Route path="/private" element={<Private/>}/>  
      <Route path="/public" element={<Public/>}/>     
    </Routes>
    </Router>
  );
}

export default App;

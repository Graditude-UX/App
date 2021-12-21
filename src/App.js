import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Profile from './Pages/Profile';
import Private from './Pages/Private';
import Globe from './Pages/Globe';
import Public from './Pages/Public';
import { Button, FormGroup, Input, Label } from 'reactstrap';


function App() {

  return (
    <Router>
      <nav>
        <Link to="/">Globe</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/private">Private</Link>
        <Link to="/public">Public</Link>
      </nav>
    <Routes>
      <Route path="/" element={<Globe/>}/> 
      <Route path="/profile" element={<Profile/>}/>  
      <Route path="/private" element={<Private/>}/>  
      <Route path="/public" element={<Public/>}/>     
    </Routes>
    <div>Footer</div>
    </Router>
  );
}

export default App;


import { Route, Routes } from 'react-router';
import './App.css';
import Menu from './Components/Menu';
import Kodu from './Pages/Kodu';
import Ostukorv from './Pages/Ostukorv';

function App() {
  return (
   <div>
     <Menu />
    <Routes>
      <Route path="/" exact element={<Kodu />} />
      <Route path="/ostukorv" exact element={<Ostukorv />} />
    </Routes>
    </div>
  );
}

export default App;

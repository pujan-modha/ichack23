import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Sponsor from './pages/Sponsor';
import Team from './pages/Team';
import About from './pages/About';
import Register from './pages/Register';
import Tracks from "./pages/Tracks";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/sponsor' element={<Sponsor/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/tracks' element={<Tracks />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

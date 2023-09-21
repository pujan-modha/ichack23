import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Sponsors from './pages/Sponsors';
import Team from './pages/Team';
import About from './pages/About';
import Register from './pages/Register';
import Tracks from "./pages/Tracks";
import Schedule from "./pages/Schedule";
import FourZeroFour from "./pages/404";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/sponsors' element={<Sponsors/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/tracks' element={<Tracks />} />
          <Route path='/schedule' element={<Schedule/>} />
          <Route path='/register' element={<Register />} />
          <Route path="/404" element={<FourZeroFour />} />
          <Route path="/*" element={<FourZeroFour />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

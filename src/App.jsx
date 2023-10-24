import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './pages/Home/Home';
import HomeKatta from './pages/HomeKatta/HomeKatta';
import Sinif3 from './pages/Sinif3/Sinif3';

function App() {
  const navigate = useNavigate()
  const location = useLocation().pathname
  useEffect(()=>{
if(window.localStorage.getItem('key')!='qwert'){
  navigate('/login')
}
// if(window.localStorage.getItem('key') !='oqtuvchi'){
//   navigate('/login')
// }

  },[location])
  return (
    <div className="App">
 <Header/>
 <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/homehatta' element={<HomeKatta/>} />
  <Route path='/sinif3' element={<Sinif3/>} />
  <Route path='/login' element={<Login/>} />
 </Routes>
    </div>
  );
}

export default App;

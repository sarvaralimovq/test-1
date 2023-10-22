import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Sinif3 from './pages/Sinif3/Sinif3';

function App() {
  return (
    <div className="App">
 <Header/>
 <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/sinif3' element={<Sinif3/>} />
 </Routes>
    </div>
  );
}

export default App;

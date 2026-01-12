import {Routes, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import FavoriteMovies from './pages/FavoriteMovies'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
      </Routes>
    </>
  );
}

export default App;

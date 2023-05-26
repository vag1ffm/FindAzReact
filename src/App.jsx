import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import { Button, Stack } from 'react-bootstrap';
import Categories from './pages/Categories';
import Header from './Components/header';
import Liked from './pages/Liked';
import Card from './pages/Cart/Cart';
import Orders from './pages/Orders';
import GoodsPage from './pages/GoodsPage/GoodsPage';
import Footer from './Components/footer';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='d-flex justify-content-center'>
        <Routes >
          <Route path='/' element={<MainPage/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/liked' element={<Liked/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/goodspage/:id' element={<GoodsPage/>}/>
          <Route path='/dashboard/*' element={<Dashboard/>}/>
        </Routes>
      </div>
      <Footer/>

      
    </div>
  );
}

export default App;

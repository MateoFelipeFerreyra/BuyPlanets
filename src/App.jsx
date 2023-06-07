
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import PlanetHome from './components/PlanetHome/PlanetHome'


function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
          <NavBar />
          <PlanetHome />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element = {<Cart/>} />
          </Routes>
      </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

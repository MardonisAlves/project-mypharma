import { Route, Routes } from 'react-router-dom';
import Home from '../page/home';
import ProducDetails from '../page/products.details';


export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/products/details' element={<ProducDetails />}></Route>
    </Routes>

  )
}


import { Route, Routes } from 'react-router-dom';
import DeleteItems from '../page/delete.items';
import Home from '../page/home';
import ProducDetails from '../page/products.details';


export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/products/details/:id' element={<ProducDetails />}></Route>
      <Route path='/delete/items' element={<DeleteItems />}></Route>
    </Routes>

  )
}


import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import JournalPage from './pages/JournalPage'
import Layout from './rootlayout/Layout';
import ProductDatails from './components/ProductDatails';
import CartPage from './pages/CartPage';

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<HomePage />} ></Route>
    <Route path='/shoppage' element={<ShopPage />} ></Route>
    <Route path='/shoppage/:id' element={<ProductDatails />} ></Route>
    <Route path='/aboutpage' element={<AboutPage />} ></Route>
    <Route path='/contactspage' element={<ContactsPage />} ></Route>
    <Route path='/journalpage' element={<JournalPage />} ></Route>
    <Route path='/cartpage' element={<CartPage />} ></Route>
  </Route>
))
const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
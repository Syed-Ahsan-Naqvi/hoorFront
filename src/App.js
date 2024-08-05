import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home.jsx"
import Category from "./components/Category/Category.jsx"
import SingleProduct from "./components/SingleProduct/SingleProduct.jsx"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Newsletter from "./components/Footer/Newsletter/Newsletter.jsx"
import AppContext from "./utils/context.js"
import ScrollToTop from './scrollToTop.js';
import Categories from "./components/categoriesPage/Categories.jsx"
import About from "./components/aboutPage/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import FAQ from "./components/Footer/FAQ/FAQ.jsx"
import Products from './components/Products/Products.jsx'
import Policy from "./components/Footer/Policy/Policy.jsx"
import Returns from "./components/Footer/Returns/Returns.jsx"
import Success from "./components/Cart/Success.jsx"

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/categories/all' element={<Categories />} />
          <Route path='/products/all' element={<Products headingText={"Popular Products"} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/returns' element={<Returns />} />
          <Route path='/success' element={<Success />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  )
}

export default App
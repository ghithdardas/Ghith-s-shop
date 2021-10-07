import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path='/' component={Home} exact />
      <Route path='/Register' component={Register} />
      <Route path='/ProductList' component={ProductList} />
      <Route path='/Product' component={Product} />
      <Route path='/Login' component={Login} />
      <Route path='/Cart' component={Cart} />
    </Router>
  )
}

export default App

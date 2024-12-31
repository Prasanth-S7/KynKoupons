import './App.css'
import Dashboard from './pages/dashboard'
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/insights' element={<Dashboard />}></Route>
        <Route path='/reports' element={<Dashboard />}></Route>
        <Route path='/create-coupon' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCountries } from './redux/actions'
import Landing from './components/Landing/Landing'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'
import FormActivity from './components/Form/FormActivity'
import './App.css'

function App() {

  const location = useLocation()

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCountries())
}, [])

  return (
    <div>
      {location.pathname !== '/' ? <Nav/> : <Landing/>}
      <Routes>
      <Route path='/home' element= {<Home/>}/>
      <Route path='/detail/:id' element= {<Detail/>}/>
      <Route path='/activity' element={<FormActivity/>}/>
      </Routes>
    </div>
  )
}
export default App

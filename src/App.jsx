import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import HotelsIdPage from './pages/HotelsIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getHotelsThunk } from './store/slices/hotels.slice'
import PrincipalHeader from './components/shared/PrincipalHeader'
import ReservationPage from './pages/ReservationPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

const dispatch = useDispatch()

useEffect(() => {
  const url = 'postgres://api_hotels_user:u0KtLAsRZbVKtk91KGn4NlOpbt6OYdff@dpg-cpf3lpm74orc73esporg-a/api_hotels/hotels'
  dispatch(getHotelsThunk(url))
}, [])

  return (
    <div className='app' >
      <PrincipalHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hotels/:id' element={<HotelsIdPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/reservation' element={<ReservationPage />} />
          </Route>
      </Routes>
    </div>
  )
}

export default App

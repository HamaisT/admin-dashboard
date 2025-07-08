// import { useState } from 'react'
import { Navigate, BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import DashboardLayout from './layout/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Settings from './pages/Settings'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path="/" element={<Navigate to="/dashboard" />} />


        <Route path='/' element={<ProtectedRoute> <DashboardLayout /> </ProtectedRoute> }>
          <Route path='dashboard' element={<Dashboard />}/>
          <Route path='users' element={<Users />}/>
          <Route path='settings' element={<Settings />}/>
        </Route>

      </Routes>
    </Router>
  )
}

export default App





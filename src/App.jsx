// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import DashboardLayout from './layout/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Settings from './pages/Settings'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        
        <Route path='/' element={<DashboardLayout />}>
          <Route path='dashboard' element={<Dashboard />}/>
          <Route path='users' element={<Users />}/>
          <Route path='settings' element={<Settings />}/>
        </Route>

      </Routes>
    </Router>
  )
}

export default App





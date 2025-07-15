// import { useState } from 'react'
import { Navigate, BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import DashboardLayout from './layout/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Settings from './pages/Settings'
import ProtectedRoute from './routes/ProtectedRoute'
import Signup from './pages/Signup'
import AdminRoute from './routes/AdminRoute'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <Router>
    //   <Routes>
    //     <Route path='/login' element={<Login />}/>
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/" element={<Navigate to="/dashboard" />} />


    //     <Route path='/' element={<ProtectedRoute> <DashboardLayout /> </ProtectedRoute> }>
    //       <Route path='dashboard' element={<Dashboard />}/>
    //       <Route path='users' element={<Users />}/>
    //       <Route path='settings' element={<Settings />}/>
    //     </Route>

    //   </Routes>
    // </Router>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route
          path='/'
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path='dashboard' element={<Dashboard />} />

          {/* ✅ Admin-only routes */}
          <Route
            path='users'
            element={
              <AdminRoute>
                <Users />
              </AdminRoute>
            }
          />
          <Route
            path='settings'
            element={
              <AdminRoute>
                <Settings />
              </AdminRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App





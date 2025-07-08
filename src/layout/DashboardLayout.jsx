import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Outlet, NavLink } from 'react-router-dom';

const DashboardLayout = () => {
  // Inside component:
const navigate = useNavigate();

const handleLogout = () => {
  signOut(auth).then(() => {
    navigate("/login");
  });
};

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      {/* <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>
            Dashboard
          </NavLink>
          <NavLink to="/users" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>
            Users
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>
            Settings
          </NavLink>
           <button
            onClick={handleLogout}
            className="w-48 bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
          >
            Logout
          </button>
        </nav>
      </aside> */}

      <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col justify-between min-h-screen">
  <div>
    <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
    <nav className="flex flex-col space-y-2">
      <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>
        Dashboard
      </NavLink>
      <NavLink to="/users" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>
        Users
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-white'}>
        Settings
      </NavLink>
    </nav>
  </div>

  <button
    onClick={handleLogout}
    className="w-full bg-red-600 text-white font-medium py-2 rounded-md hover:bg-red-700 transition mt-6"
  >
    Logout
  </button>
</aside>


      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <header className="mb-4">
          <h1 className="text-xl font-semibold">Welcome to Dashboard</h1>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

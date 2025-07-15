import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import useUserRole from '../hooks/useUserRole';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const role = useUserRole();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      {/* <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
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
      </aside> */}
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'text-blue-400' : 'text-white')}
          >
            Dashboard
          </NavLink>

          {role === "admin" && (
            <>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? 'text-blue-400' : 'text-white')}
              >
                Users
              </NavLink>
              <NavLink
                to="/settings"
                className={({ isActive }) => (isActive ? 'text-blue-400' : 'text-white')}
              >
                Settings
              </NavLink>
            </>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Welcome to Dashboard</h1>

          {/* Avatar dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-semibold"
              // title={user?.email}
              title={`${user?.email} (${user?.displayName})`}
            >
              {user?.displayName?.charAt(0).toUpperCase() || "U"}
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-40 z-50">
                <button
                  onClick={() => navigate("/settings")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>

              </div>
            )}
          </div>
        </div>

        {/* Page Content */}
        <main>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
          <Outlet />
        </motion.div>
      </main>

      </div>
    </div>
  );
};

export default DashboardLayout;


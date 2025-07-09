import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/usersSlice";
import { BarChart, Bar, PieChart, Pie, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Users = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

  const dispatch = useDispatch();
  const { data: users, loading, error } = useSelector((state) => state.users);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

useEffect(() => {
  dispatch(fetchUsers());
}, [dispatch]);

useEffect(() => {
  let filtered = users;

  if (searchTerm) {
    filtered = filtered.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (selectedCity) {
    filtered = filtered.filter((user) => user.address.city === selectedCity);
  }

  setFilteredUsers(filtered);
}, [users, searchTerm, selectedCity]);


  // Transform for chart
  const chartData = users.map((user) => ({
    name: user.name.split(" ")[0],
    city: user.address.city.length,
  }));

  // Bar chart data: Users per City
const cityData = Object.entries(
  filteredUsers.reduce((acc, user) => {
    const city = user.address.city;
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {})
).map(([city, count]) => ({ city, count }));

// Pie chart data: Email Domain Split
const domainData = Object.entries(
  filteredUsers.reduce((acc, user) => {
    const domain = user.email.split("@")[1];
    acc[domain] = (acc[domain] || 0) + 1;
    return acc;
  }, {})
).map(([domain, count]) => ({ domain, count }));


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      {/* {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && ( */}

      {loading ? (
        <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
        ) : (
        <>

        {/* UI for Filter + Search */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <input
                type="text"
                placeholder="Search by name or email"
                className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
                className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/3"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
            >
                <option value="">All Cities</option>
                {[...new Set(users.map((u) => u.address.city))].map((city) => (
                <option key={city} value={city}>
                    {city}
                </option>
                ))}
            </select>
            <p className="text-sm text-gray-500 mb-2">
  Showing {filteredUsers.length} of {users.length} users
</p>

        </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white shadow-md rounded-md p-4 mb-6">
            <table className="min-w-full text-sm">
              <thead className="text-left border-b">
                <tr>
                  <th className="p-2">Name</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">City</th>
                  <th className="p-2">Company</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="p-2">{user.name}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">{user.address.city}</td>
                    <td className="p-2">{user.company.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Chart */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-semibold mb-2">City Name Length per User</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="city" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Users per City</h3>
            <BarChart width={350} height={300} data={cityData}>
            <XAxis dataKey="city" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Email Domain Split</h3>
            <PieChart width={350} height={300}>
            <Pie
                data={domainData}
                dataKey="count"
                nameKey="domain"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#10b981"
                label
            />
            <Tooltip />
            </PieChart>
        </div>
    </div>


        </>
      )}
    </div>
  );
};

export default Users;

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 shadow-md rounded-md">
          <p className="text-gray-500 text-sm">Total Users</p>
          <h3 className="text-2xl font-semibold text-blue-600">10</h3>
        </div>

        <div className="bg-white p-6 shadow-md rounded-md">
          <p className="text-gray-500 text-sm">Active Sessions</p>
          <h3 className="text-2xl font-semibold text-green-600">5</h3>
        </div>

        <div className="bg-white p-6 shadow-md rounded-md">
          <p className="text-gray-500 text-sm">System Uptime</p>
          <h3 className="text-2xl font-semibold text-yellow-600">99.9%</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

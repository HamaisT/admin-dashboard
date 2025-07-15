// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// const Dashboard = () => {
//   const users = useSelector((state) => state.users.data);

//   const pieData = [
//     { name: "Admins", value: 3 },
//     { name: "Editors", value: 5 },
//     { name: "Viewers", value: users.length - 8 },
//   ];

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className="space-y-6"
//     >
//       <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
//           <p className="text-gray-600">Total Users</p>
//           <h3 className="text-3xl font-bold">{users.length}</h3>
//         </div>
//         <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
//           <p className="text-gray-600">Admins</p>
//           <h3 className="text-3xl font-bold">3</h3>
//         </div>
//         <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
//           <p className="text-gray-600">Editors</p>
//           <h3 className="text-3xl font-bold">5</h3>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl p-6 shadow">
//         <h3 className="text-lg font-semibold mb-4">User Role Distribution</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie
//               data={pieData}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               label
//             >
//               {pieData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </motion.div>
//   );
// };

// export default Dashboard;

import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const users = useSelector((state) => state.users.data);

  const [ready, setReady] = useState(false);

  // Add a small delay to allow layout to complete before rendering the chart
  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 100); // 100ms is usually enough
    return () => clearTimeout(timer);
  }, []);

  const pieData = [
    { name: "Admins", value: 3 },
    { name: "Editors", value: 5 },
    { name: "Viewers", value: users.length - 8 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

    <div className="bg-white rounded-xl p-6 shadow hover:shadow-md hover:-translate-y-1 transition-all">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
          <p className="text-gray-600">Tota  l Users</p>
          <h3 className="text-3xl font-bold">{users.length}</h3>
        </div>
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
          <p className="text-gray-600">Admins</p>
          <h3 className="text-3xl font-bold">3</h3>
        </div>
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
          <p className="text-gray-600">Editors</p>
          <h3 className="text-3xl font-bold">5</h3>
        </div>
      </div>
    </div>

      {/* Render chart only if data is loaded and layout is ready */}
      {users.length > 0 && ready && (
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">User Role Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </motion.div>
  );
};

export default Dashboard;

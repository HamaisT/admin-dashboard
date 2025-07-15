import { auth } from "../firebase/firebaseConfig";
const Settings = () => {
  const user = auth.currentUser;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Name:</strong> {user?.displayName || "N/A"}</p>
    </div>
  );
};

export default Settings;

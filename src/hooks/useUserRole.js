import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const useUserRole = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setRole(user.displayName); // roles like 'admin', 'editor'
      } else {
        setRole(null);
      }
    });

    return () => unsub();
  }, []);

  return role;
};

export default useUserRole;

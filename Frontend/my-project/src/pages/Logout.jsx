// Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Token remove karo
    localStorage.removeItem("token");

    // Optional: agar user info bhi store kiya hai
    localStorage.removeItem("user");

    // Redirect to login
    navigate("/login");
  }, [navigate]);

  return <h2>Logging out...</h2>;
};

export default Logout;

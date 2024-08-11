import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";



function useLogout() {
  const [loading,setLoading] = useState(false);
  const {setAuthUser,setAuthToken} = useAuthContext();


  const logout = async() => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/logout", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
      })
      const data = await res.json();
      if(data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("loggedin_user");
      localStorage.removeItem("travelapp-jwt");
      setAuthUser(null);
      setAuthToken(null);
      // navigate("/login");
    } catch(error) {
      toast.error(error.message);
    } finally{
      setLoading(false);
    }
  }
  return {loading,logout};
}

export default useLogout
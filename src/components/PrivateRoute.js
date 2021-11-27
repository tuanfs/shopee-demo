import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "context/auth/AuthContext";
function PrivateRoute() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [render, setRender] = useState(1);
  useEffect(() => {
    if (currentUser) {
      setLoading(false);
      setRender(1);
    } else {
      setLoading(true);
      setRender(render + 1);
    }
    return () => {
      setLoading(true);
      setRender(1);
    };
  }, [loading, render]);
  return (
    <>{!loading && (currentUser ? <Outlet /> : <Navigate to="/login" />)}</>
  );
}

export default PrivateRoute;

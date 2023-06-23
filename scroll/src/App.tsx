import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { LoginContext, LoginContextType } from "./Context/LoginContex";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

interface ProtectedRouteProps {
  token: string;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ token }) => {
  return token ? <Outlet /> : <Navigate to="/login" />;
};
function App() {
  const { token } = useContext(LoginContext) as LoginContextType;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProtectedRoute token={token} />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import {BrowserRouter,Routes,Route,}from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProtectedRoute from "../routes/ProtectedRoute";
import VerifyOtp from "./pages/VerifyOtp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
<Route path="/register" element={<Register />}/>
<Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />

        <Route path="/about" element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }/>

        <Route path="/contact" element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
      }/>
<Route path="/verify-otp"element={<VerifyOtp />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
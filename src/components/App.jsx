import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom" ;
import Home from "../pages/Home.jsx";
import Credits from "../pages/Credits.jsx";
import Error404 from "../pages/Error404.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales-credits" element={<Credits />} />
        <Route path="/error-page-not-found" element={<Error404/>} />
        <Route path="*" element={<Navigate to="/error-page-not-found" replace />} />
      </Routes>
    </Router>   
  )
}

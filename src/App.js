import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Landing from "./components/Landing";
import Part from './components/Part';
import Attendance from "./components/Atendence";
import End from "./components/End";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" replace />} />  {/* 잘못된 경로일 경우 Main으로 리다이렉트 */}
        <Route path="/part" element={<Part />} />
        <Route path="/attendance/:part" element={<Attendance />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </Router>
  );
}

export default App;

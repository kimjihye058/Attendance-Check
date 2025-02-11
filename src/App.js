import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Start from "./start/start";
import Part from './part/part';
import Attendance from "./attendance/attendance";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Start />} />
        <Route path="*" element={<Navigate to="/" replace />} />  {/* 잘못된 경로일 경우 Main으로 리다이렉트 */}
        <Route path="/part" element={<Part />} />
        <Route path="/attendance" element={<Attendance />} />

      </Routes>
    </Router>
  );
}

export default App;

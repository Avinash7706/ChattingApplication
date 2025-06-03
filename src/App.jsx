import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainFile from "./mainScreen/common/MainFile";
import TotalFile from "./mainScreen/components/TotalFile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainFile />} />
        <Route path="/chat-app" element={<TotalFile />} />            {/* optional id case */}
        <Route path="/chat-app/:id" element={<TotalFile />} />        {/* specific id case */}
      </Routes>
    </Router>
  );
}

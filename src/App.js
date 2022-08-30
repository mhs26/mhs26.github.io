import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Announcements from "./pages/Announcements";
import Resources from "./pages/Resources";
import Calendar from "./pages/Calendar";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="resources" element={<Resources />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;

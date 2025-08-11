import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import Layout from "./Layout/layout";
import Undefined from "./Pages/Undefined";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
        <Route path="*" element={<Undefined/>} />
      </Routes>
    </Router>
  );
}

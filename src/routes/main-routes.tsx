import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { History } from "../pages/History";

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

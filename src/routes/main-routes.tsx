import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "../pages/Home";

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

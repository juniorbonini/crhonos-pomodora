import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { History } from "../pages/History";
import { Settings } from "../pages/Settings";
import { Pomodoro } from "../pages/Pomodoro";

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
      </Routes>
    </BrowserRouter>
  );
}

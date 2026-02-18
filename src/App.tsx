import { Notification } from "./components/Notification";
import { CycleProvider } from "./context/CycleContext/cycle-provider-context";
import { ThemeProvider } from "./context/ThemeContext/theme-provider";
import { MainRoutes } from "./routes/main-routes";

function App() {
  return (
    <ThemeProvider>
      <CycleProvider>
        <Notification>
          <MainRoutes />
        </Notification>
      </CycleProvider>
    </ThemeProvider>
  );
}

export default App;

import { Notification } from "./components/Notification";
import { CycleProvider } from "./context/CycleContext/cycle-provider-context";
import { MainRoutes } from "./routes/main-routes";

function App() {
  return (
    <CycleProvider>
      <Notification>
        <MainRoutes />
      </Notification>
    </CycleProvider>
  );
}

export default App;

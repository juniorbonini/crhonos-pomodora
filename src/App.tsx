import { CycleProvider } from "./context/CycleContext/cycle-provider-context";
import { MainRoutes } from "./routes/main-routes";

function App() {
  return (
    <CycleProvider>
      <MainRoutes />
    </CycleProvider>
  );
}

export default App;

import { UserProvider } from "./contexts/UserContext";
import { AllRoutes } from "./routes";

export function App() {
  
  return (
    <UserProvider>
      <AllRoutes />
    </UserProvider>
  );
}

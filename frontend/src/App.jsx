import { BrowserRouter, Routes, Route } from "react-router-dom";
import VoterDashboard from "./pages/VoterDashboard";
import AdminPage from "./pages/AdminPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  console.log("App rendered");
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VoterDashboard />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;

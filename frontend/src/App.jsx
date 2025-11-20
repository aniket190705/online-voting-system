import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import VoterDashboard from "./pages/VoterDashboard";
import AdminPage from "./pages/AdminPage";
import { AuthProvider } from "./context/AuthContext";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="bg-blue-500 py-4 mb-8">
      <div className="max-w-4xl mx-auto flex justify-center gap-6">
        <button
          onClick={() => navigate("/")}
          className={`px-6 py-2 rounded font-semibold text-white transition
            ${
              location.pathname === "/"
                ? "bg-blue-900 shadow"
                : "bg-blue-600 hover:bg-blue-800"
            }
          `}
        >
          Voter Dashboard
        </button>
        <button
          onClick={() => navigate("/admin")}
          className={`px-6 py-2 rounded font-semibold text-white transition
            ${
              location.pathname === "/admin"
                ? "bg-blue-900 shadow"
                : "bg-blue-600 hover:bg-blue-800"
            }
          `}
        >
          Admin Dashboard
        </button>
      </div>
    </header>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<VoterDashboard />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

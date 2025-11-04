import { useEffect, useState } from "react";
import CandidateList from "../components/CandidateList";
import ResultBoard from "../components/ResultBoard";

function AdminPage() {
  const [candidates, setCandidates] = useState([]);

  const fetchCandidates = () => {
    fetch("http://localhost:5000/api/candidates")
      .then((res) => res.json())
      .then(setCandidates);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const resetVotes = async () => {
    await fetch("http://localhost:5000/api/votes/reset", { method: "POST" });
    fetchCandidates();
    alert("Votes reset!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl text-blue-700 font-bold text-center my-6">
        Admin Dashboard
      </h1>
      <div className="flex justify-center my-4">
        <button
          onClick={resetVotes}
          className="bg-red-600 text-white px-6 py-2 rounded shadow hover:bg-red-700 transition "
        >
          Reset All Votes
        </button>
      </div>
      <CandidateList candidates={candidates} />
      <ResultBoard candidates={candidates} />
      {/* Add more admin controls/components as needed */}
    </div>
  );
}
export default AdminPage;

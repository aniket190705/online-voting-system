import { useEffect, useState } from "react";
import CandidateList from "../components/CandidateList";
import VoteForm from "../components/VoteForm";
import ResultBoard from "../components/ResultBoard";

function VoterDashboard() {
  const [candidates, setCandidates] = useState([]);
  const [results, setResults] = useState([]);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/candidates")
      .then((res) => res.json())
      .then(setCandidates);

    fetch("http://localhost:5000/api/votes/results")
      .then((res) => res.json())
      .then(setResults);
  }, [voted]);

  const handleVote = async (voteData) => {
    const res = await fetch("http://localhost:5000/api/votes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(voteData),
    });

    if (res.ok) {
      setVoted((prev) => !prev); // Toggle to trigger useEffect
      alert("Vote cast!");
    } else {
      const data = await res.json();
      alert(data.error || "Already voted!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-blue-700 font-bold text-center my-6">
        Voter Dashboard
      </h1>
      {/* Side by side layout for desktop, stacked for mobile */}
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto mb-12">
        {/* Voting Form */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-xl font-semibold mb-4">Cast Your Vote</h2>
          <VoteForm candidates={candidates} onVote={handleVote} />
        </div>
        {/* Candidate List */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-xl font-semibold mb-4">Candidates</h2>
          <CandidateList candidates={candidates} />
        </div>
      </div>
      {/* Results */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Live Results</h2>
        <ResultBoard candidates={results} />
      </div>
    </div>
  );
}

export default VoterDashboard;

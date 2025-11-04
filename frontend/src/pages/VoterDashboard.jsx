import { useEffect, useState } from "react";
import CandidateList from "../components/CandidateList";
import VoteForm from "../components/VoteForm";
import ResultBoard from "../components/ResultBoard";

function VoterDashboard() {
  const [candidates, setCandidates] = useState([]);
  const [results, setResults] = useState([]);
  const [voted, setVoted] = useState(false);
  console.log("VoterDashboard rendered");

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/candidates")
  //     .then((res) => res.json())
  //     .then(setCandidates)
  //     .then(() => {
  //       console.log("candidates", candidates);
  //     });
  // }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/candidates")
      .then((res) => res.json())
      .then(setCandidates)
      .then(() => {
        console.log("candidates", candidates);
      });
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
      setVoted(true);
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
      <CandidateList candidates={candidates} />
      <VoteForm candidates={candidates} onVote={handleVote} />
      <ResultBoard candidates={results} />
    </div>
  );
}
export default VoterDashboard;

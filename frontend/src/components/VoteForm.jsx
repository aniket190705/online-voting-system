import { useState } from "react";

const VoteForm = ({ candidates, onVote }) => {
  const [voterName, setVoterName] = useState("");
  const [voterID, setVoterID] = useState("");
  const [candidateID, setCandidateID] = useState("");

  return (
    <form
      className="bg-white p-6 rounded-lg shadow space-y-4 max-w-md mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        onVote({ voterName, voterID, candidateID });
      }}
    >
      <h3 className="text-lg font-semibold mb-2">Vote for Your Candidate</h3>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-blue-500"
        placeholder="Your Name"
        value={voterName}
        onChange={(e) => setVoterName(e.target.value)}
        required
      />
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-blue-500"
        placeholder="Voter ID"
        value={voterID}
        onChange={(e) => setVoterID(e.target.value)}
        required
      />
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-blue-500"
        value={candidateID}
        onChange={(e) => setCandidateID(e.target.value)}
        required
      >
        <option value="">Select Candidate</option>
        {candidates.map((c) => (
          <option key={c._id} value={c._id}>
            {c.name} ({c.position})
          </option>
        ))}
      </select>
      <button
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-medium transition"
        type="submit"
      >
        Vote
      </button>
    </form>
  );
};

export default VoteForm;

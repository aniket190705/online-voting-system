import React from "react";

const CandidateList = ({ candidates, onSelect }) => (
  <div className="my-4">
    <ul className="divide-y divide-gray-200 bg-white rounded-lg shadow">
      {candidates.map((c) => (
        <li
          key={c._id}
          className="flex items-center justify-between px-6 py-4 hover:bg-blue-50"
        >
          <div>
            <span className="font-semibold text-lg">{c.name}</span>
            <span className="ml-3 text-sm text-gray-500">({c.party})</span>
            <span className="ml-2 italic text-sm text-gray-400">
              {c.position}
            </span>
          </div>
          {onSelect && (
            <button
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
              onClick={() => onSelect(c._id)}
            >
              Vote
            </button>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default CandidateList;

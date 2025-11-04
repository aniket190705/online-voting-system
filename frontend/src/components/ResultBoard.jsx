const ResultBoard = ({ candidates }) => (
  <div className="my-8">
    <h3 className="text-xl font-semibold mb-2 text-center">Live Results</h3>
    <div className="overflow-x-auto rounded ">
      <table className="min-w-full bg-white text-center shadow">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Party</th>
            <th className="px-4 py-2 border-b">Position</th>
            <th className="px-4 py-2 border-b">Votes</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((c) => (
            <tr key={c._id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{c.name}</td>
              <td className="px-4 py-2 border-b">{c.party}</td>
              <td className="px-4 py-2 border-b">{c.position}</td>
              <td className="px-4 py-2 border-b font-bold">{c.voteCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ResultBoard;

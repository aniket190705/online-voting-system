const Vote = require('../models/Vote');
const Candidate = require('../models/Candidate');
exports.vote = async (req, res) => {
    const { voterName, voterID, candidateID } = req.body;
    const existing = await Vote.findOne({ voterID });
    if (existing) return res.status(400).json({ error: 'Voter has already voted' });

    const vote = new Vote({ voterName, voterID, candidateID });
    await vote.save();

    await Candidate.findByIdAndUpdate(candidateID, { $inc: { voteCount: 1 } });

    res.status(201).json({ success: true });
};
exports.results = async (req, res) => {
    const candidates = await Candidate.find();
    res.json(candidates);
};
exports.reset = async (req, res) => {
    await Vote.deleteMany({});
    await Candidate.updateMany({}, { voteCount: 0 });
    res.json({ success: true });
};

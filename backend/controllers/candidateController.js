const Candidate = require('../models/Candidate');
exports.getAll = async (req, res) => {
    const candidates = await Candidate.find();
    res.json(candidates);
};
exports.add = async (req, res) => {
    const candidate = new Candidate(req.body);
    await candidate.save();
    res.status(201).json(candidate);
};
exports.update = async (req, res) => {
    const candidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(candidate);
};
exports.remove = async (req, res) => {
    await Candidate.findByIdAndDelete(req.params.id);
    res.json({ success: true });
};

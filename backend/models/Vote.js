const mongoose = require('mongoose');
const VoteSchema = new mongoose.Schema({
    voterName: String,
    voterID: { type: String, required: true, unique: true },
    candidateID: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
    timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Vote', VoteSchema);

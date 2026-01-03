const mongoose=require('mongoose');
const serviceSchema=mongoose.Schema({
   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    washType: { type: String, required: true },
    status: { type: String, default: "Pending" },
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Service",serviceSchema );
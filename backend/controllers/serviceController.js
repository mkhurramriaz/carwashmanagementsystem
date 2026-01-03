const serviceModel=require("../models/serviceModel");
exports.bookService= async (req, res) => {
    try {
        const { washType, userId } = req.body;
        if (!washType || !userId) {
            return res.status(400).json({ msg: "Selection and UserID are required" });
        }
        const newBooking = new bookingModel({ washType, userId });
        await newBooking.save();
        res.status(200).json({ msg: "Booking successful!", data: newBooking });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
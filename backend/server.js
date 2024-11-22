const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const ChatMessage = require("./models/ChatMessage.js");


const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Routes
app.get("/messages", async (req, res) => {
    try {
        const message = await ChatMessage.find();
        res.json(message);
    }catch(error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"});
    }
})

app.post("/messages", async (req, res) => {
    try {
        const {user, message } = req.body;
        if (!user || !message) {
            return res
                .status(400)
                .json({error: "User and message are required"});
        }
        const chatMessage = new ChatMessage({
            user,
            message,
        });

        await chatMessage.save();

        res.status(201).json(chatMessage);
    } catch(error) {
        console.error(error);
        res.status(500).json({error: "Internal server error"}); 
    }
});

//start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
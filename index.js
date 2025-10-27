import express from "express";
import { generateCustomResponse } from "./ai.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

app.post("/generate", async (req, res) => {
    const { prompt } = req.body;

    try {
        const aiResponse = await generateCustomResponse(prompt);
        res.json({ response: aiResponse.text });
    } catch (error) {
        res.status(500).send("Error generating response");
    }
});
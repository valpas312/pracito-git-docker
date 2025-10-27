import express from "express";
import { ai } from "./ai.js";

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
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    res.json({ result: response.text });
    } catch (error) {
        console.error("Error generating content:", error);
    }
     
});
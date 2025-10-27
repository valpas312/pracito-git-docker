import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function generateCustomResponse(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Generate a response based on the following prompt: " + prompt,
  });
  return response;
}

export { generateCustomResponse };
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API!;
const genAi = new GoogleGenAI({ apiKey: API_KEY });

// This function is now an async generator
export async function* AgentInitialization(prompt: string) {
    const result = await genAi.models.generateContentStream({
        model: 'gemini-2.0-flash',
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        config: {
            maxOutputTokens: 400,
        },
    });

    for await (const chunk of result) {
        yield chunk.text;
    }
}

export async function AgentInitialization2(prompt: string) {
    const response = await genAi.models.generateContentStream({
        model: 'gemini-2.0-flash',
        contents: prompt,
        config: { maxOutputTokens: 400 },
    });

    for await (const chunk of response) {
        console.log(chunk.text)
    }
}

AgentInitialization2('HOw to use the agentic work flow using AI')
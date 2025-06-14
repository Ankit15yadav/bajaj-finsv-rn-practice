import { GoogleGenAI } from "@google/genai";
const API_KEY = 'AIzaSyCw6QvpPJYJx3Xb5xCQ96-bUekJvnhmbOg'

const ai = new GoogleGenAI({ apiKey: API_KEY })

const PROMPT = 'what is the use of ai in the current world'

async function main() {
    const respone = await ai.models.generateContent({
        model: 'gemini-2.0-flash-001',
        contents: PROMPT
    })

    console.log(respone);
}

main();
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const fetchResult = async (query) => {

    try{
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: query,
        });
        return response.text;
    }
    catch(error){
        console.error("Error fetching result:", error);
        throw error;
    }
}


export default fetchResult;
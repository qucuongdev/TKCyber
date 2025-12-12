import { GoogleGenAI } from "@google/genai";

// Ensure API key is available
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: apiKey });

export const explainSecurityConcept = async (concept: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment variable.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Explain the cybersecurity concept "${concept}" in a concise, technical manner suitable for a security analyst. 
      Focus on its primary function, benefits, and a real-world use case. 
      Keep it under 150 words. Format with markdown bolding for key terms.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on simple queries
      }
    });

    return response.text || "No explanation available.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to retrieve explanation from AI. Please try again later.";
  }
};

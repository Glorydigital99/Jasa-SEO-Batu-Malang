
import { GoogleGenAI, Type } from "@google/genai";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSEOAudit = async (url: string, businessGoals: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a Senior SEO Strategist at GLORY DIGITAL. Perform a professional and comprehensive SEO audit for the website: ${url}. 
      The business context is: ${businessGoals}.
      
      Instructions:
      1. Provide a realistic SEO Score (1-100) based on standard industry metrics.
      2. Write a detailed analysis (minimum 3 sentences) covering Technical SEO, Mobile Usability, and Content Relevance for the Property/Real Estate industry.
      3. List 5 high-impact, actionable recommendations specifically for this website to dominate Google search results.
      
      Do not provide generic filler text. Be specific to the property sector.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { 
              type: Type.NUMBER,
              description: "The overall SEO health score from 1 to 100."
            },
            analysis: { 
              type: Type.STRING, 
              description: "A detailed professional analysis of the website's current SEO status."
            },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "A list of 5 specific actionable SEO improvements."
            }
          },
          required: ["score", "analysis", "recommendations"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Empty response from AI");
    
    const parsedData = JSON.parse(text);
    
    // Fallback jika AI mengembalikan array kosong atau null
    if (!parsedData.analysis || parsedData.recommendations.length === 0) {
      throw new Error("Incomplete data from AI analysis");
    }

    return parsedData;
  } catch (error) {
    console.error("SEO Audit Error:", error);
    throw error;
  }
};

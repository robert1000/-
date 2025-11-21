import { GoogleGenAI, Type, Schema } from "@google/genai";
import { MuseResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCreativeMuse = async (userProduct: string): Promise<MuseResponse> => {
  const responseSchema: Schema = {
    type: Type.OBJECT,
    properties: {
      packagingSuggestion: {
        type: Type.STRING,
        description: "A specific packaging container type and material recommendation (e.g., Matte Black Cardboard Box, Frosted Glass Jar).",
      },
      designConcept: {
        type: Type.STRING,
        description: "A visual design concept, color palette, or texture description to elevate the product.",
      },
      reasoning: {
        type: Type.STRING,
        description: "A brief, elegant explanation of why this packaging suits the product content and value.",
      },
    },
    required: ["packagingSuggestion", "designConcept", "reasoning"],
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `The user wants packaging advice for their product: "${userProduct}". 
      You are 'Auri', a senior packaging design consultant for luxury brands.
      Your tone is professional, aesthetic, and insightful (專業且具美感).
      Suggest a specific container type/material and a design concept.
      
      IMPORTANT: The output MUST be in Traditional Chinese (繁體中文).
      Return JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from Auri");
    }
    return JSON.parse(text) as MuseResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback response
    return {
      packagingSuggestion: "極簡素色硬殼禮盒",
      designConcept: "運用大面積留白與局部打凸工藝，展現純粹質感。",
      reasoning: "越是優質的產品，越需要不喧賓奪主的包裝來襯托其本質。"
    };
  }
};

/**
 * Generates a photorealistic image for a packaging product using Gemini 2.5 Flash Image.
 */
export const generateProductImage = async (itemName: string, description: string): Promise<string | null> => {
  try {
    // Construct a prompt that enforces the Auri Packaging aesthetic
    const prompt = `Professional product photography of packaging design: ${itemName}. 
    Details: ${description}.
    Style: High-end studio lighting, soft shadows, minimalist background (concrete or textured paper), 8k resolution, photorealistic, award-winning packaging design.
    Atmosphere: Luxurious, clean, architectural.
    View: Front 3/4 angle.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
    });

    // Iterate through parts to find the image data
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        return `data:image/png;base64,${base64EncodeString}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Gen Error:", error);
    return null;
  }
};
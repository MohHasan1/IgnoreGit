import { ChatOpenAI } from "@langchain/openai";
import { ChatGroq } from "@langchain/groq";

const OPEN_API_KEY = import.meta.env.VITE_OPEN_API_KEY;
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const openAiModel = new ChatOpenAI({
  model: "gpt-4",
  apiKey: OPEN_API_KEY,
});
export const groqModel = new ChatGroq({
  model: "llama3-8b-8192",
  apiKey: GROQ_API_KEY,
});



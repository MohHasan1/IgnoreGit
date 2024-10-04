import { groqModel } from "./configLLM";
import { systemPrompt } from "./SystemPrompt";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

const getGitIgnore = async (userInput: string) => {
  const LLM = groqModel;
  const systemTemplate = systemPrompt;
  const parser = new StringOutputParser();

  const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", systemTemplate],
    ["user", "{userInput}"],
  ]);

  const llmChain = promptTemplate.pipe(LLM).pipe(parser);
  const result = await llmChain.invoke({ userInput, });
  return result;
};

export default getGitIgnore;

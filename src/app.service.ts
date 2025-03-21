import { Injectable } from '@nestjs/common';
import { TavilySearchResults } from '@langchain/community/tools/tavily_search';
import { ChatOpenAI } from '@langchain/openai';
import { MemorySaver } from '@langchain/langgraph';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
import 'dotenv/config';
import { HumanMessage } from '@langchain/core/messages';

@Injectable()
export class AppService {
  private agent: ReturnType<typeof createReactAgent>;

  constructor() {
    // Definindo chaves de API
    process.env.OPENAI_API_KEY;
    process.env.TAVILY_API_KEY;

    if (!process.env.OPENAI_API_KEY || !process.env.TAVILY_API_KEY) {
      throw new Error("As chaves de API estão ausentes no ambiente.");
    }

    //Define as Tools do agent
    const agentTools = [new TavilySearchResults()];

    // Cria uma instância do modelo de linguagem da OpenAI
    const llm = new ChatOpenAI({
      model: 'gpt-4o-mini',
      temperature: 0,
    });

    const memory = new MemorySaver()
    // Cria agente ReAct
    this.agent = createReactAgent({
      llm,
      tools: agentTools,
      checkpointSaver: memory,
    }); 
  }

  async executeTask(messages: string): Promise<string> {
    if (!messages || messages.trim() == "") {
      throw new Error("A mensagem de entrada não pode ser vazia!")
    }

    const agentFinalState = await this.agent.invoke(
      { messages: [new HumanMessage(messages)] },
      {configurable: { thread_id: "42" },} 
    );
    return agentFinalState.messages[agentFinalState.messages.length - 1].content;
  }
 }

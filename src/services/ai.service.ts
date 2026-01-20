import { prompts } from "../prompts";
import { openai } from "../utils/openAI";

export class AIService {
  static async summarize(text: string, max: number) {
    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompts.summarize(text, max) }],
    });

    return res.choices[0].message.content;
  }

  static async rewrite(text: string, tone: "simple" | "professional") {
    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompts.rewrite(text, tone) }],
    });

    return res.choices[0].message.content;
  }

   static async fixGrammar(text: string) {
    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompts.fixGrammar(text) }],
    });

    return res.choices[0].message.content;
  }

    static async generateTags(text: string) {
    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompts.generateTags(text) }],
    });

    return JSON.parse(res.choices[0].message.content || "[]");
  }
}

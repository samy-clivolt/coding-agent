import { codingAgent } from "./agent";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

codingAgent(
  "Add an English section to the readme of this project. Use standard format.",
  "https://github.com/samy-clivolt/assistant-ui-mastra-starter-template",
)
  .then(console.log)
  .catch(console.error);
import { handlers } from "./requestHandlers";
import { setupServer } from "msw/node";

export const server = setupServer(...handlers);

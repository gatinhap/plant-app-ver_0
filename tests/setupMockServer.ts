import { setupServer } from 'msw/node';
import { handlers } from './requestHandlers.ts';

const server = setupServer(...handlers);

export default server;

import { SetupWorker, setupWorker } from 'msw/browser';
import { handlers } from '../components/flowersPage/config/FlowerSchema.requestHandlers.ts';

export const worker: SetupWorker = setupWorker(...handlers);

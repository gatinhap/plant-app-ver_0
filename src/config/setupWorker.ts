import { SetupWorker, setupWorker } from 'msw/browser';
import { handlers } from '../../tests/requestHandlers.ts';

export const worker: SetupWorker = setupWorker(...handlers);

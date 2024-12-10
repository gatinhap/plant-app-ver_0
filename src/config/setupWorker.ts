import { SetupWorker, setupWorker } from 'msw/browser';
import { handlers } from '../../tests/requestHandlers.ts';

const worker: SetupWorker = setupWorker(...handlers);

export default worker;

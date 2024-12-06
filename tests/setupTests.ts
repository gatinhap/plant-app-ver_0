import '@testing-library/jest-dom';
import server from './setupMockServer';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

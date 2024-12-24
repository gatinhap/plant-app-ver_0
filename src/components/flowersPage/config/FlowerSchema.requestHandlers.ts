import { http, HttpResponse } from 'msw';
import FlowerData from '../FlowersPage.mocks.ts';

export const getFlowersListSuccessHandler = http.get('mock-api/flowers', () =>
  HttpResponse.json({
    items: FlowerData,
  }),
);

export const handlers = [getFlowersListSuccessHandler];

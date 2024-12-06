import {
  HOST,
  PLANTS_COLLECTION_ENDPOINT,
  USERS_COLLECTION_ENDPOINT,
} from '../src/Backend.constants.ts';

export const returnUserData = (path: string) =>
  `${HOST}api/collections/${USERS_COLLECTION_ENDPOINT}/${path}`;

export const returnPlantData = () =>
  `${HOST}api/collections/${PLANTS_COLLECTION_ENDPOINT}/records`;

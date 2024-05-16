import {
  HOST,
  PLANTS_COLLECTION_ENDPOINT,
  USERS_COLLECTION_ENDPOINT
} from "../src/Backend.constants";

export const returnUserData = (path: string) => {
  return `${HOST}api/collections/${USERS_COLLECTION_ENDPOINT}/${path}`;
};

export const returnPlantData = () => {
  return `${HOST}api/collections/${PLANTS_COLLECTION_ENDPOINT}/records`;
};

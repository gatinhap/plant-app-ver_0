import PocketBase from 'pocketbase';

export const PLANTS_COLLECTION_ENDPOINT = 'plant_app_data';

export const USERS_COLLECTION_ENDPOINT = 'users';

export const HOST = 'http://130.61.124.188/';

export const pb = new PocketBase(HOST);

export const plantQueryKey = 'plants';

export const usersQueryKey = 'users';

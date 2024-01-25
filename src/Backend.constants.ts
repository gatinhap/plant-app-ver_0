import PocketBase from "pocketbase";

export const PLANTS_COLLECTION = "plant_app_data";

export const USERS_COLLECTION = "users";

export const API_ENDPOINT = "http://130.61.124.188/";

export const pb = new PocketBase(API_ENDPOINT);

export const plantQueryKey = "plants";

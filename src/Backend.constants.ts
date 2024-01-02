import PocketBase from "pocketbase";

export const PLANTS_COLLECTION = "plant_app_data";

export const API_ENDPOINT = "http://127.0.0.1:8090";

export const pb = new PocketBase(API_ENDPOINT);

export const plantQueryKey = "plants";

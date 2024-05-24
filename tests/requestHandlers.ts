import { returnPlantData, returnUserData } from "./integrationTests.setup";
import { http, HttpResponse } from "msw";
import { PlantData } from "../src/components/plantCollection/PlantCollection.mocks.ts";

export const getUserSuccessHandler = http.get(
  returnUserData("auth-with-password"),
  () =>
    HttpResponse.json({
      record: {
        avatar: "",
        collectionId: "_pb_users_auth_",
        collectionName: "users",
        created: "2024-02-23 12:58:43.610Z",
        email: "piorek.julia@gmail.com",
        emailVisibility: false,
        id: "t7who3pugzlhwp0",
        name: "",
        updated: "2024-05-14 09:18:45.501Z",
        username: "Julia",
        verified: false
      },
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xsZWN0aW9uSWQiOiJfcGJfdXNlcnNfYXV0aF8iLCJleHAiOjE3MTcwNzQxODgsImlkIjoidDd3aG8zcHVnemxod3AwIiwidHlwZSI6ImF1dGhSZWNvcmQifQ._-1uan-tvc_cawimk_oPGGYDTIaZ9aFTS9VYTaHe5SY"
    })
);

export const getPlantsListSuccessHandler = http.get(returnPlantData(), () =>
  HttpResponse.json({
    items: PlantData
  })
);

export const handlers = [getUserSuccessHandler, getPlantsListSuccessHandler];

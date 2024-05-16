import { returnPlantData, returnUserData } from "./integrationTests.setup";
import { http, HttpResponse } from "msw";

export const getUserSuccessHandler = http.get(
  returnUserData("auth-with-password"),
  () => {
    return HttpResponse.json({
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
    });
  }
);

export const getPlantsListSuccessHandler = http.get(
  returnPlantData(),
  ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const perPage = url.searchParams.get("perPage"); // Extracting the perPage query parameter
    const filter = url.searchParams.get("filter"); // Extracting the filter query parameter
    const user = url.searchParams.get("user");

    return HttpResponse.json({
      page: 1,
      perPage: 100,
      totalItems: 4,
      totalPages: 1,
      items: [
        {
          collectionId: "6jl6usebnke05a7",
          collectionName: "plant_app_data",
          created: "2024-02-23 12:59:10.075Z",
          fertilization: "dlfjals",
          id: "0jhht0ymvqn6m1y",
          light: "tak",
          misting: "tak",
          plantName: "zamio julii",
          soil: "flafldsj",
          updated: "2024-05-15 09:14:30.429Z",
          user: "t7who3pugzlhwp0",
          watering: "często"
        },
        {
          collectionId: "6jl6usebnke05a7",
          collectionName: "plant_app_data",
          created: "2024-03-08 12:06:51.602Z",
          fertilization: "tak",
          id: "gkvw4ieuj93g5pj",
          light: "dużo ",
          misting: "tak",
          plantName: "monstera",
          soil: "przepuszczalna",
          updated: "2024-03-08 14:50:03.029Z",
          user: "t7who3pugzlhwp0",
          watering: "często"
        },
        {
          collectionId: "6jl6usebnke05a7",
          collectionName: "plant_app_data",
          created: "2024-03-08 13:02:21.705Z",
          fertilization: "często",
          id: "nuc6yaj70ioin4l",
          light: "dużo ",
          misting: "tak",
          plantName: "zamio",
          soil: "przepuszczalna",
          updated: "2024-03-08 13:02:21.705Z",
          user: "t7who3pugzlhwp0",
          watering: "często"
        },
        {
          collectionId: "6jl6usebnke05a7",
          collectionName: "plant_app_data",
          created: "2024-05-15 09:14:43.480Z",
          fertilization: "",
          id: "revzabsa0voqfwf",
          light: "lfdjslk",
          misting: "fldjlfk",
          plantName: "roślinka",
          soil: "lsdkjfas;l",
          updated: "2024-05-15 09:14:43.480Z",
          user: "t7who3pugzlhwp0",
          watering: "fljdalf"
        }
      ]
    });
  }
);

export const handlers = [getUserSuccessHandler, getPlantsListSuccessHandler];

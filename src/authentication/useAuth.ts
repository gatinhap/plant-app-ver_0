import { pb } from "../Backend.constants.ts";

export const useAuth = async () => {
  const user = pb.authStore.token;

  if (user) {
    // return true;
    return console.log(user);
  } else {
    // return false;
    return console.log("no token");
  }
};

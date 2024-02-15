import { pb } from "../Backend.constants.ts";

export const useAuth = () => {
  const user = pb.authStore.token;

  return !!user;
};

import { pb } from '../Backend.constants.ts';

const useAuth = () => {
  const user = pb.authStore.token;

  return !!user;
};

export default useAuth;

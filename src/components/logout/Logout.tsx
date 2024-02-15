import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { pb, usersQueryKey } from "../../Backend.constants.ts";
import { toast } from "react-toastify";
import LogoutButton from "./LogoutButton.tsx";
import Text from "../text/Text.tsx";

const Logout = () => {
  const navigateTo = useNavigate();
  const queryClient = useQueryClient();

  const logoutUser = () => {
    pb.authStore.clear();
    localStorage.setItem("logout", Date.now().toString());
  };

  const logoutUserMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      navigateTo("/welcome");
      toast.success("Użytkownik wylogowany!");

      return queryClient.invalidateQueries({ queryKey: [usersQueryKey] });
    },
  });

  return (
    <>
      {logoutUserMutation.isError && (
        <Text variant={"large"}>
          Nastąpił błąd podczas wylogowywania. Odśwież stronę i spróbuj jeszcze
          raz.
        </Text>
      )}
      {logoutUserMutation.isPending ? (
        <Text variant={"large"}>Wylogowuję...</Text>
      ) : (
        <LogoutButton
          shouldDisplayOnTop={true}
          handleClick={logoutUserMutation.mutate}
        >
          Wyloguj
        </LogoutButton>
      )}
    </>
  );
};

export default Logout;

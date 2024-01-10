import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import NavItem from "../../components/navItem/NavItem.tsx";
import WarningText from "../../components/text/WarningText.tsx";
import CallToActionAsLink from "../../components/callToActionButton/CallToActionAsLink.tsx";
import { useNavigate, useParams } from "react-router-dom";
import {
  pb,
  plantQueryKey,
  PLANTS_COLLECTION,
} from "../../Backend.constants.ts";
import CallToActionButton from "../../components/callToActionButton/CallToActionButton.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Text from "../../components/text/Text.tsx";

const RemovePlant = () => {
  const { plantId } = useParams();
  const navigateTo = useNavigate();
  const queryClient = useQueryClient();

  const removePlant = (id) => {
    return pb.collection(PLANTS_COLLECTION).delete(id);
  };

  const removePlantMutation = useMutation({
    mutationFn: () => removePlant(plantId),
    onSuccess: () => {
      toast.success("Roślinka usunięta z kolekcji!");
      navigateTo("/");

      return async () => {
        await queryClient.invalidateQueries({ queryKey: [plantQueryKey] });
      };
    },
  });

  return (
    <PageComponent>
      <NavItem linkTo={"/"} shouldDisplayOnTop={true}>
        moja kolekcja
      </NavItem>
      {removePlantMutation.isError ? (
        <Text variant={"large"}>
          Nastąpił błąd podczas usuwania roślinki. Spróbuj proszę jeszcze raz.
        </Text>
      ) : null}
      {removePlantMutation.isPending ? (
        <Text variant={"large"}>Usuwam...</Text>
      ) : (
        <>
          <WarningText variant={"large"}>
            Czy na pewno chcesz usunąć tę roślinkę z kolekcji?
          </WarningText>
          <CallToActionButton handleClick={() => removePlantMutation.mutate()}>
            tak, usuń!
          </CallToActionButton>
          <CallToActionAsLink linkTo={`/${plantId}`}>
            nie, wróć!
          </CallToActionAsLink>
        </>
      )}
    </PageComponent>
  );
};

export default RemovePlant;

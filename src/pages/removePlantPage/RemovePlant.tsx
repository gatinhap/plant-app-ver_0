import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import NavItem from "../../components/navItem/NavItem.tsx";
import WarningText from "../../components/text/WarningText.tsx";
import CallToActionAsLink from "../../components/callToActionButton/CallToActionAsLink.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { pb, PLANTS_COLLECTION } from "../../Backend.constants.ts";
import { toast } from "react-toastify";
import CallToActionButton from "../../components/callToActionButton/CallToActionButton.tsx";
import { useMutation } from "@tanstack/react-query";

const RemovePlant = () => {
  const { plantId } = useParams();
  const navigateTo = useNavigate();

  const removePlant = (id) => {
    pb.collection(PLANTS_COLLECTION)
      .delete(id)
      .then(() => {
        toast.success("Roślinka usunięta z kolekcji!");
        navigateTo("/");
      });
  };

  const { mutate } = useMutation({
    mutationFn: () => removePlant(plantId),
  });

  return (
    <PageComponent>
      <NavItem linkTo={"/"} shouldDisplayOnTop={true}>
        moja kolekcja
      </NavItem>
      <WarningText variant={"large"}>
        Czy na pewno chcesz usunąć tę roślinkę z kolekcji?
      </WarningText>
      <CallToActionButton handleClick={() => mutate()}>
        tak, usuń!
      </CallToActionButton>
      <CallToActionAsLink linkTo={`/${plantId}`}>nie, wróć!</CallToActionAsLink>
    </PageComponent>
  );
};

export default RemovePlant;

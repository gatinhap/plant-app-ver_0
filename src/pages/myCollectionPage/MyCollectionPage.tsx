import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import { theme } from "../../theme/theme.ts";
import PlantCollection from "../../components/plantCollection/PlantCollection.tsx";
import CallToActionAsLink from "../../components/callToAction/CallToActionAsLink.tsx";

const MyCollectionPage = () => {
  return (
    <PageComponent>
      <h3>moja kolekcja</h3>
      <CallToActionAsLink
        linkTo={"/dodaj-roślinkę"}
        color={theme.colors.cream}
        backgroundColor={theme.colors.mediumGreen}
      >
        dodaj roślinkę do kolekcji
      </CallToActionAsLink>

      <PlantCollection />
    </PageComponent>
  );
};

export default MyCollectionPage;

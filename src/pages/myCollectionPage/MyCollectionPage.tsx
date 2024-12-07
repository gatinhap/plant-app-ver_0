import PageComponent from '../../components/pageComponent/PageComponent.tsx';
import PlantCollection from '../../components/plantCollection/PlantCollection.tsx';
import CallToActionAsLink from '../../components/callToActionButton/CallToActionAsLink.tsx';
import Logout from '../../components/logout/Logout.tsx';
import StaticText from '../pages.constants.ts';
import AppPaths from '../../config/appPaths.ts';

const MyCollectionPage = () => (
  <PageComponent>
    <Logout />

    <h3>{StaticText.PLANT_LIST_HEADING}</h3>

    <CallToActionAsLink linkTo={AppPaths.Private.AddNewPlant}>
      {StaticText.PLANT_LIST_ADD_BUTTON}
    </CallToActionAsLink>

    <PlantCollection />
  </PageComponent>
);

export default MyCollectionPage;

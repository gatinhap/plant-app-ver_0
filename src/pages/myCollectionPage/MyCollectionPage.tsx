import PageComponent from '../../components/pageComponent/PageComponent.tsx';
import Logout from '../../components/logout/Logout.tsx';
import StaticText from '../pages.constants.ts';
import FlowersPage from '../../components/flowersPage/FlowersPage.tsx';

const MyCollectionPage = () => (
  <PageComponent>
    <Logout />

    <h3>{StaticText.PLANT_LIST_HEADING}</h3>

    <FlowersPage />
  </PageComponent>
);

export default MyCollectionPage;

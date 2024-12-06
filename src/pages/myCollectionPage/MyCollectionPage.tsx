import PageComponent from '../../components/pageComponent/PageComponent.tsx';
import PlantCollection from '../../components/plantCollection/PlantCollection.tsx';
import CallToActionAsLink from '../../components/callToActionButton/CallToActionAsLink.tsx';
import Logout from '../../components/logout/Logout.tsx';

const MyCollectionPage = () => (
    <PageComponent>
      <Logout />

      <h3>moja kolekcja</h3>

      <CallToActionAsLink linkTo="/dodaj-roślinkę">
        dodaj roślinkę do kolekcji
      </CallToActionAsLink>

      <PlantCollection />
    </PageComponent>
  )

export default MyCollectionPage;

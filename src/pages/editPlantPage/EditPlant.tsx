import PageComponent from '../../components/pageComponent/PageComponent.tsx';
import NavItem from '../../components/navItem/NavItem.tsx';
import EditPlantForm from '../../components/forms/EditPlantForm.tsx';

const EditPlant = () => (
  <PageComponent>
    <NavItem linkTo="/" shouldDisplayOnTop>
      moja kolekcja
    </NavItem>

    <h3>tryb edycji</h3>

    <EditPlantForm />
  </PageComponent>
);

export default EditPlant;

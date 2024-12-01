import PageComponent from '../../components/pageComponent/PageComponent.tsx';
import NavItem from '../../components/navItem/NavItem.tsx';
import AddNewPlantForm from '../../components/forms/AddNewPlantForm.tsx';

const AddNewPlant = () => (
  <PageComponent>
    <NavItem linkTo="/" shouldDisplayOnTop>
      moja kolekcja
    </NavItem>

    <h3>dodaj roślinkę</h3>

    <AddNewPlantForm />
  </PageComponent>
);

export default AddNewPlant;

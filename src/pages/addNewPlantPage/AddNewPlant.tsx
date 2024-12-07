import PageComponent from '../../components/pageComponent/PageComponent.tsx';
import NavItem from '../../components/navItem/NavItem.tsx';
import AddNewPlantForm from '../../components/forms/AddNewPlantForm.tsx';
import AppPaths from '../../config/appPaths.ts';
import StaticText from '../pages.constants.ts';

const AddNewPlant = () => (
  <PageComponent>
    <NavItem linkTo={AppPaths.Private.PlantCollection} shouldDisplayOnTop>
      {StaticText.TOP_LINK}
    </NavItem>

    <h3>{StaticText.ADD_PLANT_HEADING}</h3>

    <AddNewPlantForm />
  </PageComponent>
);

export default AddNewPlant;

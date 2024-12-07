import PageComponent from '../../components/pageComponent/PageComponent.tsx';
import NavItem from '../../components/navItem/NavItem.tsx';
import EditPlantForm from '../../components/forms/EditPlantForm.tsx';
import AppPaths from '../../config/appPaths.ts';
import StaticText from '../pages.constants.ts';

const EditPlant = () => (
  <PageComponent>
    <NavItem linkTo={AppPaths.Private.PlantCollection} shouldDisplayOnTop>
      {StaticText.TOP_LINK}
    </NavItem>

    <h3>{StaticText.EDIT_PLANT_HEADING}</h3>

    <EditPlantForm />
  </PageComponent>
);

export default EditPlant;

import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import NavItem from "../../components/navItem/NavItem.tsx";
import EditForm from "../../components/forms/EditForm.tsx";

const EditPlant = () => {
  return (
    <PageComponent>
      <NavItem linkTo={"/"} shouldDisplayOnTop={true}>
        moja kolekcja
      </NavItem>
      <h3>tryb edycji</h3>
      <EditForm />
    </PageComponent>
  );
};

export default EditPlant;

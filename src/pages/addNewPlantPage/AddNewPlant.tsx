import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import NavItem from "../../components/navItem/NavItem.tsx";
import Form from "../../components/form/Form.tsx";

const AddNewPlant = () => {
  return (
    <PageComponent>
      <NavItem linkTo={"/"} shouldDisplayOnTop={true}>
        moja kolekcja
      </NavItem>
      <h3>dodaj roślinkę</h3>
      <Form />
    </PageComponent>
  );
};

export default AddNewPlant;

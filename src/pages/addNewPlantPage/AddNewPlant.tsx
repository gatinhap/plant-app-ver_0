import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import NavItem from "../../components/navItem/NavItem.tsx";
import { Color } from "../../components/colors.ts";
import Form from "../../components/form/Form.tsx";

const AddNewPlant = () => {
  return (
    <PageComponent>
      <NavItem
        backgroundColor={Color.lightGreen}
        color={Color.mediumGreen}
        linkTo={"/"}
        shouldDisplay={true}
      >
        moja kolekcja
      </NavItem>
      <h3>dodaj roślinkę</h3>
      <Form />
    </PageComponent>
  );
};

export default AddNewPlant;

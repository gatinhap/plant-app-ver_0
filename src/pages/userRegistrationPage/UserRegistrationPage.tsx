import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import UserRegistrationForm from "../../components/userForms/UserRegistrationForm.tsx";
import NavItem from "../../components/navItem/NavItem.tsx";

const UserRegistrationPage = () => {
  return (
    <PageComponent>
      <NavItem linkTo={"/"} shouldDisplayOnTop={true}>
        moja kolekcja
      </NavItem>
      <h4>hej, stwórz konto, aby móc korzystać z aplikacji</h4>
      <UserRegistrationForm />
    </PageComponent>
  );
};

export default UserRegistrationPage;

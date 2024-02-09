import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import NavItem from "../../components/navItem/NavItem.tsx";
import LoginForm from "../../components/userForms/LoginForm.tsx";

const LoginPage = () => {
  return (
    <PageComponent>
      <NavItem linkTo={"/"} shouldDisplayOnTop={true}>
        moja kolekcja
      </NavItem>
      <h3>strona logowania</h3>
      <LoginForm />
    </PageComponent>
  );
};

export default LoginPage;

import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import NavItem from "../../components/navItem/NavItem.tsx";

const LoginPage = () => {
  return (
    <PageComponent>
      <NavItem linkTo={"/"} shouldDisplayOnTop={true}>
        moja kolekcja
      </NavItem>
      <h3>strona logowania</h3>
    </PageComponent>
  );
};

export default LoginPage;

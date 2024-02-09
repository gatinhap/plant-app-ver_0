import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import CallToActionAsLink from "../../components/callToActionButton/CallToActionAsLink.tsx";

const WelcomePage = () => {
  return (
    <PageComponent>
      <h3>hej, tu PlantMomma</h3>
      <h4>Zaloguj się lub zarejestruj, aby korzystać z aplikacji</h4>
      <CallToActionAsLink linkTo={"/registration"}>
        Zarejestruj się
      </CallToActionAsLink>
      <CallToActionAsLink linkTo={"/login"}>Zaloguj się</CallToActionAsLink>
    </PageComponent>
  );
};

export default WelcomePage;

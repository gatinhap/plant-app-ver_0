import PageComponent from "../../components/pageComponent/PageComponent.tsx";
import CallToActionAsLink from "../../components/callToActionButton/CallToActionAsLink.tsx";
import Text from "../../components/text/Text.tsx";

const WelcomePage = () => {
  return (
    <PageComponent>
      <h3>hej, tu PlantMomma</h3>
      <Text variant={"large"}>
        Zaloguj się lub zarejestruj, aby korzystać z aplikacji!
      </Text>
      <CallToActionAsLink linkTo={"/login"}>Zaloguj</CallToActionAsLink>
      <CallToActionAsLink linkTo={"/registration"}>
        Zarejestruj
      </CallToActionAsLink>
    </PageComponent>
  );
};

export default WelcomePage;

import PageComponent from '../../components/pageComponent/PageComponent.tsx';
import CallToActionAsLink from '../../components/callToActionButton/CallToActionAsLink.tsx';
import Text from '../../components/text/Text.tsx';
import { ParagraphVariantEnum } from '../../components/text/Text.types.tsx';
import StaticText from '../pages.constants.ts';
import AppPaths from '../../config/appPaths.ts';

const WelcomePage = () => (
  <PageComponent>
    <h3>{StaticText.WELCOME_PAGE_HEADING}</h3>

    <Text variant={ParagraphVariantEnum.large}>
      {StaticText.WELCOME_PAGE.WELCOME_TEXT}
    </Text>

    <CallToActionAsLink linkTo={AppPaths.Public.Login}>
      {' '}
      {StaticText.WELCOME_PAGE.LOGIN_LINK}
    </CallToActionAsLink>

    <CallToActionAsLink linkTo={AppPaths.Public.Register}>
      {StaticText.WELCOME_PAGE.REGISTRATION_LINK}
    </CallToActionAsLink>
  </PageComponent>
);

export default WelcomePage;

import PageComponent from '../../components/pageComponent/PageComponent.tsx';
import UserRegistrationForm from '../../components/userForms/UserRegistrationForm.tsx';
import StaticText from '../pages.constants.ts';

const UserRegistrationPage = () => (
  <PageComponent>
    <h4>{StaticText.REGISTRATION_PAGE_HEADING}</h4>

    <UserRegistrationForm />
  </PageComponent>
);

export default UserRegistrationPage;

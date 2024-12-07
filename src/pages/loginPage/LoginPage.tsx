import PageComponent from '../../components/pageComponent/PageComponent.tsx';
import LoginForm from '../../components/userForms/LoginForm.tsx';
import StaticText from '../pages.constants.ts';

const LoginPage = () => (
  <PageComponent>
    <h3>{StaticText.LOGIN_PAGE_HEADING}</h3>

    <LoginForm />
  </PageComponent>
);

export default LoginPage;

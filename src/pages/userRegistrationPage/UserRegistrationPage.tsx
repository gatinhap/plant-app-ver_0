import PageComponent from '../../components/pageComponent/PageComponent.tsx';
import UserRegistrationForm from '../../components/userForms/UserRegistrationForm.tsx';

const UserRegistrationPage = () => (
    <PageComponent>
      <h4>hej, stwórz konto, aby móc korzystać z aplikacji</h4>

      <UserRegistrationForm />
    </PageComponent>
  )

export default UserRegistrationPage;

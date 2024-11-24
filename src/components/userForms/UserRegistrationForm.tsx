import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ClientResponseError } from 'pocketbase';
import { UserRegistrationFormValues } from './UserRegistrationForm.types.ts';
import { StyledForm } from '../forms/Form.styles.ts';
import LabelField from '../formElements/LabelField.tsx';
import InputField from '../formElements/InputField.tsx';
import Text from '../text/Text.tsx';
import FormButton from '../forms/FormButton.tsx';
import {
  pb,
  USERS_COLLECTION_ENDPOINT,
  usersQueryKey,
} from '../../Backend.constants.ts';

function UserRegistrationForm() {
  const navigateTo = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    formState: { errors },
  } = useForm<UserRegistrationFormValues>({ mode: 'onChange' });

  const addUserMutation = useMutation({
    mutationFn: (newUser: UserRegistrationFormValues) => pb.collection(USERS_COLLECTION_ENDPOINT).create(newUser),
    onSuccess: () => {
      toast.success('Rejestracja przebiegła pomyślnie!');
      reset();
      navigateTo('/login');

      return queryClient.invalidateQueries({ queryKey: [usersQueryKey] });
    },
    onError: (e: ClientResponseError) => {
      const errors = e.response.data;

      if (errors.username) {
        setError('username', {
          type: 'server',
          message: `${errors.username.message}`,
        });
      }

      if (errors.email) {
        setError('email', {
          type: 'server',
          message: `${errors.email.message}`,
        });
      }
      toast.error('Wystąpił błąd podczas rejestracji. Spróbuj ponownie.');
    },
  });

  const submitUserData: SubmitHandler<UserRegistrationFormValues> = (
    userData,
  ) => addUserMutation.mutate(userData);

  return (
    <>
      {addUserMutation.isPending ? (
        <Text variant="large">Dodaję...</Text>
      ) : (
        <StyledForm onSubmit={handleSubmit(submitUserData)}>
          <LabelField>
            nazwa użytkownika
            <InputField
              placeholder="mów na mnie..."
              {...register('username', {
                required: {
                  value: true,
                  message: 'Podaj nazwę użytkownika!',
                },
                maxLength: {
                  value: 30,
                  message:
                    'Nazwa użytkownika może zawierać maksymalnie 30 znaków!',
                },
              })}
            />

            <ErrorMessage
              as={<Text color="warning" variant="small" />}
              errors={errors}
              name="username"
            />
          </LabelField>

          <LabelField>
            email
            <InputField
              placeholder="mój email to..."
              type="email"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Podaj swój email!',
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Niewłaściwy format maila!',
                },
              })}
            />

            <ErrorMessage
              as={<Text color="warning" variant="small" />}
              errors={errors}
              name="email"
            />
          </LabelField>

          <LabelField>
            hasło
            <InputField
              placeholder="moje hasło..."
              type="password"
              {...register('password', {
                required: {
                  value: true,
                  message: 'Hasło jest wymagane',
                },
                maxLength: {
                  value: 20,
                  message: 'Hasło nie może przekroczyć 20 znaków!',
                },
                minLength: {
                  value: 8,
                  message: 'Hasło musi zawierać co najmniej 8 znaków!',
                },
              })}
            />

            <ErrorMessage
              as={<Text color="warning" variant="small" />}
              errors={errors}
              name="password"
            />
          </LabelField>

          <LabelField>
            powtórz hasło
            <InputField
              placeholder="moje hasło..."
              type="password"
              {...register('passwordConfirm', {
                required: {
                  value: true,
                  message: 'Powtórzenie hasła jest wymagane!',
                },
                validate: (val: string) => {
                  if (watch('password') != val) {
                    return 'Hasła nie pasują do siebie';
                  }
                },
              })}
            />

            <ErrorMessage
              as={<Text color="warning" variant="small" />}
              errors={errors}
              name="passwordConfirm"
            />
          </LabelField>

          <FormButton type="submit">stwórz konto</FormButton>
        </StyledForm>
      )}
    </>
  );
}

export default UserRegistrationForm;

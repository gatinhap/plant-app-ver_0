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
import StaticText from './UserForm.constants.ts';
import { ButtonTypes } from '../forms/Form.types.ts';

const UserRegistrationForm = () => {
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
    mutationFn: (newUser: UserRegistrationFormValues) =>
      pb.collection(USERS_COLLECTION_ENDPOINT).create(newUser),
    onSuccess: () => {
      toast.success(StaticText.REGISTRATION_FORM.ADD_USER_IS_SUCCESS);
      reset();
      navigateTo('/login');

      return queryClient.invalidateQueries({ queryKey: [usersQueryKey] });
    },
    onError: (e: ClientResponseError) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const registrationErrors = e.response.data;

      if (registrationErrors.username) {
        setError('username', {
          type: 'server',
          message: `${registrationErrors.username.message}`,
        });
      }

      if (registrationErrors.email) {
        setError('email', {
          type: 'server',
          message: `${registrationErrors.email.message}`,
        });
      }
      toast.error(StaticText.REGISTRATION_FORM.ADD_USER_IS_ERROR);
    },
  });

  const submitUserData: SubmitHandler<UserRegistrationFormValues> = (
    userData,
  ) => addUserMutation.mutate(userData);

  return (
    <>
      {addUserMutation.isPending ? (
        <Text variant="large">
          {StaticText.REGISTRATION_FORM.ADD_USER_IS_PENDING}
        </Text>
      ) : (
        <StyledForm onSubmit={handleSubmit(submitUserData)}>
          <LabelField>
            {StaticText.REGISTRATION_FORM.USERNAME.USERNAME_LABEL}
            <InputField
              placeholder={
                StaticText.REGISTRATION_FORM.USERNAME.USERNAME_PLACEHOLDER
              }
              {...register('username', {
                required: {
                  value: true,
                  message:
                    StaticText.REGISTRATION_FORM.USERNAME.USERNAME_REQUIRED,
                },
                maxLength: {
                  value: 30,
                  message:
                    StaticText.REGISTRATION_FORM.USERNAME.USERNAME_MAXLENGTH,
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
            {StaticText.REGISTRATION_FORM.USER_EMAIL.EMAIL_LABEL}
            <InputField
              placeholder={
                StaticText.REGISTRATION_FORM.USER_EMAIL.EMAIL_PLACEHOLDER
              }
              type="email"
              {...register('email', {
                required: {
                  value: true,
                  message:
                    StaticText.REGISTRATION_FORM.USER_EMAIL.EMAIL_REQUIRED,
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message:
                    StaticText.REGISTRATION_FORM.USER_EMAIL.EMAIL_WRONG_PATTERN,
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
            {StaticText.REGISTRATION_FORM.USER_PASSWORD.PASSWORD_LABEL}
            <InputField
              placeholder={
                StaticText.REGISTRATION_FORM.USER_PASSWORD.PASSWORD_PLACEHOLDER
              }
              type="password"
              {...register('password', {
                required: {
                  value: true,
                  message:
                    StaticText.REGISTRATION_FORM.USER_PASSWORD
                      .PASSWORD_REQUIRED,
                },
                maxLength: {
                  value: 20,
                  message:
                    StaticText.REGISTRATION_FORM.USER_PASSWORD
                      .PASSWORD_MAXLENGTH,
                },
                minLength: {
                  value: 8,
                  message:
                    StaticText.REGISTRATION_FORM.USER_PASSWORD
                      .PASSWORD_MINLENGTH,
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
            {StaticText.REGISTRATION_FORM.USER_PASSWORD_REPEAT.PASSWORD_LABEL}
            <InputField
              placeholder={
                StaticText.REGISTRATION_FORM.USER_PASSWORD_REPEAT
                  .PASSWORD_PLACEHOLDER
              }
              type="password"
              {...register('passwordConfirm', {
                required: {
                  value: true,
                  message:
                    StaticText.REGISTRATION_FORM.USER_PASSWORD_REPEAT
                      .PASSWORD_REQUIRED,
                },
                validate: (val: string) =>
                  watch('password') !== val
                    ? StaticText.REGISTRATION_FORM.USER_PASSWORD_REPEAT
                        .PASSWORD_NOT_MATCHING
                    : true,
              })}
            />
            <ErrorMessage
              as={<Text color="warning" variant="small" />}
              errors={errors}
              name="passwordConfirm"
            />
          </LabelField>
          <FormButton type={ButtonTypes.SUBMIT}>
            {StaticText.REGISTRATION_FORM.CREATE_USER_BUTTON}
          </FormButton>
        </StyledForm>
      )}
    </>
  );
};

export default UserRegistrationForm;

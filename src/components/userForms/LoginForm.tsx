import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LoginFormValues } from './LoginForm.types.ts';
import LabelField from '../formElements/LabelField.tsx';
import InputField from '../formElements/InputField.tsx';
import Text from '../text/Text.tsx';
import FormButton from '../forms/FormButton.tsx';
import { StyledForm } from '../forms/Form.styles.ts';
import {
  pb,
  USERS_COLLECTION_ENDPOINT,
  usersQueryKey,
} from '../../Backend.constants.ts';
import StaticText from './UserForm.constants.ts';
import { ButtonTypes } from '../forms/Form.types.ts';

const LoginForm = () => {
  const navigateTo = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: 'onChange' });

  const userLoginMutation = useMutation({
    mutationFn: ({ email, password }: LoginFormValues) =>
      pb
        .collection(USERS_COLLECTION_ENDPOINT)
        .authWithPassword(email, password),
    onSuccess: () => {
      toast.success(StaticText.LOGIN_FORM.LOGIN_IS_SUCCESS);
      reset();
      navigateTo('/');

      return queryClient.invalidateQueries({ queryKey: [usersQueryKey] });
    },
    onError: () => {
      toast.error(StaticText.LOGIN_FORM.LOGIN_IS_ERROR);
    },
  });

  const submitUserLoginData: SubmitHandler<LoginFormValues> = ({
    email,
    password,
  }) => userLoginMutation.mutate({ email, password });

  return (
    <>
      {errors.root ? <Text variant="large">{errors.root.message}</Text> : null}

      <StyledForm onSubmit={handleSubmit(submitUserLoginData)}>
        <LabelField>
          {StaticText.LOGIN_FORM.EMAIL_LABEL_TEXT}
          <InputField
            placeholder={StaticText.LOGIN_FORM.EMAIL_PLACEHOLDER}
            type="email"
            {...register('email', {
              required: {
                value: true,
                message: 'Email jest wymagany!',
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
          {StaticText.LOGIN_FORM.PASSWORD_LABEL_TEXT}
          <InputField
            placeholder={StaticText.LOGIN_FORM.PASSWORD_PLACEHOLDER}
            type="password"
            {...register('password', {
              required: {
                value: true,
                message: 'Hasło jest wymagane',
              },
            })}
          />
          <ErrorMessage
            as={<Text color="warning" variant="small" />}
            errors={errors}
            name="password"
          />
        </LabelField>

        <FormButton type={ButtonTypes.SUBMIT}>
          {StaticText.LOGIN_FORM.LOGIN_BUTTON}
        </FormButton>
      </StyledForm>
    </>
  );
};

export default LoginForm;

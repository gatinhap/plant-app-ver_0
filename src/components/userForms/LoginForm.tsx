import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormValues } from "./LoginForm.types.ts";
import LabelField from "../formElements/LabelField.tsx";
import InputField from "../formElements/InputField.tsx";
import { ErrorMessage } from "@hookform/error-message";
import Text from "../text/Text.tsx";
import FormButton from "../forms/FormButton.tsx";
import { StyledForm } from "../forms/Form.styles.ts";
import {
  pb,
  USERS_COLLECTION,
  usersQueryKey,
} from "../../Backend.constants.ts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const LoginForm = () => {
  const navigateTo = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: "onChange" });

  const userLoginMutation = useMutation({
    mutationFn: ({ email, password }: LoginFormValues) =>
      pb.collection(USERS_COLLECTION).authWithPassword(email, password),
    onSuccess: () => {
      toast.success("Użytkownik zalogowany!");
      reset();
      navigateTo("/");

      return queryClient.invalidateQueries({ queryKey: [usersQueryKey] });
    },
    onError: () => {
      toast.error("Wystąpił błąd podczas logowania. Spróbuj ponownie.");
    },
  });

  const submitUserLoginData: SubmitHandler<LoginFormValues> = ({
    email,
    password,
  }) => {
    return userLoginMutation.mutate({ email, password });
  };

  return (
    <>
      {errors.root && <Text variant={"large"}>{errors.root.message}</Text>}

      <StyledForm onSubmit={handleSubmit(submitUserLoginData)}>
        <LabelField>
          email podany przy logowaniu
          <InputField
            type={"email"}
            placeholder={"mój email to..."}
            {...register("email", {
              required: {
                value: true,
                message: "Email jest wymagany!",
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Niewłaściwy format maila!",
              },
            })}
          />
          <ErrorMessage
            name={"email"}
            errors={errors}
            as={<Text color={"warning"} variant={"small"} />}
          />
        </LabelField>
        <LabelField>
          Twoje hasło
          <InputField
            type={"password"}
            placeholder={"moje hasło..."}
            {...register("password", {
              required: {
                value: true,
                message: "Hasło jest wymagane",
              },
            })}
          />
          <ErrorMessage
            name={"password"}
            errors={errors}
            as={<Text color={"warning"} variant={"small"} />}
          />
        </LabelField>
        <FormButton type={"submit"}>Zaloguj się</FormButton>
      </StyledForm>
    </>
  );
};

export default LoginForm;

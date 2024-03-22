import { SubmitHandler, useForm } from "react-hook-form";
import { UserRegistrationFormValues } from "./UserRegistrationForm.types.ts";
import { StyledForm } from "../forms/Form.styles.ts";
import LabelField from "../formElements/LabelField.tsx";
import InputField from "../formElements/InputField.tsx";
import { ErrorMessage } from "@hookform/error-message";
import Text from "../text/Text.tsx";
import FormButton from "../forms/FormButton.tsx";
import {
  pb,
  USERS_COLLECTION,
  usersQueryKey,
} from "../../Backend.constants.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ClientResponseError } from "pocketbase";

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
  } = useForm<UserRegistrationFormValues>({ mode: "onChange" });

  const addUserMutation = useMutation({
    mutationFn: (newUser: UserRegistrationFormValues) =>
      pb.collection(USERS_COLLECTION).create(newUser),
    onSuccess: () => {
      toast.success("Rejestracja przebiegła pomyślnie!");
      reset();
      navigateTo("/login");

      return queryClient.invalidateQueries({ queryKey: [usersQueryKey] });
    },
    onError: (e: ClientResponseError) => {
      const errors = e.response.data;

      if (errors.username) {
        setError("username", {
          type: "server",
          message: `${errors.username.message}`,
        });
      }

      if (errors.email) {
        setError("email", {
          type: "server",
          message: `${errors.email.message}`,
        });
      }
      toast.error("Wystąpił błąd podczas rejestracji. Spróbuj ponownie.");
    },
  });

  const submitUserData: SubmitHandler<UserRegistrationFormValues> = (
    userData,
  ) => addUserMutation.mutate(userData);

  return (
    <>
      {addUserMutation.isPending ? (
        <Text variant={"large"}>Dodaję...</Text>
      ) : (
        <StyledForm onSubmit={handleSubmit(submitUserData)}>
          <LabelField>
            nazwa użytkownika
            <InputField
              placeholder={"mów na mnie..."}
              {...register("username", {
                required: {
                  value: true,
                  message: "Podaj nazwę użytkownika!",
                },
                maxLength: {
                  value: 30,
                  message:
                    "Nazwa użytkownika może zawierać maksymalnie 30 znaków!",
                },
              })}
            />
            <ErrorMessage
              name={"username"}
              errors={errors}
              as={<Text color={"warning"} variant={"small"} />}
            />
          </LabelField>
          <LabelField>
            email
            <InputField
              type={"email"}
              placeholder={"mój email to..."}
              {...register("email", {
                required: {
                  value: true,
                  message: "Podaj swój email!",
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
            hasło
            <InputField
              type={"password"}
              placeholder={"moje hasło..."}
              {...register("password", {
                required: {
                  value: true,
                  message: "Hasło jest wymagane",
                },
                maxLength: {
                  value: 20,
                  message: "Hasło nie może przekroczyć 20 znaków!",
                },
                minLength: {
                  value: 8,
                  message: "Hasło musi zawierać co najmniej 8 znaków!",
                },
              })}
            />
            <ErrorMessage
              name={"password"}
              errors={errors}
              as={<Text color={"warning"} variant={"small"} />}
            />
          </LabelField>
          <LabelField>
            powtórz hasło
            <InputField
              type={"password"}
              placeholder={"moje hasło..."}
              {...register("passwordConfirm", {
                required: {
                  value: true,
                  message: "Powtórzenie hasła jest wymagane!",
                },
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Hasła nie pasują do siebie";
                  }
                },
              })}
            />
            <ErrorMessage
              name={"passwordConfirm"}
              errors={errors}
              as={<Text color={"warning"} variant={"small"} />}
            />
          </LabelField>
          <FormButton type={"submit"}>stwórz konto</FormButton>
        </StyledForm>
      )}
    </>
  );
};

export default UserRegistrationForm;

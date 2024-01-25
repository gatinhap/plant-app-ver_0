import { SubmitHandler, useForm } from "react-hook-form";
import { UserRegistrationFormValues } from "./UserRegistrationForm.types.ts";
import { StyledForm } from "../forms/Form.styles.ts";
import LabelField from "../formElements/LabelField.tsx";
import InputField from "../formElements/InputField.tsx";
import { ErrorMessage } from "@hookform/error-message";
import Text from "../text/Text.tsx";
import FormButton from "../forms/FormButton.tsx";
import { pb, USERS_COLLECTION } from "../../Backend.constants.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserRegistrationForm = () => {
  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<UserRegistrationFormValues>({ mode: "onChange" });

  const submitUserData: SubmitHandler<UserRegistrationFormValues> = async (
    userData,
  ) => {
    try {
      await pb.collection(USERS_COLLECTION).create(userData);
      toast.success("Rejestracja przebiegła pomyślnie!");
      reset();
      navigateTo("/login");
    } catch (error) {
      console.log("Nie udało się stworzyć użytkownika", error.response.data);
      toast.error("Wystąpił błąd podczas rejestracji. Spróbuj ponownie.");
    }
  };

  return (
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
              message: "Nazwa użytkownika może zawierać maksymalnie 30 znaków!",
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
  );
};

export default UserRegistrationForm;

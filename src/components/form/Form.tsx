import LabelField from "../formElements/LabelField.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import FormButton from "./FormButton.tsx";
import { StyledForm } from "./Form.styles.ts";
import InputField from "../formElements/InputField.tsx";
import { FormValues } from "./Form.types.ts";
import { toast } from "react-toastify";
import { ErrorMessage } from "@hookform/error-message";
import { pb, PLANTS_COLLECTION } from "../../Backend.constants.ts";
import TextArea from "../formElements/TextArea.tsx";
import Text from "../text/Text.tsx";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    pb.collection(PLANTS_COLLECTION)
      .create(data)
      .then(() => {
        toast.success("Roślinka dodana do kolekcji!");

        reset();
      });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <LabelField>
          podaj nazwę roślinki
          <InputField
            placeholder={"nazywam się..."}
            {...register("plantName", {
              required: {
                value: true,
                message: "Dodaj nazwę roślinki!",
              },
              maxLength: {
                value: 20,
                message: "Nazwa roślinki może zawierać maksymalnie 20 znaków!",
              },
            })}
          />
          <ErrorMessage
            name={"plantName"}
            errors={errors}
            as={<Text alertType={"warning"} variant={"small"} />}
          />
        </LabelField>

        <LabelField>
          jak chcesz ją podlewać
          <TextArea
            placeholder={"wpisz jak bardzo lubię wodę..."}
            {...register("watering", {
              maxLength: {
                value: 512,
                message: "Opis może zawierać maksymalnie 512 znaków!",
              },
            })}
          />
          <ErrorMessage
            name={"watering"}
            errors={errors}
            as={<Text alertType={"warning"} variant={"small"} />}
          />
        </LabelField>

        <LabelField>
          czy lubi zraszanie
          <TextArea
            placeholder={
              "niektóre z nas to uwielbiają, a inne nie mogą znieść, a ja..."
            }
            {...register("misting", {
              maxLength: {
                value: 512,
                message: "Opis może zawierać maksymalnie 512 znaków!",
              },
            })}
          />
          <ErrorMessage
            name={"misting"}
            errors={errors}
            as={<Text alertType={"warning"} variant={"small"} />}
          />
        </LabelField>

        <LabelField>
          światło - dużo czy mało
          <TextArea
            placeholder={"słońce, słoneczko utrzymuje mnie przy życiu..."}
            {...register("light", {
              maxLength: {
                value: 512,
                message: "Opis może zawierać maksymalnie 512 znaków!",
              },
            })}
          />
          <ErrorMessage
            name={"light"}
            errors={errors}
            as={<Text alertType={"warning"} variant={"small"} />}
          />
        </LabelField>

        <LabelField>
          gleba
          <TextArea
            placeholder={
              "uniwersalna, a może bigosik, hmm, ja najbardziej lubię..."
            }
            {...register("soil", {
              maxLength: {
                value: 512,
                message: "Opis może zawierać maksymalnie 512 znaków!",
              },
            })}
          />
          <ErrorMessage
            name={"soil"}
            errors={errors}
            as={<Text alertType={"warning"} variant={"small"} />}
          />
        </LabelField>

        <LabelField>
          nawożenie
          <TextArea
            placeholder={"witaminki dla roślinki, a moje ulubione to..."}
            {...register("fertilization", {
              maxLength: {
                value: 512,
                message: "Opis może zawierać maksymalnie 512 znaków!",
              },
            })}
          />
          <ErrorMessage
            name={"fertilization"}
            errors={errors}
            as={<Text alertType={"warning"} variant={"small"} />}
          />
        </LabelField>

        <FormButton type={"submit"}>zapisz</FormButton>
      </StyledForm>
    </>
  );
};

export default Form;

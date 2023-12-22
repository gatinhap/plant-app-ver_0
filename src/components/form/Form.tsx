import LabelField from "../inputAndLabel/LabelField.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import FormButton from "./FormButton.tsx";
import { StyledForm } from "./Form.styles.ts";
import { nanoid } from "nanoid";
import InputField from "../inputAndLabel/InputField.tsx";
import { FormValues } from "./Form.types.ts";
import { toast } from "react-toastify";
import { ErrorMessage } from "@hookform/error-message";
import Text from "../text/Text.tsx";

const Form = () => {
  const formData = localStorage.getItem("plantsList");

  const plantsCollection = formData
    ? (JSON.parse(formData) as FormValues[])
    : [];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const id = nanoid();
    const newPlant = {
      ...data,
      plantID: id,
    };

    plantsCollection.push(newPlant);

    localStorage.setItem("plantsList", JSON.stringify(plantsCollection));

    toast.success("Roślinka dodana do kolekcji!");

    reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <LabelField>
          podaj nazwę roślinki
          <InputField
            height={"50px"}
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
            as={<Text variant={"small"} />}
          />
        </LabelField>

        <LabelField>
          jak chcesz ją podlewać
          <InputField
            height={"86px"}
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
            as={<Text variant={"small"} />}
          />
        </LabelField>

        <LabelField>
          czy lubi zraszanie
          <InputField
            height={"86px"}
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
            as={<Text variant={"small"} />}
          />
        </LabelField>

        <LabelField>
          światło - dużo czy mało
          <InputField
            height={"86px"}
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
            as={<Text variant={"small"} />}
          />
        </LabelField>

        <LabelField>
          gleba
          <InputField
            height={"86px"}
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
            as={<Text variant={"small"} />}
          />
        </LabelField>

        <LabelField>
          nawożenie
          <InputField
            height={"86px"}
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
            as={<Text variant={"small"} />}
          />
        </LabelField>

        <FormButton type={"submit"}>zapisz</FormButton>
      </StyledForm>
    </>
  );
};

export default Form;

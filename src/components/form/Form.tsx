import LabelField from "../inputAndLabel/LabelField.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import FormButton from "./FormButton.tsx";
import { StyledForm } from "./Form.styles.ts";
import InputField from "../inputAndLabel/InputField.tsx";
import { FormValues } from "./Form.types.ts";
import { toast } from "react-toastify";
import { ErrorMessage } from "@hookform/error-message";
import Text from "../text/Text.tsx";
import { pb, PLANTS_COLLECTION } from "../../Backend.constants.ts";

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
            height={"50px"}
            placeholder={"nazywam się..."}
            type={"text"}
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
            type={"text"}
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
            type={"text"}
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
            type={"text"}
            {...register("light", {
              maxLength: {
                value: 512,
                message: "Opis może zawierać maksymalnie 512 znaków!",
              },
            })}
          />{" "}
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
            type={"text"}
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
            type={"text"}
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

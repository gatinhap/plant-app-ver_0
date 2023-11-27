import LabelField from "../inputAndLabel/LabelField.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import FormButton from "./FormButton.tsx";
import { StyledForm } from "./Form.styles.ts";
import { nanoid } from "nanoid";
import InputField from "../inputAndLabel/InputField.tsx";
import { FormValues } from "./Form.types.ts";
import { toast } from "react-toastify";

const Form = () => {
  const token = localStorage.getItem("formData");

  const plantsCollection: FormValues[] =
    (token && JSON.parse(localStorage.getItem("formData") || "")) || [];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const id = nanoid();
    const newPlant = {
      ...data,
      plantID: id,
    };

    plantsCollection.push(newPlant);

    localStorage.setItem("formData", JSON.stringify(plantsCollection));

    toast.success("Roślinka dodana do kolekcji!");

    reset();
  };

  errors.plantName?.type === "required" &&
    toast.warning(errors.plantName?.message);
  errors.plantName?.type === "maxLength" &&
    toast.error(errors.plantName?.message);

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
        </LabelField>

        <LabelField>
          jak chcesz ją podlewać
          <InputField
            height={"86px"}
            placeholder={"wpisz jak bardzo lubię wodę..."}
            type={"text"}
            {...register("watering")}
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
            {...register("misting")}
          />
        </LabelField>

        <LabelField>
          światło - dużo czy mało
          <InputField
            height={"86px"}
            placeholder={"słońce, słoneczko utrzymuje mnie przy życiu..."}
            type={"text"}
            {...register("light")}
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
            {...register("soil")}
          />
        </LabelField>

        <LabelField>
          nawożenie
          <InputField
            height={"86px"}
            placeholder={"witaminki dla roślinki, a moje ulubione to..."}
            type={"text"}
            {...register("fertilization")}
          />
        </LabelField>

        <FormButton type={"submit"}>zapisz</FormButton>
      </StyledForm>
    </>
  );
};

export default Form;

import LabelField from "../inputAndLabel/LabelField.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import FormButton from "./FormButton.tsx";
import { StyledForm } from "./Form.styles.ts";
import { nanoid } from "nanoid";
import InputField from "../inputAndLabel/InputField.tsx";
import { FormValues } from "./Form.types.ts";

const Form = () => {
  const token = localStorage.getItem("formData");

  const plantsCollection: FormValues[] =
    (token && JSON.parse(localStorage.getItem("formData") || "")) || [];

  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const id = nanoid();
    const newPlant = {
      ...data,
      plantID: id,
    };

    plantsCollection.push(newPlant);

    localStorage.setItem("formData", JSON.stringify(plantsCollection));

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
            type={"text"}
            {...register("plantName")}
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
              "niektóre z nas to uwielbiają, a inne \n" +
              "nie mogą znieść, a ja..."
            }
            type={"text"}
            {...register("misting")}
          />
        </LabelField>

        <LabelField>
          światło - dużo czy mało
          <InputField
            height={"86px"}
            placeholder={"słońce, słoneczko utrzymuje mnie\n" + "przy życiu..."}
            type={"text"}
            {...register("light")}
          />
        </LabelField>

        <LabelField>
          gleba
          <InputField
            height={"86px"}
            placeholder={
              "uniwersalna, a może bigosik, hmm,\n" + "ja najbardziej lubię..."
            }
            type={"text"}
            {...register("soil")}
          />
        </LabelField>

        <LabelField>
          nawożenie
          <InputField
            height={"86px"}
            placeholder={"witaminki dla roślinki, a moje\n" + "ulubione to..."}
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

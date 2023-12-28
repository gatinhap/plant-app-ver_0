import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from "./Form.types.ts";
import {
  pb,
  plantQueryKey,
  PLANTS_COLLECTION,
} from "../../Backend.constants.ts";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import Text from "../text/Text.tsx";
import { toast } from "react-toastify";
import { StyledForm } from "./Form.styles.ts";
import LabelField from "../inputAndLabel/LabelField.tsx";
import InputField from "../inputAndLabel/InputField.tsx";
import { ErrorMessage } from "@hookform/error-message";
import FormButton from "./FormButton.tsx";

const EditForm = () => {
  const { plantId } = useParams();
  const navigateTo = useNavigate();

  const getPlant = async (id) => {
    return await pb.collection(PLANTS_COLLECTION).getOne(id);
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: [plantQueryKey, plantId],
    queryFn: () => getPlant(plantId),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ mode: "onChange", values: data });

  const updatePlant: SubmitHandler<FormValues> = (newData) => {
    pb.collection(PLANTS_COLLECTION)
      .update(plantId, {
        ...newData,
      })
      .then(() => {
        toast.success("Zmiany zostały zapisane!");
        reset();
        navigateTo(`/${plantId}`);
      });
  };

  const { mutate } = useMutation({
    mutationFn: (newPlantData: FormValues) => updatePlant(newPlantData),
  });

  if (isPending) {
    return <Text variant={"large"}>Loading...</Text>;
  }

  if (isError) {
    return <Text variant={"large"}>Error: {error.message}</Text>;
  }

  if (data) {
    return (
      <>
        <h4>{data.plantName}</h4>
        <StyledForm onSubmit={handleSubmit(mutate)}>
          <LabelField>
            nazwa roślinki
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
                  message:
                    "Nazwa roślinki może zawierać maksymalnie 20 znaków!",
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

          <FormButton type={"submit"}>zapisz zmiany</FormButton>
        </StyledForm>
      </>
    );
  }
};

export default EditForm;

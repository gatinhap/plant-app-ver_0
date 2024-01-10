import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from "./Form.types.ts";
import {
  pb,
  plantQueryKey,
  PLANTS_COLLECTION,
} from "../../Backend.constants.ts";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Text from "../text/Text.tsx";
import { toast } from "react-toastify";
import { StyledForm } from "./Form.styles.ts";
import LabelField from "../formElements/LabelField.tsx";
import InputField from "../formElements/InputField.tsx";
import { ErrorMessage } from "@hookform/error-message";
import FormButton from "./FormButton.tsx";
import TextArea from "../formElements/TextArea.tsx";
import WarningText from "../text/WarningText.tsx";

const EditForm = () => {
  const { plantId } = useParams();
  const navigateTo = useNavigate();
  const queryClient = useQueryClient();

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
    return pb.collection(PLANTS_COLLECTION).update(plantId, {
      ...newData,
    });
  };

  const updatePlantMutation = useMutation({
    mutationFn: (newPlantData: FormValues) => updatePlant(newPlantData),
    onSuccess: () => {
      toast.success("Zmiany zostały zapisane!");
      reset();
      navigateTo(`/${plantId}`);

      return async () => {
        await queryClient.invalidateQueries({ queryKey: [plantQueryKey] });
      };
    },
  });

  if (isPending) {
    return <Text variant={"large"}>Pobieram dane...</Text>;
  }

  if (isError) {
    return (
      <Text variant={"large"}>Nie udało się pobrać danych z serwera.</Text>
    );
  }

  if (data) {
    return (
      <>
        {updatePlantMutation.isError ? (
          <Text variant={"large"}>
            Nastąpił błąd podczas aktualizowania danych. Spróbuj proszę jeszcze
            raz.
          </Text>
        ) : null}
        <h4>{data.plantName}</h4>
        {updatePlantMutation.isPending ? (
          <Text variant={"large"}>Zapisuję...</Text>
        ) : (
          <StyledForm onSubmit={handleSubmit(updatePlantMutation.mutate)}>
            <LabelField>
              nazwa roślinki
              <InputField
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
                as={<WarningText variant={"small"} />}
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
                as={<WarningText variant={"small"} />}
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
                as={<WarningText variant={"small"} />}
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
                as={<WarningText variant={"small"} />}
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
                as={<WarningText variant={"small"} />}
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
                as={<WarningText variant={"small"} />}
              />
            </LabelField>

            <FormButton type={"submit"}>zapisz zmiany</FormButton>
          </StyledForm>
        )}
      </>
    );
  }
};

export default EditForm;

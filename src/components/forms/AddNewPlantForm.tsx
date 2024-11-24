import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ErrorMessage } from '@hookform/error-message';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import LabelField from '../formElements/LabelField.tsx';
import FormButton from './FormButton.tsx';
import { StyledForm } from './Form.styles.ts';
import InputField from '../formElements/InputField.tsx';
import { FormValues } from './Form.types.ts';
import Text from '../text/Text.tsx';
import {
  pb,
  plantQueryKey,
  PLANTS_COLLECTION_ENDPOINT,
} from '../../Backend.constants.ts';
import TextArea from '../formElements/TextArea.tsx';
import StaticText from './Form.constants.ts';

const AddNewPlantForm = () => {
  const queryClient = useQueryClient();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const currentUserId: string = pb.authStore.model?.id;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' });

  const addPlantMutation = useMutation({
    mutationFn: (newPlant: FormValues) =>
      pb.collection(PLANTS_COLLECTION_ENDPOINT).create(newPlant),
    onSuccess: () => {
      toast.success(StaticText.ADD_NEW_PLANT_FORM.ADD_ACTION_IS_SUCCESS);
      reset();

      return async () => {
        await queryClient.invalidateQueries({ queryKey: [plantQueryKey] });
      };
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const plantData = { ...data, user: currentUserId };

    return addPlantMutation.mutate(plantData);
  };

  return (
    <>
      {addPlantMutation.isError ? (
        <Text variant="large">
          {StaticText.ADD_NEW_PLANT_FORM.ADD_ACTION_IS_ERROR}
        </Text>
      ) : null}

      {addPlantMutation.isPending ? (
        <Text variant="large">
          {StaticText.ADD_NEW_PLANT_FORM.ADD_ACTION_IS_PENDING}
        </Text>
      ) : (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <LabelField>
            {StaticText.FORM_FIELDS.PLANT_NAME.ADD_FORM_LABEL_TEXT}
            <InputField
              placeholder={StaticText.FORM_FIELDS.PLANT_NAME.FIELD_PLACEHOLDER}
              {...register('plantName', {
                required: {
                  value: true,
                  message: 'Dodaj nazwę roślinki!',
                },
                maxLength: {
                  value: 20,
                  message:
                    'Nazwa roślinki może zawierać maksymalnie 20 znaków!',
                },
              })}
            />
            <ErrorMessage
              as={<Text color="warning" variant="small" />}
              errors={errors}
              name="plantName"
            />
          </LabelField>

          <LabelField>
            jak chcesz ją podlewać
            <TextArea
              placeholder="wpisz jak bardzo lubię wodę..."
              {...register('watering', {
                maxLength: {
                  value: 512,
                  message: 'Opis może zawierać maksymalnie 512 znaków!',
                },
              })}
            />
            <ErrorMessage
              as={<Text color="warning" variant="small" />}
              errors={errors}
              name="watering"
            />
          </LabelField>

          <LabelField>
            czy lubi zraszanie
            <TextArea
              placeholder="niektóre z nas to uwielbiają, a inne nie mogą znieść, a ja..."
              {...register('misting', {
                maxLength: {
                  value: 512,
                  message: 'Opis może zawierać maksymalnie 512 znaków!',
                },
              })}
            />
            <ErrorMessage
              as={<Text color="warning" variant="small" />}
              errors={errors}
              name="misting"
            />
          </LabelField>

          <LabelField>
            światło - dużo czy mało
            <TextArea
              placeholder="słońce, słoneczko utrzymuje mnie przy życiu..."
              {...register('light', {
                maxLength: {
                  value: 512,
                  message: 'Opis może zawierać maksymalnie 512 znaków!',
                },
              })}
            />
            <ErrorMessage
              as={<Text color="warning" variant="small" />}
              errors={errors}
              name="light"
            />
          </LabelField>

          <LabelField>
            gleba
            <TextArea
              placeholder="uniwersalna, a może bigosik, hmm, ja najbardziej lubię..."
              {...register('soil', {
                maxLength: {
                  value: 512,
                  message: 'Opis może zawierać maksymalnie 512 znaków!',
                },
              })}
            />
            <ErrorMessage
              as={<Text color="warning" variant="small" />}
              errors={errors}
              name="soil"
            />
          </LabelField>

          <LabelField>
            nawożenie
            <TextArea
              placeholder="witaminki dla roślinki, a moje ulubione to..."
              {...register('fertilization', {
                maxLength: {
                  value: 512,
                  message: 'Opis może zawierać maksymalnie 512 znaków!',
                },
              })}
            />
            <ErrorMessage
              as={<Text color="warning" variant="small" />}
              errors={errors}
              name="fertilization"
            />
          </LabelField>

          <FormButton type="submit">zapisz</FormButton>
        </StyledForm>
      )}
    </>
  );
};

export default AddNewPlantForm;

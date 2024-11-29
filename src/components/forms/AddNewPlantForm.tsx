import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ErrorMessage } from '@hookform/error-message';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import LabelField from '../formElements/LabelField.tsx';
import FormButton from './FormButton.tsx';
import { StyledForm } from './Form.styles.ts';
import InputField from '../formElements/InputField.tsx';
import { ButtonTypes, FormValues } from './Form.types.ts';
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
                  message: StaticText.FORM_FIELDS.PLANT_NAME.NAME_REQUIRED,
                },
                maxLength: {
                  value: 20,
                  message: StaticText.FORM_FIELDS.PLANT_NAME.NAME_MAXLENGTH,
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
            {StaticText.FORM_FIELDS.PLANT_WATERING.ADD_FORM_LABEL_TEXT}
            <TextArea
              placeholder={
                StaticText.FORM_FIELDS.PLANT_WATERING.FIELD_PLACEHOLDER
              }
              {...register('watering', {
                maxLength: {
                  value: 512,
                  message: StaticText.FORM_FIELDS.MAX_LENGTH_TEXTAREA,
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
            {StaticText.FORM_FIELDS.PLANT_MISTING.ADD_FORM_LABEL_TEXT}
            <TextArea
              placeholder={
                StaticText.FORM_FIELDS.PLANT_MISTING.FIELD_PLACEHOLDER
              }
              {...register('misting', {
                maxLength: {
                  value: 512,
                  message: StaticText.FORM_FIELDS.MAX_LENGTH_TEXTAREA,
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
            {StaticText.FORM_FIELDS.PLANT_LIGHT.ADD_FORM_LABEL_TEXT}
            <TextArea
              placeholder={StaticText.FORM_FIELDS.PLANT_LIGHT.FIELD_PLACEHOLDER}
              {...register('light', {
                maxLength: {
                  value: 512,
                  message: StaticText.FORM_FIELDS.MAX_LENGTH_TEXTAREA,
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
            {StaticText.FORM_FIELDS.PLANT_SOIL.ADD_FORM_LABEL_TEXT}
            <TextArea
              placeholder={StaticText.FORM_FIELDS.PLANT_SOIL.FIELD_PLACEHOLDER}
              {...register('soil', {
                maxLength: {
                  value: 512,
                  message: StaticText.FORM_FIELDS.MAX_LENGTH_TEXTAREA,
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
            {StaticText.FORM_FIELDS.PLANT_FERTILIZATION.ADD_FORM_LABEL_TEXT}
            <TextArea
              placeholder={
                StaticText.FORM_FIELDS.PLANT_FERTILIZATION.FIELD_PLACEHOLDER
              }
              {...register('fertilization', {
                maxLength: {
                  value: 512,
                  message: StaticText.FORM_FIELDS.MAX_LENGTH_TEXTAREA,
                },
              })}
            />
            <ErrorMessage
              as={<Text color="warning" variant="small" />}
              errors={errors}
              name="fertilization"
            />
          </LabelField>

          <FormButton type={ButtonTypes.SUBMIT}>
            {StaticText.ADD_NEW_PLANT_FORM.SUBMIT_BUTTON}
          </FormButton>
        </StyledForm>
      )}
    </>
  );
};

export default AddNewPlantForm;

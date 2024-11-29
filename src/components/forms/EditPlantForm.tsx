import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { ErrorMessage } from '@hookform/error-message';
import { ButtonTypes, FormValues } from './Form.types.ts';
import {
  pb,
  plantQueryKey,
  PLANTS_COLLECTION_ENDPOINT,
} from '../../Backend.constants.ts';
import Text from '../text/Text.tsx';
import { StyledForm } from './Form.styles.ts';
import LabelField from '../formElements/LabelField.tsx';
import InputField from '../formElements/InputField.tsx';
import FormButton from './FormButton.tsx';
import TextArea from '../formElements/TextArea.tsx';
import StaticText from './Form.constants.ts';

const EditPlantForm = () => {
  const { plantId } = useParams();
  const navigateTo = useNavigate();
  const queryClient = useQueryClient();

  const getPlant = async (id: string | undefined) =>
    await pb.collection(PLANTS_COLLECTION_ENDPOINT).getOne<FormValues>(id!);

  const { isPending, isError, data } = useQuery({
    queryKey: [plantQueryKey, plantId],
    queryFn: () => getPlant(plantId),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ mode: 'onChange', values: data });

  const updatePlantMutation = useMutation({
    mutationFn: (newPlantData: FormValues) =>
      pb.collection(PLANTS_COLLECTION_ENDPOINT).update(plantId!, {
        ...newPlantData,
      }),
    onSuccess: () => {
      toast.success(StaticText.EDIT_PLANT_FORM.UPDATE_ACTION_IS_SUCCESS);
      reset();
      navigateTo(`/${plantId}`);

      return async () => {
        await queryClient.invalidateQueries({ queryKey: [plantQueryKey] });
      };
    },
  });

  const updatePlant: SubmitHandler<FormValues> = (newData) =>
    updatePlantMutation.mutate(newData);

  if (isPending) {
    return (
      <Text variant="large">
        {StaticText.EDIT_PLANT_FORM.RETRIEVING_DATA_IS_PENDING}
      </Text>
    );
  }

  if (isError) {
    return (
      <Text variant="large">
        {StaticText.EDIT_PLANT_FORM.RETRIEVING_DATA_IS_ERROR}
      </Text>
    );
  }

  if (data) {
    return (
      <>
        {updatePlantMutation.isError ? (
          <Text variant="large">
            {StaticText.EDIT_PLANT_FORM.UPDATE_ACTION_IS_ERROR}
          </Text>
        ) : null}

        <h4>{data.plantName}</h4>

        {updatePlantMutation.isPending ? (
          <Text variant="large">
            {StaticText.EDIT_PLANT_FORM.UPDATE_ACTION_IS_PENDING}
          </Text>
        ) : (
          <StyledForm onSubmit={handleSubmit(updatePlant)}>
            <LabelField>
              {StaticText.FORM_FIELDS.PLANT_NAME.EDIT_FORM_LABEL_TEXT}
              <InputField
                placeholder={
                  StaticText.FORM_FIELDS.PLANT_NAME.FIELD_PLACEHOLDER
                }
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
                as={<Text variant="small" />}
                errors={errors}
                name="plantName"
              />
            </LabelField>

            <LabelField>
              {StaticText.FORM_FIELDS.PLANT_WATERING.EDIT_FORM_LABEL_TEXT}
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
                as={<Text variant="small" />}
                errors={errors}
                name="watering"
              />
            </LabelField>

            <LabelField>
              {StaticText.FORM_FIELDS.PLANT_MISTING.EDIT_FORM_LABEL_TEXT}
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
                as={<Text variant="small" />}
                errors={errors}
                name="misting"
              />
            </LabelField>

            <LabelField>
              {StaticText.FORM_FIELDS.PLANT_LIGHT.EDIT_FORM_LABEL_TEXT}
              <TextArea
                placeholder={
                  StaticText.FORM_FIELDS.PLANT_LIGHT.FIELD_PLACEHOLDER
                }
                {...register('light', {
                  maxLength: {
                    value: 512,
                    message: StaticText.FORM_FIELDS.MAX_LENGTH_TEXTAREA,
                  },
                })}
              />
              <ErrorMessage
                as={<Text variant="small" />}
                errors={errors}
                name="light"
              />
            </LabelField>

            <LabelField>
              {StaticText.FORM_FIELDS.PLANT_SOIL.EDIT_FORM_LABEL_TEXT}
              <TextArea
                placeholder={
                  StaticText.FORM_FIELDS.PLANT_SOIL.FIELD_PLACEHOLDER
                }
                {...register('soil', {
                  maxLength: {
                    value: 512,
                    message: StaticText.FORM_FIELDS.MAX_LENGTH_TEXTAREA,
                  },
                })}
              />
              <ErrorMessage
                as={<Text variant="small" />}
                errors={errors}
                name="soil"
              />
            </LabelField>

            <LabelField>
              {StaticText.FORM_FIELDS.PLANT_FERTILIZATION.EDIT_FORM_LABEL_TEXT}
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
                as={<Text variant="small" />}
                errors={errors}
                name="fertilization"
              />
            </LabelField>

            <FormButton type={ButtonTypes.SUBMIT}>
              {StaticText.EDIT_PLANT_FORM.SUBMIT_BUTTON}
            </FormButton>
          </StyledForm>
        )}
      </>
    );
  }
};

export default EditPlantForm;

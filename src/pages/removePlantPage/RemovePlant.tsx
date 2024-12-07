import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import PageComponent from '../../components/pageComponent/PageComponent.tsx';
import NavItem from '../../components/navItem/NavItem.tsx';
import CallToActionAsLink from '../../components/callToActionButton/CallToActionAsLink.tsx';
import {
  pb,
  plantQueryKey,
  PLANTS_COLLECTION_ENDPOINT,
} from '../../Backend.constants.ts';
import CallToActionButton from '../../components/callToActionButton/CallToActionButton.tsx';
import Text from '../../components/text/Text.tsx';
import AppPaths from '../../config/appPaths.ts';
import StaticText from '../pages.constants.ts';

const RemovePlant = () => {
  const { plantId } = useParams<{ plantId: string }>();
  const navigateTo = useNavigate();
  const queryClient = useQueryClient();
  const plantIdPath = `/${plantId}`;

  const removePlant = (id: string) =>
    pb.collection(PLANTS_COLLECTION_ENDPOINT).delete(id);

  const removePlantMutation = useMutation({
    mutationFn: () => removePlant(plantId!),
    onSuccess: () => {
      toast.success(StaticText.REMOVE_PLANT_PAGE.REMOVAL_IS_SUCCESS);
      navigateTo(AppPaths.Private.PlantCollection);

      return async () => {
        await queryClient.invalidateQueries({ queryKey: [plantQueryKey] });
      };
    },
  });

  return (
    <PageComponent>
      <NavItem linkTo={AppPaths.Private.PlantCollection} shouldDisplayOnTop>
        {StaticText.TOP_LINK}
      </NavItem>

      {removePlantMutation.isError ? (
        <Text variant="large">
          {StaticText.REMOVE_PLANT_PAGE.REMOVAL_IS_ERROR}
        </Text>
      ) : null}

      {removePlantMutation.isPending ? (
        <Text variant="large">
          {StaticText.REMOVE_PLANT_PAGE.REMOVAL_IS_PENDING}
        </Text>
      ) : (
        <>
          <Text variant="large">
            {StaticText.REMOVE_PLANT_PAGE.REMOVAL_PROMPT_QUESTION}
          </Text>

          <CallToActionButton handleClick={() => removePlantMutation.mutate()}>
            {StaticText.REMOVE_PLANT_PAGE.REMOVE_PLANT_BUTTON}
          </CallToActionButton>

          <CallToActionAsLink linkTo={plantIdPath}>
            {StaticText.REMOVE_PLANT_PAGE.RETURN_BUTTON}
          </CallToActionAsLink>
        </>
      )}
    </PageComponent>
  );
};

export default RemovePlant;

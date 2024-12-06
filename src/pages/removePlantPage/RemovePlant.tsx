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

const RemovePlant = () => {
  const { plantId } = useParams<{ plantId: string }>();
  const navigateTo = useNavigate();
  const queryClient = useQueryClient();

  const removePlant = (id: string) => pb.collection(PLANTS_COLLECTION_ENDPOINT).delete(id);

  const removePlantMutation = useMutation({
    mutationFn: () => removePlant(plantId!),
    onSuccess: () => {
      toast.success('Roślinka usunięta z kolekcji!');
      navigateTo('/');

      return async () => {
        await queryClient.invalidateQueries({ queryKey: [plantQueryKey] });
      };
    },
  });

  return (
    <PageComponent>
      <NavItem linkTo="/" shouldDisplayOnTop>
        moja kolekcja
      </NavItem>

      {removePlantMutation.isError ? (
        <Text variant="large">
          Nastąpił błąd podczas usuwania roślinki. Spróbuj proszę jeszcze raz.
        </Text>
      ) : null}

      {removePlantMutation.isPending ? (
        <Text variant="large">Usuwam...</Text>
      ) : (
        <>
          <Text variant="large">
            Czy na pewno chcesz usunąć tę roślinkę z kolekcji?
          </Text>

          <CallToActionButton handleClick={() => removePlantMutation.mutate()}>
            tak, usuń!
          </CallToActionButton>

          <CallToActionAsLink linkTo={`/${plantId}`}>
            nie, wróć!
          </CallToActionAsLink>
        </>
      )}
    </PageComponent>
  );
}

export default RemovePlant;

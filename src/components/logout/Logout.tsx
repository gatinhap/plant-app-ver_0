import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { pb, usersQueryKey } from '../../Backend.constants.ts';
import LogoutButton from './LogoutButton.tsx';
import Text from '../text/Text.tsx';
import StaticText from './Logout.constants.ts';
import { ParagraphVariantEnum } from '../text/Text.types.tsx';

const Logout = () => {
  const navigateTo = useNavigate();
  const queryClient = useQueryClient();

  const logoutUser = async () => {
    pb.authStore.clear();
    localStorage.setItem('logout', Date.now().toString());
  };

  const logoutUserMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      navigateTo('/welcome');
      toast.success(StaticText.LOGOUT_IS_SUCCESS);

      return queryClient.invalidateQueries({ queryKey: [usersQueryKey] });
    },
  });

  return (
    <>
      {logoutUserMutation.isError ? (
        <Text variant={ParagraphVariantEnum.large}>
          {StaticText.LOGOUT_IS_ERROR}
        </Text>
      ) : null}

      {logoutUserMutation.isPending ? (
        <Text variant={ParagraphVariantEnum.large}>
          {StaticText.LOGOUT_IS_PENDING}
        </Text>
      ) : (
        <LogoutButton
          handleClick={logoutUserMutation.mutate}
          shouldDisplayOnTop
        >
          {StaticText.LOGOUT_BUTTON_TEXT}
        </LogoutButton>
      )}
    </>
  );
};

export default Logout;

import { LogoutButtonProps } from './LogoutButton.types.ts';
import LogoutButtonStyled from './LogoutButton.styles.ts';

const LogoutButton = ({
  children,
  handleClick,
  shouldDisplayOnTop,
}: LogoutButtonProps) => (
  <LogoutButtonStyled
    $shouldDisplayOnTop={shouldDisplayOnTop}
    onClick={handleClick}
  >
    {children}
  </LogoutButtonStyled>
);

export default LogoutButton;

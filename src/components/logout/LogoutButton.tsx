import { LogoutButtonProps } from "./LogoutButton.types.ts";
import { LogoutButtonStyled } from "./LogoutButton.styles.ts";

const LogoutButton = ({
  children,
  handleClick,
  shouldDisplayOnTop,
}: LogoutButtonProps) => {
  return (
    <LogoutButtonStyled
      onClick={handleClick}
      $shouldDisplayOnTop={shouldDisplayOnTop}
    >
      {children}
    </LogoutButtonStyled>
  );
};

export default LogoutButton;

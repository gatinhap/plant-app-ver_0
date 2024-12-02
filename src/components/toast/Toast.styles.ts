import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { theme } from '../../theme/theme.ts';

const StyledToastContainer = styled(ToastContainer)`
  .Toastify {
    &__toast {
      border-radius: 6px;
      padding: 16px;

      &--warning {
        background-color: ${theme.colors.lightYellow};
        color: ${theme.colors.brown};
      }

      &--success {
        background-color: ${theme.colors.paleGreen};
        color: ${theme.colors.mediumGreen};
      }

      &--error {
        background-color: ${theme.colors.lightRed};
        color: ${theme.colors.brown};
      }
    }
  }
`;

export default StyledToastContainer;

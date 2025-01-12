import styled from 'styled-components';
import { Text } from '@radix-ui/themes';
import Pagination from '@mui/material/Pagination';

export const FlowerNameText = styled(Text)`
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
`;

export const StyledPaginationComponent = styled(Pagination)`
  margin-block: 30px;

  button {
    color: ${({ theme }) => theme.colors.darkGray};

    &[aria-current='page'] {
      background-color: ${({ theme }) => theme.colors.lime};
      color: ${({ theme }) => theme.colors.black};

      &:hover {
        background-color: ${({ theme }) => theme.colors.cream};
      }
    }
    &:not([aria-current='page']) {
      background-color: ${({ theme }) => theme.colors.cream};
    }
  }
`;

import styled from 'styled-components';
import { Text } from '@radix-ui/themes';

export const FlowerNameText = styled(Text)`
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
`;

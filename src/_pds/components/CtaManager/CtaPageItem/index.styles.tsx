import styled from '@emotion/styled';
import Flex from '../../Flex';

export const CTAItemContainer = styled(Flex)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.zinc_200};

  &.is-lasted {
    border-bottom: none;
  }

  &.is-selected {
    background-color: ${({ theme }) => theme.colors.zinc_100};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.zinc_100};
    cursor: pointer;
  }
`;

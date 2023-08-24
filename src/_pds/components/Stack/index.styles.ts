import styled from '@emotion/styled';

import Flex from '../Flex';

export const FlexWrapper = styled(Flex)<{ gap: number | string }>`
  gap: ${({ gap }) => (typeof gap === 'string' ? gap : `${gap}px`)};
`;

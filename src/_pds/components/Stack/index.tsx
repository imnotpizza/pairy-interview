import React from 'react';

import { Props } from './index.types';
import * as Styled from './index.styles';

export const Stack = ({
  children,
  gap = 0,
  ...rest
}: React.PropsWithChildren<Props>) => {
  return (
    <Styled.FlexWrapper gap={gap} {...rest}>
      {children}
    </Styled.FlexWrapper>
  );
};

export default Stack;

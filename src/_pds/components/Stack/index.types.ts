import React from 'react';

import { FlexProps } from '../Flex/index.types';

export interface StackProps extends FlexProps {
  /**
   * Stack의 gap을 설정합니다.
   *
   * @default 0
   */
  gap: number | string;
}

export interface Props extends React.HTMLAttributes<HTMLElement>, StackProps {}

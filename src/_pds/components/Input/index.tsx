import { type Ref, forwardRef } from 'react';

import * as Styled from './index.styles';
import { InputProps } from './index.types';

export const Input = forwardRef(function Text(
  {
    isError,
    textVariant = 'md-regular',
    radius = 4,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    paddingX = 16,
    paddingY = 8,
    width = '304px',
    ...rest
  }: InputProps,
  forwardedRef: Ref<HTMLInputElement>,
) {
  return (
    <Styled.Input
      isError={!!isError}
      textVariant={textVariant}
      radius={radius}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      paddingX={paddingX}
      paddingY={paddingY}
      width={width}
      ref={forwardedRef}
      {...rest}
    />
  );
});

export default Input;

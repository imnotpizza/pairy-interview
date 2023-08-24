import React from 'react';

import * as Styled from './index.styles';
import { TextProps } from './index.types';

export const Text = React.forwardRef(function Text(
  {
    as = 'span',
    children,
    variant = 'md-regular',
    color = 'black',
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    opacity = 1,
    textAlign = 'left',
    lineHeight = '',
    ...rest
  }: React.PropsWithChildren<TextProps>,
  forwardedRef: React.Ref<HTMLElement>,
) {
  return (
    <Styled.Text
      as={as}
      color={color}
      variant={variant}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      opacity={opacity}
      textAlign={textAlign}
      lineHeight={lineHeight}
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </Styled.Text>
  );
});

export default Text;

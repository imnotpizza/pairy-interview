import React, { useMemo } from 'react';

import * as Styled from './index.styles';
import { Props } from './index.types';
import { getPaddingDirections } from './index.utils';

export const Flex = React.forwardRef(function Flex(
  {
    as = 'div',
    display = 'flex',
    position = 'relative',
    direction = 'row',
    wrap = 'nowrap',
    justifyContent = 'normal',
    alignItems = 'normal',
    alignContent = 'normal',
    backgroundColor = 'inherit',
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    padding = 0,
    width = '100%',
    children,
    ...rest
  }: React.PropsWithChildren<Props>,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const [paddingTop, paddingRight, paddingBottom, paddingLeft] = useMemo(
    () => getPaddingDirections(padding),
    [padding],
  );

  return (
    <Styled.Flex
      as={as}
      display={display}
      position={position}
      direction={direction}
      wrap={wrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignContent={alignContent}
      backgroundColor={backgroundColor}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      width={width}
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </Styled.Flex>
  );
});

export default Flex;

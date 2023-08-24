import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { FlexProps } from "./index.types";

type StyledFlexProps = Required<Omit<FlexProps, "padding">> & {
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
};

export const Flex = styled.span<StyledFlexProps>`
  position: ${({ position }) => position};
  display: ${({ display }) => display};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  padding: ${({ paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`};
  margin: ${({ marginTop, marginRight, marginBottom, marginLeft }) =>
    `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`};
  background-color: ${({ backgroundColor, theme }) =>
    theme.colors[backgroundColor]};

  ${({ display, width }) => {
    if (display === "inline-flex") {
      return css`
        width: auto;
      `;
    }

    if (display === "flex" && width !== "100%") {
      return css`
        width: ${width};
      `;
    }

    return css`
      width: 100%;
    `;
  }}
`;

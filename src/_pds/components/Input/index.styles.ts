import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Props } from "./index.types";

export const Input = styled.input<Props>`
  display: flex;

  width: ${({ width }) => width};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX}px`};
  margin: ${({ marginTop, marginRight, marginBottom, marginLeft }) =>
    `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`};

  border-radius: ${({ radius }) => `${radius}px`};

  ${({ textVariant, theme }) => `
    font-size: ${
      theme.fontSize[textVariant.split("-")[0] as keyof typeof theme.fontSize]
    };
    line-height: ${
      theme.lineHeight[
        textVariant.split("-")[0] as keyof typeof theme.lineHeight
      ]
    };
    font-weight: ${
      theme.fontWeight[
        textVariant.split("-")[1] as keyof typeof theme.fontWeight
      ]
    };
  `}

  &::placeholder {
    color: ${({ theme }) => theme.colors.zinc_400};
    font-weight: 300;
  }

  ${({ isError, theme }) =>
    isError
      ? css`
          border: 1px solid ${theme.colors.cerise_500};
          background: ${theme.colors.cerise_50};
          color: ${theme.colors.zinc_500};
        `
      : css`
          border: 1px solid ${theme.colors.zinc_200};
          background: ${theme.colors.zinc_50};
          color: ${theme.colors.zinc_500};
        `}

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }

  /* Firefox */
  &[type="number"] {
    appearance: textfield;
  }

  box-sizing: border-box;
`;

import styled from "@emotion/styled";

import { Props } from "./index.types";

export const Text = styled.span<Props>`
  padding: ${({ paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`};
  margin: ${({ marginTop, marginRight, marginBottom, marginLeft }) =>
    `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`};
  color: ${({ color, theme }) => theme.colors[color]};
  opacity: ${({ opacity }) => opacity};
  text-align: ${({ textAlign }) => textAlign};

  ${({ as }) => as === "span" && `display: inline-block;`}

  ${({ variant, theme }) => `
    font-size: ${
      theme.fontSize[variant.split("-")[0] as keyof typeof theme.fontSize]
    };
    line-height: ${
      theme.lineHeight[variant.split("-")[0] as keyof typeof theme.lineHeight]
    };
    font-weight: ${
      theme.fontWeight[variant.split("-")[1] as keyof typeof theme.fontWeight]
    };
  `}

  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`};
`;

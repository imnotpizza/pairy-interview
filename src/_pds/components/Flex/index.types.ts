import React from "react";
import { theme } from "../../theme";

export type PaddingDirections =
  | number
  | {
      x?: number;
      y?: number;
    }
  | {
      top?: number;
      right?: number;
      bottom?: number;
      left?: number;
    };

export interface FlexProps {
  /**
   * 엘리먼트의 타입을 설정합니다.
   *
   * @default div
   */
  as?: React.ElementType;

  /**
   * flexbox의 width 속성을 설정합니다.
   *
   * @default '100%'
   */
  width?: string;

  /**
   * flexbox의 display 속성을 설정합니다.
   *
   * @default 'flex'
   */
  display?: "flex" | "inline-flex";

  /**
   * flexbox의 position 속성을 설정합니다.
   *
   * @default 'relative'
   */
  position?: React.CSSProperties["position"];

  /**
   * flexbox의 flex-direction 속성을 설정합니다.
   *
   * @default 'row'
   */
  direction?: React.CSSProperties["flexDirection"];

  /**
   * flexbox의 flex-wrap 속성을 설정합니다.
   *
   * @default 'nowrap'
   */
  wrap?: React.CSSProperties["flexWrap"];

  /**
   * flexbox의 justify-content 속성을 설정합니다.
   *
   * @default 'flex-start'
   */
  justifyContent?: React.CSSProperties["justifyContent"];

  /**
   * flexbox의 align-items 속성을 설정합니다.
   *
   * @default 'flex-start'
   */
  alignItems?: React.CSSProperties["alignItems"];

  /**
   * flexbox의 align-content 속성을 설정합니다.
   *
   * @default 'flex-start'
   */
  alignContent?: React.CSSProperties["alignContent"];

  /**
   * Flex의 배경 색상을 설정합니다.
   *
   * @default 'inherit'
   */
  backgroundColor?: keyof typeof theme.colors;

  /**
   * margin 상단을 설정합니다.
   *
   * @default 0
   */
  marginTop?: number;

  /**
   * margin 우측을 설정합니다.
   *
   * @default 0
   */
  marginRight?: number;

  /**
   * margin 하단을 설정합니다.
   *
   * @default 0
   */
  marginBottom?: number;

  /**
   * margin 좌측을 설정합니다.
   *
   * @default 0
   */
  marginLeft?: number;

  /**
   * padding을 설정합니다. 숫자를 입력하면 모든 방향에 적용되고, 객체를 입력하면 방향별로 적용됩니다.
   *
   * @default 0
   */
  padding?: PaddingDirections;
}

export interface Props extends React.HTMLAttributes<HTMLElement>, FlexProps {}

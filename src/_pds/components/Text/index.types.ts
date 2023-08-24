import { theme } from "../../theme";
import type { CSSProperties, ElementType, HTMLAttributes } from "react";

export interface Props {
  /**
   * 엘리먼트의 타입을 설정합니다.
   *
   * @default span
   */
  as: ElementType;

  /**
   * 텍스트의 종류를 설정합니다.
   *
   * @default 'md-regular'
   */
  variant: keyof typeof theme.textVariant;

  /**
   * 텍스트의 line-height를 설정합니다.
   */
  lineHeight: string;

  /**
   * 텍스트의 색상을 설정합니다.
   *
   * @default 'black'
   */
  color: keyof typeof theme.colors;

  /**
   * margin 상단을 설정합니다.
   *
   * @default 0
   */
  marginTop: number;

  /**
   * margin 우측을 설정합니다.
   *
   * @default 0
   */
  marginRight: number;

  /**
   * margin 하단을 설정합니다.
   *
   * @default 0
   */
  marginBottom: number;

  /**
   * margin 좌측을 설정합니다.
   *
   * @default 0
   */
  marginLeft: number;

  /**
   * padding 상단을 설정합니다.
   *
   * @default 0
   */
  paddingTop: number;

  /**
   * padding 우측을 설정합니다.
   *
   * @default 0
   */
  paddingRight: number;

  /**
   * padding 하단을 설정합니다.
   *
   * @default 0
   */
  paddingBottom: number;

  /**
   * padding 좌측을 설정합니다.
   *
   * @default 0
   */
  paddingLeft: number;

  /**
   * 텍스트의 투명도를 설정합니다.
   *
   * @default 1
   */
  opacity: number;

  /**
   * 텍스트의 정렬을 설정합니다.
   *
   * @default 'left'
   */
  textAlign: CSSProperties["textAlign"];
}

export interface TextProps
  extends Partial<Props>,
    Omit<
      HTMLAttributes<
        HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
      >,
      "color"
    > {}

import { theme } from "../../../_pds/theme";
import { InputHTMLAttributes } from "react";

export interface Props {
  /**
   * Input의 유효성 검사 결과 에러 여부를 설정합니다.
   *
   * @default false
   */
  isError: boolean;

  /**
   * Input 내의 텍스트 종류를 설정합니다.
   *
   * @default 'md-regular'
   */
  textVariant: keyof typeof theme.textVariant;

  /**
   * Input의 radius 설정합니다.
   *
   * @default 8
   */
  radius: number;

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
   * padding x축을 설정합니다.
   *
   * @default 16
   */
  paddingX: number;

  /**
   * padding y축을 설정합니다.
   *
   * @default 8
   */
  paddingY: number;

  /**
   * Input의 width를 설정합니다.
   *
   * @default '304px'
   */
  width: string;
}

export interface InputProps
  extends Partial<Props>,
    Omit<InputHTMLAttributes<HTMLInputElement>, "width"> {}

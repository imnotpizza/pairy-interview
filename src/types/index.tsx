export interface CtaLinkInfo {
  /**
   * 페이지의 식별 아이디입니다.
   *
   * @default 0
   */
  page: number;
  /**
   * Cta 링크 관련 정보입니다.
   *
   * @default null
   */
  detail: CtaLinkDetail | null;
}

export interface CtaLinkDetail {
  /**
   * Cta 버튼의 이름입니다.
   *
   * @default ''
   */
  buttonName: string;
  /**
   * Cta 버튼의 링크 url입니다.
   *
   * @default ''
   */
  url: string;
}

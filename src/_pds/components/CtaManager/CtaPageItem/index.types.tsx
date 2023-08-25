import { TCtaLinkInfo } from "../../../../types";

export interface Props {
  item: TCtaLinkInfo;
  onClickItem: (item: TCtaLinkInfo) => void;
  isSelected: boolean;
}

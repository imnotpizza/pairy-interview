import { CtaLinkInfo } from "../../../../types";

export interface Props {
  item: CtaLinkInfo;
  onClickItem: (item: CtaLinkInfo) => void;
  isSelected: boolean;
}

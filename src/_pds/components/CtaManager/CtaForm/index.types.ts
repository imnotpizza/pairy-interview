import { CtaLinkDetail, CtaLinkInfo } from '../../../../types';

export interface Props {
  page: CtaLinkInfo['page'];
  buttonName: CtaLinkDetail['buttonName'];
  url: CtaLinkDetail['url'];
}

export enum SUBMIT_MODE {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}

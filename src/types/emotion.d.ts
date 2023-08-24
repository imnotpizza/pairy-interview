import { theme } from "../_pds/theme";

declare module "@emotion/react" {
  export interface Theme {
    colors: typeof theme.colors;
    fontSize: typeof theme.fontSize;
    lineHeight: typeof theme.lineHeight;
    fontWeight: typeof theme.fontWeight;
    elevation: typeof theme.elevation;
  }
}

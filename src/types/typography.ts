import type { CSSProperties } from "@mui/material";

export type TypographyOptions = {
  fontFamily?: string;
  fontSize?: number;

  h1?: CSSProperties;
  h2?: CSSProperties;
  h3?: CSSProperties;
  h4?: CSSProperties;
  h5?: CSSProperties;
  h6?: CSSProperties;

  subtitle1?: CSSProperties;
  subtitle2?: CSSProperties;

  body1?: CSSProperties;
  body2?: CSSProperties;

  button?: CSSProperties;
  caption?: CSSProperties;
  overline?: CSSProperties;

  // plus some advanced config
  htmlFontSize?: number;
  allVariants?: CSSProperties;
};

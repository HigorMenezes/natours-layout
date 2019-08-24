export interface GridThemeInterface {
  gridWidth?: number;
  gutterVertical?: number;
  gutterHorizontal?: number;
  xl?: number;
}

export interface GridInterface {
  children?: JSX.Element | JSX.Element[];
  theme?: GridThemeInterface;
  container?: boolean;
  item?: boolean;
}

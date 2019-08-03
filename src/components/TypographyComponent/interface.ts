export interface ThemeInterface {
  fontSize: number;
}

export default interface TypographyInterface {
  children: string;
  variant: 'h2' | 'h1';
  theme?: ThemeInterface;
}

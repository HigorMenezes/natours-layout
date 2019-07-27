export interface ThemeInterface {
  fontSize: number;
  fontWeight: number;
  letterSpacing: number;
  animation: 'right' | 'left';
}

export default interface MainTitleInterface {
  theme: ThemeInterface;
  children: string;
}

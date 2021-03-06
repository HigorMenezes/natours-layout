export interface AnimationInterface {
  moveIn: 'right' | 'left';
}

export interface ThemeInterface {
  fontSize: number;
  fontWeight: number;
  letterSpacing: number;
  animation?: AnimationInterface;
}

export default interface MainTitleInterface {
  children: string;
  theme?: ThemeInterface;
}

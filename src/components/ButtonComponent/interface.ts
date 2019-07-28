export interface AnimationInterface {
  moveIn: 'bottom';
}

export interface ThemeInterface {
  animation?: AnimationInterface;
}

export default interface ButtonInterface {
  children: string;
  href: string;
  theme?: ThemeInterface;
}

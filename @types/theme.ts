interface Theme {
  palette: Record<Color, string>;
}

interface IPalette {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  black: string;
  white: string;
  lightGrey: string;
}
// interface IMode {}

export default Theme;

export interface BlockProps {
  editable?: boolean;
  className?: string;
  multiline?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onKeyPressEnter?: (element: HTMLDivElement) => void;
}

export type BlockElement = HTMLDivElement;

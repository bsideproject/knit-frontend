import { ContentEditableEvent } from 'react-contenteditable';

export interface BlockProps {
  editable?: boolean;
  className?: string;
  placeholder?: string;
  value?: string;
  focusInfo?: FocusInfo;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (event: ContentEditableEvent) => void;
  onKeyPress?: (event: ContentEditableEvent & KeyboardEvent) => void;
  onKeyDown?: (event: ContentEditableEvent & KeyboardEvent) => void;
}

export type BlockElement = HTMLDivElement;

export type FocusInfo =
  | {
      focusType: FocusType.DESIGNATE_CARET;
      focusCaretPos: number;
    }
  | {
      focusType: FocusType.PASSIVE | FocusType.FIRST_CARET | FocusType.LAST_CARET;
    };

export enum FocusType {
  PASSIVE = 1,
  FIRST_CARET,
  LAST_CARET,
  DESIGNATE_CARET,
}

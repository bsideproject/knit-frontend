import { KeyboardEventHandler } from 'react';
import { ContentEditableEvent } from 'react-contenteditable';
import { DividerType } from '~/@types/resources/thread';

export interface BlockProps {
  className?: string;
  editable: boolean;
  focusInfo?: FocusInfo | null;
  onBlur?: () => void;
  onFocus?: () => void;
  onKeyPress?: KeyboardEventHandler;
  onKeyDown?: KeyboardEventHandler;
}

export interface TextBlockProps extends BlockProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: ContentEditableEvent) => void;
}
export interface ImageBlockProps extends BlockProps {
  url: string;
  represent: boolean;
  onChangeRepresent: () => void;
}

export interface DividerBlockProps extends BlockProps {
  type: DividerType;
  onChange: (deviderType: DividerType) => void;
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

import { VFC } from 'react';

import { HeadingCollapseIcon } from '~/public/assets/icon';
import {
  HeadingStyled,
  BoldStyled,
  LineThroughStyled,
  ItalicStyled,
  UnderLineStyled,
  FontColorStyled,
  AlignTextStyled,
  UrlStyled,
  BackColorStyled,
} from './Panel.Styled';
import { DesignCommandType } from '~/@types/resources/thread';
import { PanelStyles } from '~/molecules/thread/InlinePanel/types';

export interface PanelCompProps {
  currentStyle?: PanelStyles;
}

const Heading: VFC<PanelCompProps> = ({ currentStyle }) => {
  let headingText = '본문';
  switch (currentStyle?.size) {
    case '6':
      headingText = '제목1';
      break;
    case '5':
      headingText = '제목2';
      break;
    case '4':
      headingText = '제목3';
      break;
    case '3':
      headingText = '본문';
      break;
    case '2':
      headingText = '설명글';
      break;
    default:
      break;
  }

  return (
    <HeadingStyled>
      {headingText} <HeadingCollapseIcon />{' '}
    </HeadingStyled>
  );
};

const Bold = () => <BoldStyled />;

const LineThrough = () => <LineThroughStyled />;

const Italic = () => <ItalicStyled />;

const UnderLine = () => <UnderLineStyled />;

const FontColor: VFC<PanelCompProps> = ({ currentStyle }) => {
  return <FontColorStyled currentStyle={currentStyle} />;
};

const BackColor = () => <BackColorStyled />;

const AlignText = () => <AlignTextStyled />;

const Url = () => <UrlStyled>URL</UrlStyled>;

const Panel = [
  { type: DesignCommandType.HEADING, Component: Heading },
  { type: DesignCommandType.BOLD, Component: Bold },
  { type: DesignCommandType.ITALIC, Component: Italic },
  { type: DesignCommandType.UNDERLINE, Component: UnderLine },
  { type: DesignCommandType.LINETHROUGH, Component: LineThrough },
  { type: DesignCommandType.FONTCOLOR, Component: FontColor },
  { type: DesignCommandType.BACKCOLOR, Component: BackColor },
  { type: DesignCommandType.ALIGNTEXT, Component: AlignText },
  { type: DesignCommandType.URL, Component: Url },
];

export default Panel;

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
} from './Panel.Styled';
import { DesignCommandType } from '~/@types/resources/thread';

const Heading = (
  <HeadingStyled>
    제목 3 <HeadingCollapseIcon />{' '}
  </HeadingStyled>
);

const Bold = <BoldStyled />;

const LineThrough = <LineThroughStyled />;

const Italic = <ItalicStyled />;

const UnderLine = <UnderLineStyled />;

const FontColor = <FontColorStyled />;

const AlignText = <AlignTextStyled />;

const Url = <UrlStyled>URL</UrlStyled>;

const Panel = [
  { type: DesignCommandType.HEADING, component: Heading },
  { type: DesignCommandType.BOLD, component: Bold },
  { type: DesignCommandType.ITALIC, component: Italic },
  { type: DesignCommandType.UNDERLINE, component: UnderLine },
  { type: DesignCommandType.LINETHROUGH, component: LineThrough },
  { type: DesignCommandType.FONTCOLOR, component: FontColor },
  { type: DesignCommandType.ALIGNTEXT, component: AlignText },
  { type: DesignCommandType.URL, component: Url },
];

export default Panel;

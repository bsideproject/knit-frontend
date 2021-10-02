export interface Thread {
  /* 문서 id */
  id?: number;
  /* 문서 대표이미지 url (s3) */
  thumbnailUrl?: string | null;
  /* 문서 표제 */
  title?: string;
  /* 문서 부제 */
  subTitle?: string;
  /* 문서 직군 카테고리 리스트 (DEVELOP | DESIGN | PLANNING | MARKETING | DATA | ETC) */
  categories?: ReadonlyArray<{ categoryId: number; value: CategoryType }>;
  /* 문서 태그 리스트 */
  tags?: ReadonlyArray<{ tagId: number; value: string }>;
  /* 문서 본문 */
  contents?: ReadonlyArray<TextContent | ImageContent | CodeContent | DividerContent>;
  /* 문서 작성 시간  deprecated */
  modifiedDateTime?: number;
  /* 문서 작성시간 */
  createdDate?: Date;
  nickname?: string;
  likeCount?: number;
}

export enum DesignCommandType {
  HEADING = 'HEADING',
  BOLD = 'BOLD',
  ITALIC = 'ITALIC',
  LINETHROUGH = 'LINETHROUGH',
  UNDERLINE = 'UNDERLINE',
  FONTCOLOR = 'FONTCOLOR',
  BACKCOLOR = 'BACKCOLOR',
  ALIGNTEXT = 'ALIGNTEXT',
  URL = 'URL',
}

export enum CategoryType {
  DEVELOP = 'DEVELOP',
  DESIGN = 'DESIGN',
  PLANNING = 'PLANNING',
  MARKETING = 'MARKETING',
  DATA = 'DATA',
  ETC = 'ETC',
}

export enum ContentType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE',
  DEVIDER = 'DEVIDER',
  EMOJI = 'EMOJI',
  URL = 'URL',
}

export interface Content<T extends ContentType> {
  contentId: number;
  type: T;
}

export interface TextContent extends Content<ContentType.TEXT> {
  value: string;
}

export interface ImageContent extends Content<ContentType.IMAGE> {
  value: string;
  // represent: boolean;
}

export interface CodeContent extends Content<ContentType.CODE> {
  value: string;
  format: CodeFormat;
}

export enum DividerType {
  NORMAL,
  DASHED,
  SOLID,
  DOUBLE,
  SHORT,
}
export interface DividerContent extends Content<ContentType.DEVIDER> {
  deviderType: DividerType;
}

export interface UrlContent extends Content<ContentType.URL> {
  url: string;
  description: string;
}

export type CodeFormat = 'javascript' | 'json' | void;

export enum ThreadAction {
  EDIT = 'edit',
}

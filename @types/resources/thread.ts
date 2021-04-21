export interface Thread {
  /* 문서 id */
  id: 123;
  /* 문서 대표이미지 url (s3) */
  thumbnailUrl?: string;
  /* 문서 커버이미지 url (s3) */
  coverUrl?: string;
  /* 문서 표제 */
  title: string;
  /* 문서 부제 */
  subTitle?: string;
  /* 문서 직군 카테고리 리스트 (DEVELOP | DESIGN | PLANNING | MARKETING | DATA | ETC) */
  categories: ReadonlyArray<CategoryType>;
  /* 문서 태그 리스트 */
  tags: ReadonlyArray<{ id: number; value: string }>;
  /* 문서 본문 */
  contents: ReadonlyArray<TextContent | ImageContent | CodeContent | DeviderContent>;
  /* 문서 작성 시간 */
  modifiedDateTime: number;
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
}

export interface Content<T extends ContentType> {
  id: number;
  type: T;
}

export interface TextContent extends Content<ContentType.TEXT> {
  value: string;
}

export interface ImageContent extends Content<ContentType.IMAGE> {
  url: string;
  represent: boolean;
}

export interface CodeContent extends Content<ContentType.CODE> {
  value: string;
  format: CodeFormat;
}

export enum DeviderType {
  NORMAL,
  DASHED,
  SOLID,
  DOUBLE,
  SHORT,
}
export interface DeviderContent extends Content<ContentType.DEVIDER> {
  deviderType: DeviderType;
}

export type CodeFormat = 'javascript' | 'json' | void;

export enum ThreadAction {
  EDIT = 'edit',
}

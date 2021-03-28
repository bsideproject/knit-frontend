export interface Thread {
  /* 문서 id */
  id: 123;
  /* 문서 대표이미지 url (s3) */
  thumbnailUrl: string;
  /* 문서 표제 */
  title: string;
  /* 문서 부제 */
  subTitle?: string;
  /* 문서 직군 카테고리 리스트 (DEVELOP | DESIGN | PLANNING | MARKETING | DATA | ETC) */
  categories: ReadonlyArray<CategoryType>;
  /* 문서 해시태그 리스트 */
  hashtags: ReadonlyArray<string>;
  /* 문서 본문 */
  contents: ReadonlyArray<TextLine | ImageLine | CodeLine | DeviderLine>;
  /* 문서 작성 시간 */
  createdDateTime: number;
}

export enum CategoryType {
  DEVELOP = 'DEVELOP',
  DESIGN = 'DESIGN',
  PLANNING = 'PLANNING',
  MARKETING = 'MARKETING',
  DATA = 'DATA',
  ETC = 'ETC',
}

export enum LineType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE',
  DEVIDER = 'DEVIDER',
}

interface Line<T extends keyof typeof LineType> {
  type: T;
}

export interface TextLine extends Line<LineType.TEXT> {
  value: string;
}

export interface ImageLine extends Line<LineType.IMAGE> {
  value: string;
}

export interface CodeLine extends Line<LineType.CODE> {
  value: string;
  format: CodeFormat;
}

export interface DeviderLine extends Line<LineType.DEVIDER> {}

export type CodeFormat = 'javascript' | 'json' | void;

export enum ThreadAction {
  EDIT = 'edit',
}

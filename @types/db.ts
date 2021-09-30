export interface IMostViewData {
  id: number;
  title: string;
  contentSummary: string | null;
  viewCount: number;
  likeCount: number;
}

export interface IDebate {
  id: number;
  title: string;
  content: string;
  commentCount: number;
}

export interface ITag {
  title: string;
  url?: string;
}

export interface IRecentlyModified {
  threadId: number;
  title: string;
  modifiedDate?: Date;
}

export interface ISearchedData {
  id: number;
  title: string;
  category?: string;
  hashTags?: string;
  view?: number;
  like?: number;
  thumbnailUrl?: string;
  createdDate?: string;
}

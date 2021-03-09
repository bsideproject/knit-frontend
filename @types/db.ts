export interface IMostViewData {
  id: number;
  title: string;
  desc: string;
  viewCount: number;
  likeCount: number;
}

export interface IDebate {
  id: number;
  title: string;
  content: string;
  commentCount: number;
}

export interface IHashtag {
  title: string;
  url: string;
}

export interface IRecentlyModified {
  id: number;
  title: string;
  modifiedDate: number;
}

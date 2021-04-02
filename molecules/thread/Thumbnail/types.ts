export interface ThumbnailProps {
  url: string | null;
  editable: boolean;
  onChange: (url: string | null) => void;
}

export interface CoverProps {
  url?: string | undefined | null;
  editable: boolean;
  onChange: (url: string | null) => void;
}
export interface ImageUploadResponse {
  url: string;
}

export interface CoverProps {
  url?: string;
  editable: boolean;
  onChange: (url: string | null) => void;
}

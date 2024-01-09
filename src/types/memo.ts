export interface AddMemoRequestProps {
  timestamp: number;
  notebook: string | null;
}

export interface GetMemoResponseProps {
  title: string;
  text: string;
  createdAt: number;
  updatedAt: number;
  notebook: string | null;
}

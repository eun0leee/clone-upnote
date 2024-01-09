export interface AddMemoRequest {
  timestamp: number;
  notebookName: string | null;
}

export interface GetMemoResponse {
  title: string;
  text: string;
  createdAt: number;
  updatedAt: number;
  notebook: string | null;
}

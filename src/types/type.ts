export interface GithubIssueResponse {
  body: string;
  title: string;
  number: number;
  created_at: string;
  comments: number;
  user: {
    login: string;
    avatar_url: string;
  };
}

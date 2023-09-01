import axios from 'axios';

import { GithubIssueResponse } from '../types/type';

export const getIssueDetail = async (repo: string, issueNumber: number) => {
  const response = await axios.get(`https://api.github.com/repos/${repo}/issues/${issueNumber}`);
  const results = response.data as GithubIssueResponse;
  // if (isGithubIssueResponse(results)) {
  return results;
  // } else {
  //     throw new Error('API 응답에서 필요한 필드가 누락되었습니다.');
  // }
};

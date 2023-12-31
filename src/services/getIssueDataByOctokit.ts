import { Octokit } from 'octokit';
import { Endpoints } from '@octokit/types';

export type issueListResponse = Endpoints['GET /repos/{owner}/{repo}/issues']['response'];
export type issueDetailResponse =
  Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}']['response'];

// octokit auth
const octokit = new Octokit({ auth: process.env.REACT_APP_OCTOKIT_TOKEN });

// octokit reqeust 공통 옵션과 개별 옵션 분리
const commonOptions = {
  owner: 'facebook',
  repo: 'react',
  state: 'open' as const,
  headers: { 'X-GitHub-Api-Version': '2022-11-28' },
};

const listOptions = {
  sort: 'comments' as const,
  per_page: 30,
  ...commonOptions,
};

export const getIssuesList = async (page?: number) => {
  try {
    //page 파라미터로 넣지 않았을 때의 기본값 설정
    const actualPage = page ?? 1;

    const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      page: actualPage,
      ...listOptions,
    });
    return response;
  } catch (error: any) {
    //octokit 결과값에 따른 http상태코드 url에 보관
    const currentLocation = window.location.href;
    const HttpStatusAppendedUrl = currentLocation + `?status=${error.status}`;
    if (!currentLocation.includes('?status')) {
      window.location.href = HttpStatusAppendedUrl;
    }
    return { data: [] };
  }
};

export const getIssueDetail = async (issueId: number) => {
  try {
    const response = await octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
      issue_number: issueId,
      ...listOptions,
    });
    return response;
  } catch (error: any) {
    const currentLocation = window.location.href;
    const HttpStatusAppendedUrl = currentLocation + `?status=${error.status}`;
    if (!currentLocation.includes('?status')) {
      window.location.href = HttpStatusAppendedUrl;
    }
  }
};

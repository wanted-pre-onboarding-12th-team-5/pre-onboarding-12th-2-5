import React from 'react';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary, IssueDetail, IssueList } from '../pages';
import { get_issue_detail, get_issues_list } from '../services/getIssueDataByOctokit';

interface IRouter {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  loader?: (() => any) | (({ params }: any) => any);
  children?: IRouter[];
}

const routerData: IRouter[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '', element: <IssueList />, loader: async () => get_issues_list() },
      {
        path: '/issue/:id',
        element: <IssueDetail />,
        loader: async ({ params }) => get_issue_detail(params.id),
      },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;

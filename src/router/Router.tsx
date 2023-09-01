import React from 'react';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary, IssueDetail, IssueList } from '../pages';
import { get_issue_detail, get_issues_list } from '../services/getIssueDataByOctokit';

interface IRouter {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  loader?: (() => any) | ((props: any) => any);
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
        loader: async props => get_issue_detail(props.params.id),
      },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;

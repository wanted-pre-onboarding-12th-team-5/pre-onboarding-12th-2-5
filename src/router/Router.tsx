import React from 'react';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary, IssueDetail, IssueList } from '../pages';
import { getIssueDetail, getIssuesList } from '../services/getIssueDataByOctokit';

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
      { path: '', element: <IssueList />, loader: async () => getIssuesList() },
      {
        path: '/issue/:id',
        element: <IssueDetail />,
        loader: async props => getIssueDetail(props.params.id),
      },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;

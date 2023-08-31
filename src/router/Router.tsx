import React from 'react';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary, IssueDetail, IssueList } from '../pages';

interface IRouter {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: IRouter[];
  loader?: (() => any) | (({ params }: any) => any);
}

const routerData: IRouter[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '', element: <IssueList /> },
      { path: '/issue/:id', element: <IssueDetail /> },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;

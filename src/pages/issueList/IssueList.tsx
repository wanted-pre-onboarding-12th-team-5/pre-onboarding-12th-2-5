import React, { Fragment, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { getIssuesList, issueListResponse } from 'services/getIssueDataByOctokit';
import { IssueType } from 'types/issue';
import AdvertiseElement from './AdvertiseElement';
import IssueElement from './IssueElement';
import { useIntersect } from 'hooks/useIntersect';

const IssueList = () => {
  const response = useLoaderData() as issueListResponse;
  const [issueList, setIssueList] = useState<IssueType[]>([...response.data]);
  const [page, setPage] = useState(1);
  const intersectionObserverTarget = useIntersect(handleGetMoreIssues);

  async function handleGetMoreIssues() {
    await getIssuesList(page + 1).then(response => {
      setIssueList([...issueList, ...response.data]);
      setPage(page + 1);
    });
  }

  return (
    <React.Suspense fallback={<p>Loading Test</p>}>
      <ul>
        {issueList.map((issue, index) =>
          index % 5 === 0 && index !== 0 ? (
            <Fragment key={issue.number}>
              <AdvertiseElement />
              <IssueElement issue={issue} />
            </Fragment>
          ) : (
            <IssueElement key={issue.number} issue={issue} />
          ),
        )}
        {issueList.length > 0 && <StyledScroll ref={intersectionObserverTarget} />}
      </ul>
    </React.Suspense>
  );
};

export default IssueList;

const StyledScroll = styled.div`
  height: 100px;
`;
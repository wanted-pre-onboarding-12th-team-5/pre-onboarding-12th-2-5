import React, { Fragment, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { getIssuesList, issueListResponse } from 'services/getIssueDataByOctokit';
import { IssueType } from 'types/issue';
import AdvertiseElement from './AdvertiseElement';
import IssueElement from './IssueElement';
import { useIntersect } from 'hooks/useIntersect';
import CustomSuspense from 'components/common/Suspense/CustomSuspense';
import { BeatLoader } from 'react-spinners';

const IssueList = () => {
  const response = useLoaderData() as issueListResponse;
  const [issueList, setIssueList] = useState<IssueType[]>([...response.data]);
  const [page, setPage] = useState(1);
  const intersectionObserverTarget = useIntersect(handleGetMoreIssues);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  async function handleGetMoreIssues() {
    setIsLoading(true);
    try {
      await getIssuesList(page + 1).then(response => {
        setIssueList([...issueList, ...response.data]);
        setPage(page + 1);
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ul>
      <CustomSuspense
        fallback={<BeatLoader color="#0059cd" className="loadingBar" />}
        maxDuration={500}
      >
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

        {isLoading && <BeatLoader color="#0059cd" className="loadingBar" />}
      </CustomSuspense>
      {issueList.length > 0 && !isLoading && (
        <div style={{ height: 100 }} ref={intersectionObserverTarget} />
      )}
    </ul>

  );
};

export default IssueList;

const StyledScroll = styled.div`
  height: 100px;
`;
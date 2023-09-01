import React, { Fragment, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { getIssuesList, issueListResponse } from 'services/getIssueDataByOctokit';
import { IssueType } from 'types/issue';
import AdvertiseElement from './AdvertiseElement';
import IssueElement from './IssueElement';
import { useIntersect } from 'hooks/useIntersect';
import CustomSuspense from 'components/common/Suspense/CustomSuspense';

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
    <CustomSuspense fallback={<p>Loading Test</p>} maxDuration={2000}>
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
        {issueList.length > 0 && <div style={{ height: 100 }} ref={intersectionObserverTarget} />}
        {/* TODO: 스타일 적용 시에 div style: height 100px 적용 */}
      </ul>
    </CustomSuspense>
  );
};

export default IssueList;

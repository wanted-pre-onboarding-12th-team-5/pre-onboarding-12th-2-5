import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { issueListResponse } from 'services/getIssueDataByOctokit';
import { IssueType } from 'types/issue';
import AdvertiseElement from './AdvertiseElement';
import IssueElement from './IssueElement';

const IssueList = () => {
  const response = useLoaderData() as issueListResponse;
  const [issueList, setIssueList] = useState<IssueType[]>([...response.data]);

  return (
    <React.Suspense fallback={<p>Loading Test</p>}>
      <ul>
        {issueList.map((issue, index) => (
          //FIXME
          <>
            <IssueElement issue={issue} />
            <AdvertiseElement />
          </>
        ))}
      </ul>
    </React.Suspense>
  );
};

export default IssueList;

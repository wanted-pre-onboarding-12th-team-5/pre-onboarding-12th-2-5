import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { issueListResponse } from '../../services/getIssueDataByOctokit';

const IssueList = () => {
  const response = useLoaderData() as issueListResponse;
  const [issueList, setIssueList] = useState([...response.data]);

  return <div>IssueList</div>;
};

export default IssueList;

import { useLoaderData } from 'react-router-dom';
import { issueDetailResponse } from '../../services/getIssueDataByOctokit';

const IssueDetail = () => {
  const response = useLoaderData() as issueDetailResponse;
  const issueDetail = response.data;

  return <div>IssueDetail</div>;
};

export default IssueDetail;

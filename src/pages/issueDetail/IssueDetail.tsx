import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { issueDetailResponse } from '../../services/getIssueDataByOctokit';
import './IssueDetail.css';
import Prism from 'prismjs';

const IssueDetail = () => {
  const response = useLoaderData() as issueDetailResponse;
  const issueDetail = response.data;

  useEffect(() => {
    Prism.highlightAll();
  }, [issueDetail]);

  return (
    <div className="IssueDetail" style={{ border: '4px solid black', padding: '5%' }}>
      {/* 여기 헤더 투입 */}
      <img src={issueDetail?.user?.avatar_url || ''} alt="user avatar" />
      {/* list cell 형태 삽입 */}
      <ReactMarkdown>{issueDetail?.body || ''}</ReactMarkdown>
    </div>
  );
};

export default IssueDetail;

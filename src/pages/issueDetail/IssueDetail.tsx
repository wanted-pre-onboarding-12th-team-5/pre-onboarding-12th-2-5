import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { issueDetailResponse } from '../../services/getIssueDataByOctokit';
import './IssueDetail.css';
import Prism from 'prismjs';
import IssueElement from '../issueList/IssueElement';
import styled from 'styled-components';

const IssueDetail = () => {
  const response = useLoaderData() as issueDetailResponse;
  const issueDetail = response.data;

  useEffect(() => {
    Prism.highlightAll();
  }, [issueDetail]);

  return (
    <div className="IssueDetail">
      <StyledDetail>
        <img className='detail-user-url' src={issueDetail?.user?.avatar_url || ''} alt="user avatar" />
        <IssueElement issue={issueDetail} />
      </StyledDetail>
      <StyledMarkDown>
        <ReactMarkdown>{issueDetail?.body || ''}</ReactMarkdown>
      </StyledMarkDown>
    </div>
  );
};

export default IssueDetail;

const StyledDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .detail-user-url {
    width: 4rem;
    height: 4rem;
    border-bottom: 1px solid #999;
    border-radius: 100%;
  }
`;

const StyledMarkDown = styled.div`
  padding: 1rem 2rem;
  margin-top: 2rem;
  border: 1px solid #999;
  border-radius: 1rem;
`;
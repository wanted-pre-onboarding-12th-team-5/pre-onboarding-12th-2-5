import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { issueDetailResponse } from '../../services/getIssueDataByOctokit';
import './IssueDetail.css';
import Prism from 'prismjs';
import IssueElement from '../issueList/IssueElement';
import { BeatLoader } from 'react-spinners';
import CustomSuspense from '../../components/common/Suspense/CustomSuspense';

const IssueDetail = () => {
  const response = useLoaderData() as issueDetailResponse;
  const issueDetail = response.data;

  useEffect(() => {
    Prism.highlightAll();
  }, [issueDetail]);

  return (
    <CustomSuspense
      fallback={<BeatLoader color="#0059cd" className="loadingBar" />}
      maxDuration={500}
    >
      <div className="IssueDetail" style={{ border: '4px solid black', padding: '5%' }}>
        <div style={{ display: 'flex' }}>
          <img src={issueDetail?.user?.avatar_url || ''} alt="user avatar" />
          <IssueElement issue={issueDetail} />
        </div>
        <ReactMarkdown>{issueDetail?.body || ''}</ReactMarkdown>
      </div>
    </CustomSuspense>
  );
};

export default IssueDetail;

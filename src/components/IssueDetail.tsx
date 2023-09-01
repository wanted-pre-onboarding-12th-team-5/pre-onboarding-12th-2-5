import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './IssueDetail.css';
import Prism from 'prismjs';

import { getIssueDetail } from '../services/IssueDetail';

import { GithubIssueResponse } from '../types/type';

function IssueDetail() {
  const [issueDetail, setIssueDetail] = useState<GithubIssueResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detail = await getIssueDetail('facebook/react', 27319);
        setIssueDetail(detail);
      } catch (error) {
        console.error('Issue detail could not be fetched:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [issueDetail]);

  return (
    <div className="IssueDetail" style={{ border: '4px solid black', margin: '5%' }}>
      {/* 여기 헤더 투입 */}
      <img src={issueDetail?.user.avatar_url || ''} alt="user avatar" />
      {/* list cell 형태 삽입 */}
      <ReactMarkdown>{issueDetail?.body || ''}</ReactMarkdown>
    </div>
  );
}

export default IssueDetail;

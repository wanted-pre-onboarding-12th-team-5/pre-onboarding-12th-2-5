import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

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

  return (
    <div className="IssueDetail" style={{ border: '4px solid black', margin: '5%' }}>
      {/* 여기 헤더 투입 */}
      {/* 유저 img */}
      {/* list cell 형태 삽입 */}

      <div>
        <p>{issueDetail?.title}</p>
        <ReactMarkdown>{issueDetail?.body || ''}</ReactMarkdown>
      </div>
    </div>
  );
}

export default IssueDetail;

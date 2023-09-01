import React from 'react';
import { Link } from 'react-router-dom';

//FIXME
// interface Props {
//   // issueData: IssueType;
// }

const IssueElement = () => {
  return (
    <li>
      <Link to={``}>
        <section>
          <div className="issue-number">#123</div>
          <div className="issue-title">타이틀</div>
        </section>

        <section className="issue-info">
          <div className="issue-author">작성자 : </div>
          <div className="issue-date">작성일 : </div>
          <div className="issue-comments"> issue 댓글 </div>
        </section>
      </Link>
    </li>
  );
};

export default IssueElement;

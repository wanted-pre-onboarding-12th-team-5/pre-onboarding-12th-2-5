import { Link } from 'react-router-dom';

import { IssueType } from 'types/issue';

interface Props {
  issue: IssueType;
}

const IssueElement = ({ issue }: Props) => {
  return (
    <li>
      <Link to={`/issue/${issue.number}`}>
        <section>
          <div className="issue-number">#{issue.number}</div>
          <div className="issue-title">{issue.title}</div>
        </section>

        <section className="issue-info">
          <div className="issue-author">작성자 : {issue.user?.login}</div>
          <div className="issue-date">
            작성일 : {new Date(issue.created_at).toLocaleDateString()}
          </div>
          <div className="issue-comments"> issue 댓글 {issue.comments} </div>
        </section>
      </Link>
    </li>
  );
};

export default IssueElement;

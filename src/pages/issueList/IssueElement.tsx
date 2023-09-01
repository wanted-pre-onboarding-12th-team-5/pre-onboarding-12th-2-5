import { Link } from 'react-router-dom';
import { IssueType } from 'types/issue';
import styled from 'styled-components';

interface Props {
  issue: IssueType;
}


const IssueElement = ({ issue }: Props) => {
  return (
    <StyledIssueElement>
      <Link to={`/issue/${issue.number}`}>
        <section>
          <div className="issue-number">#{issue.number}</div>
          <h2 className="issue-title">{issue.title}</h2>
        </section>

        <section className="issue-info">
          <div className='issue-user'>
            <span className="issue-author">작성자 : {issue.user?.login}</span>
            <span className="issue-date">
              작성일 : {new Date(issue.created_at).toLocaleDateString()}
            </span>
          </div>
          <div>
            <span className="issue-comments"> issue 댓글 {issue.comments} </span>
          </div>
        </section>
      </Link>
    </StyledIssueElement>
  );
};

export default IssueElement;

const StyledIssueElement = styled.li`
  padding: 0.75rem;
  width: 100%;
  border-bottom: 1px solid #999;

  section {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .issue-number {
    color: #999;
  }
  .issue-title {
    margin: 0.5rem 0;
    transition: 0.2s;
    &:hover {
      color: #2c5bf2;
    }
  }
  .issue-info {
    justify-content: space-between;
    .issue-user > span {
      margin-right: 1rem;
    }
  }
`;
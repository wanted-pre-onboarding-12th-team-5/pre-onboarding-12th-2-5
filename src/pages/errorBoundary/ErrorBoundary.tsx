import { Suspense } from 'react';
import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';

const ErrorBoundary = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get('status');

  const errorStatusList = [
    { statusCode: 301, description: 'Moved permanently' },
    { statusCode: 304, description: 'Not modified' },
    { statusCode: 404, description: 'Resource not found' },
    { statusCode: 410, description: 'Gone' },
    {
      statusCode: 422,
      description: 'Validation failed, or the endpoint has been spammed',
    },
  ];

  const ErrorBoundaryComponent =
    status &&
    errorStatusList
      .filter(errorObj => errorObj.statusCode === parseInt(status))
      .map(targetObj => (
        <StyledError key={targetObj.statusCode}>
          <BsGithub className='status-icon' />
          <h1>Status Code : {targetObj.statusCode}</h1>

          <p className='status-code'>{targetObj.description}</p>
        </StyledError>
      ));

  return (
    <Suspense fallback={<div>...Status Code 파악 중에 있습니다...</div>}>
      {ErrorBoundaryComponent}
    </Suspense>
  );
};

export default ErrorBoundary;

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  .status-icon {
    font-size: 6rem;
  }
  .status-code {
    margin: 0;
  }
`;
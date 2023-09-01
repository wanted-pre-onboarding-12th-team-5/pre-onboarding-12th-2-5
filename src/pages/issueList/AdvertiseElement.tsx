import styled from 'styled-components';

const AdvertiseElement = () => {
  return (
    <StyledAdvertiseElement>
      <a href="https://wanted.co.kr">
        <img src="/wanted.webp" alt="wanted Advertisement" />
      </a>
    </StyledAdvertiseElement>
  );
};

export default AdvertiseElement;

const StyledAdvertiseElement  = styled.li`
  padding: 1.5rem;
  border-bottom: 1px solid #999;
  img {
    display: block;
    margin: 0 auto;
    scale: 1.4;
  }
`;

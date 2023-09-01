import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Facebook / React Issues List</h1>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`;
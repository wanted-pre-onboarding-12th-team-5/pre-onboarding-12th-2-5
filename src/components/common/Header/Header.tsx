import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';

const Header = () => {
  return (
    <StyledHeader>
      <BsGithub className='logo' />
      <h1>Facebook / React Issues List</h1>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    font-size: 2rem;
    margin-right: 1rem;
  }
`;
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const router = useNavigate();
  const location = useLocation();
  return (
    <header>
      <h1>Facebook / React Issues List</h1>
      {location.pathname.includes('issue') && (
        <button className="backBtn" onClick={() => router(-1)}>
          뒤로 가기
        </button>
      )}
    </header>
  );
};

export default Header;

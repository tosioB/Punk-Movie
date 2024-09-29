import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">
          <img src={logo} alt="로고" />
        </Link>
      </h1>
      <div className="header-right">
        <span className="inp-box">
          <input type="text" placeholder="검색해" />
        </span>
        <div className="btn-box">
          <button type="button" className="btn login-btn">
            로그인
          </button>
          <button className="btn sign-up-btn">회원가입</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

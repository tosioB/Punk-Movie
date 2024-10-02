import { Link, useNavigate } from "react-router-dom";
import "./style/header.scss";
import logo from "../../assets/images/logo.png";
import { useRef, useState } from "react";

function Header() {
  const searchInputRef = useRef(null);
  const [searchState, setSearchState] = useState(false);
  const navigate = useNavigate();

  const handleSearchInputRef = () => {
    if (searchInputRef.current.value.trim() === "") {
      navigate("/");
    } else {
      navigate("/Search");
    }
  };

  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">
          <img src={logo} alt="로고" />
        </Link>
      </h1>
      <div className="header-right">
        <div className={searchState ? "search-box show" : "search-box"}>
          <button
            type="button"
            className="icon-btn search"
            onClick={() => {
              setSearchState(true);
            }}
          >
            검색
          </button>
          <span className="inp-box">
            <input
              type="text"
              placeholder="영화를 검색하세요."
              ref={searchInputRef}
              onChange={handleSearchInputRef}
            />
            <button
              type="button"
              className="icon-btn no-bg-color close"
              onClick={() => {
                setSearchState(false);
              }}
            >
              삭제
            </button>
          </span>
        </div>

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

import { Route, Routes } from "react-router-dom";
import "./assets/style/Common.scss";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <div className="punk-movie">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

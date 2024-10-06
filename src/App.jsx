import { Route, Routes } from "react-router-dom";
import Header from "@/components/Header/Header";
import Home from "@/pages/Home";
import Detail from "@/pages/Detail";
import Search from "@/pages/Search";
import "@/assets/style/Common.scss";

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

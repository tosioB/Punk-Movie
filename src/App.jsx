import { Route, Routes } from "react-router-dom";
import "./assets/style/Common.scss";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;

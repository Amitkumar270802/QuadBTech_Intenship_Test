import "./App.css";
import Header from "./component/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/page/home/Home";
import Footer from "./component/footer/Footer";
import MovieDetails from "./component/page/movieDetails/MovieDetails";
import { useEffect, useState } from "react";
import Form from "./component/page/form/Form";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  });

  const [data, setData] = useState([]);
  useEffect(() => {
    call_Api();
  }, []);

  async function call_Api() {
    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
      const json = await res.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App bg-slate-100 overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path={`/movie/:key`} element={<MovieDetails data={data} />} />
        <Route path="/form/:key" element={<Form data={data} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SongList from "../pages/SongList";
import Me from "../pages/Me";
import Contact from "../pages/Contact";
import VideoList from "../pages/VideoList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/canciones" element={<SongList />} />
      <Route path="/videos" element={<VideoList />} />
      <Route path="/biografía" element={<Me />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
};

export default Routing;

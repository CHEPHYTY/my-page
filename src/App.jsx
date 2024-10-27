import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Project from "./pages/project";


function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/project" element={<Project />} />
      </Route>
    </Routes>
  );
}


export default App;
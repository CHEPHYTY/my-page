import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navbar";
import Home from "./pages/home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}


export default App;
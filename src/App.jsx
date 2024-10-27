import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navbar";


function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>

      </Route>
    </Routes>
  );
}


export default App;
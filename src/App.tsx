import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TagGame } from "./modules/tag-game/TagGame";
import { HomePage } from "./modules/home-page/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/tag" element={<TagGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TagGame } from "./modules/tag-game/TagGame";
import { HomePage } from "./modules/home-page/HomePage";
import { FactsOfCats } from "./modules/facts-of-cats/FactsOfCats";

function App() {
  return (
    <BrowserRouter basename="/games/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tag" element={<TagGame />} />
        <Route path="/fact-of-cat" element={<FactsOfCats />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

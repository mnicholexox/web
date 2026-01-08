import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.tsx";
import SponsorAChild from "./pages/SponsorAChild.tsx";
import { ROUTES } from "./constants";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element={<Index />} />
      <Route path={ROUTES.SPONSOR_A_CHILD} element={<SponsorAChild />} />
    </Routes>
  </BrowserRouter>
);

export default App;


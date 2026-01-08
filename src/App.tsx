import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SponsorAChild from "./pages/SponsorAChild";
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


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.tsx";
import SponsorAChild from "./pages/SponsorAChild.tsx";
import MakeADonation from "./pages/MakeADonation.tsx";
import { ROUTES } from "./constants";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element={<Index />} />
      <Route path={ROUTES.SPONSOR_A_CHILD} element={<SponsorAChild />} />
      <Route path={ROUTES.MAKE_A_DONATION} element={<MakeADonation />} />
    </Routes>
  </BrowserRouter>
);

export default App;


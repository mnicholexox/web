import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.tsx";
import SponsorAChild from "./pages/SponsorAChild.tsx";
import MakeADonation from "./pages/MakeADonation.tsx";
import FAQ from "./pages/FAQ.tsx";
import Updates from "./pages/Updates.tsx";
import Login from "./pages/Login.tsx";
import Volunteer from "./pages/Volunteer.tsx";
import { Header, Footer, ScrollToTop } from "./components/layout";
import { ROUTES } from "./constants";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path={ROUTES.HOME} element={<Index />} />
      <Route path={ROUTES.SPONSOR_A_CHILD} element={<SponsorAChild />} />
      <Route path={ROUTES.MAKE_A_DONATION} element={<MakeADonation />} />
      <Route path={ROUTES.FAQ} element={<FAQ />} />
      <Route path={ROUTES.UPDATES} element={<Updates />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.VOLUNTEER} element={<Volunteer />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;


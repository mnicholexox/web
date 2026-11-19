import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.tsx";
import SponsorAChild from "./pages/SponsorAChild.tsx";
import MakeADonation from "./pages/MakeADonation.tsx";
import FAQ from "./pages/FAQ.tsx";
import Updates from "./pages/Updates.tsx";
import Volunteer from "./pages/Volunteer.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import { Header, Footer, ScrollToTop } from "./components/layout";
import { ROUTES, APP_URL } from "./constants";
import { useEffect } from "react";

/** Old /login links (bookmarks, shared posts) go to the app's sign-in. */
const RedirectToApp = () => {
  useEffect(() => {
    window.location.replace(APP_URL);
  }, []);
  return null;
};

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
      <Route path={ROUTES.LOGIN} element={<RedirectToApp />} />
      <Route path={ROUTES.VOLUNTEER} element={<Volunteer />} />
      <Route path={ROUTES.PRIVACY} element={<Privacy />} />
      <Route path={ROUTES.TERMS} element={<Terms />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;


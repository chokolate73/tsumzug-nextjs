import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomeEn from "./pages/HomeEn";
import HomeRu from "./pages/HomeRu";
import NotFound from "./pages/NotFound";

// Duisburg Local SEO pages (replaced old /services/* pages with 301 redirects)
import UmzugsunternehmenDuisburg from "./pages/duisburg/UmzugsunternehmenDuisburg";
import PrivatumzugDuisburg from "./pages/duisburg/PrivatumzugDuisburg";
import FirmenumzugDuisburg from "./pages/duisburg/FirmenumzugDuisburg";
import EntruempelungDuisburg from "./pages/duisburg/EntruempelungDuisburg";
import HaushaltsaufloesungDuisburg from "./pages/duisburg/HaushaltsaufloesungDuisburg";
import MoebeltransportDuisburg from "./pages/duisburg/MoebeltransportDuisburg";
import UmzugUndEntruempelungDuisburg from "./pages/duisburg/UmzugUndEntruempelungDuisburg";
import UmzugKostenDuisburg from "./pages/duisburg/UmzugKostenDuisburg";
import HausmeisterserviceDuisburg from "./pages/duisburg/HausmeisterserviceDuisburg";
import RenovierungDuisburg from "./pages/duisburg/RenovierungDuisburg";
import PreiseDuisburg from "./pages/duisburg/PreiseDuisburg";

// Angebot page
import Angebot from "./pages/Angebot";

// English service pages
import ResidentialMoves from "./pages/en/services/ResidentialMoves";
import OfficeRelocations from "./pages/en/services/OfficeRelocations";
import ClearanceDisposal from "./pages/en/services/ClearanceDisposal";
import FurnitureTransport from "./pages/en/services/FurnitureTransport";
import HandymanServices from "./pages/en/services/HandymanServices";
import RenovationEn from "./pages/en/services/Renovation";
import PricesEn from "./pages/en/Prices";

// Russian service pages
import ChastnyePereezdy from "./pages/ru/services/ChastnyePereezdy";
import OfisnyePereezdy from "./pages/ru/services/OfisnyePereezdy";
import UborkaVyvoz from "./pages/ru/services/UborkaVyvoz";
import PerevozkaMebeli from "./pages/ru/services/PerevozkaMebeli";
import UslugiMasterov from "./pages/ru/services/UslugiMasterov";
import Remont from "./pages/ru/services/Remont";
import PricesRu from "./pages/ru/Prices";

// Legal pages
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home pages */}
          <Route path="/" element={<Index />} />
          <Route path="/en" element={<HomeEn />} />
          <Route path="/ru" element={<HomeRu />} />

          {/* Duisburg Local SEO pages (old /services/* URLs redirect via vercel.json) */}
          <Route path="/umzugsunternehmen-duisburg" element={<UmzugsunternehmenDuisburg />} />
          <Route path="/privatumzug-duisburg" element={<PrivatumzugDuisburg />} />
          <Route path="/firmenumzug-duisburg" element={<FirmenumzugDuisburg />} />
          <Route path="/entruempelung-duisburg" element={<EntruempelungDuisburg />} />
          <Route path="/haushaltsaufloesung-duisburg" element={<HaushaltsaufloesungDuisburg />} />
          <Route path="/moebeltransport-duisburg" element={<MoebeltransportDuisburg />} />
          <Route path="/umzug-und-entruempelung-duisburg" element={<UmzugUndEntruempelungDuisburg />} />
          <Route path="/umzug-kosten-duisburg" element={<UmzugKostenDuisburg />} />
          <Route path="/hausmeisterservice-duisburg" element={<HausmeisterserviceDuisburg />} />
          <Route path="/renovierung-duisburg" element={<RenovierungDuisburg />} />
          <Route path="/preise-duisburg" element={<PreiseDuisburg />} />
          <Route path="/angebot" element={<Angebot />} />

          {/* English service pages */}
          <Route path="/en/services/residential-moves" element={<ResidentialMoves />} />
          <Route path="/en/services/office-relocations" element={<OfficeRelocations />} />
          <Route path="/en/services/clearance-disposal" element={<ClearanceDisposal />} />
          <Route path="/en/services/furniture-transport" element={<FurnitureTransport />} />
          <Route path="/en/services/handyman-services" element={<HandymanServices />} />
          <Route path="/en/services/renovation" element={<RenovationEn />} />
          <Route path="/en/prices" element={<PricesEn />} />

          {/* Russian service pages */}
          <Route path="/ru/services/chastnye-pereezdy" element={<ChastnyePereezdy />} />
          <Route path="/ru/services/ofisnye-pereezdy" element={<OfisnyePereezdy />} />
          <Route path="/ru/services/uborka-vyvoz" element={<UborkaVyvoz />} />
          <Route path="/ru/services/perevozka-mebeli" element={<PerevozkaMebeli />} />
          <Route path="/ru/services/uslugi-masterov" element={<UslugiMasterov />} />
          <Route path="/ru/services/remont" element={<Remont />} />
          <Route path="/ru/prices" element={<PricesRu />} />

          {/* Legal pages */}
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

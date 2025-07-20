import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import ScrollToHash from "@/utils/ScrollToHash";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Layout from "./components/Layout";
import QuotePage from "./pages/QuotePage";
import Blogs from "./pages/Blogs"; // ✅ Added

// Import service pages
import MannedGuarding from "./pages/services/MannedGuarding";
import EventsSecurity from "./pages/services/EventsSecurity";
import K9Unit from "./pages/services/K9Unit";
import CCTVInstallation from "./pages/services/CCTVInstallation";
import ElectricFencing from "./pages/services/ElectricFencing";
import AlarmResponse from "./pages/services/AlarmResponse";
import VIPCloseProtection from "./pages/services/VIPCloseProtection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="team" element={<Team />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="quote" element={<QuotePage />} />
          <Route path="blogs" element={<Blogs />} /> {/* ✅ Blogs page route */}

          {/* Individual service routes */}
          <Route path="services/manned-guarding" element={<MannedGuarding />} />
          <Route path="services/events-security" element={<EventsSecurity />} />
          <Route path="services/k9-unit" element={<K9Unit />} />
          <Route path="services/cctv-installation" element={<CCTVInstallation />} />
          <Route path="services/electric-fencing" element={<ElectricFencing />} />
          <Route path="services/alarm-response" element={<AlarmResponse />} />
          <Route path="services/vip-close-protection" element={<VIPCloseProtection />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

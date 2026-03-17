import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import CatalystFund from "./pages/CatalystFund";
import CatalystDeck from "./pages/CatalystDeck";
import FoundationDeck from "./pages/FoundationDeck";
import WRCFDeck from "./pages/WRCFDeck";
import FounderDeck from "./pages/FounderDeck";
import EqualityFundDeck from "./pages/EqualityFundDeck";
import FundI from "./pages/FundI";
import Opportunities from "./pages/Opportunities";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/catalyst-deck" element={<CatalystDeck />} />
          <Route path="/foundation-deck" element={<FoundationDeck />} />
          <Route path="/wrcf-deck" element={<WRCFDeck />} />
          <Route path="/founder-deck" element={<FounderDeck />} />
          <Route path="/equality-fund-deck" element={<EqualityFundDeck />} />
          <Route
            path="*"
            element={
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <div className="flex-1">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/catalyst-fund" element={<CatalystFund />} />
                    <Route path="/fund-i" element={<FundI />} />
                    <Route path="/opportunities" element={<Opportunities />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

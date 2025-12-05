import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Offerings from "./pages/Offerings"; // Import Offerings page
import About from "./pages/About"; // Import About page
import Contact from "./pages/Contact"; // Import Contact page
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Import PrivacyPolicy page
import TermsOfService from "./pages/TermsOfService"; // Import TermsOfService page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/offerings" element={<Offerings />} /> {/* New route */}
              <Route path="/about" element={<About />} /> {/* New route */}
              <Route path="/contact" element={<Contact />} /> {/* New route */}
              <Route path="/privacy" element={<PrivacyPolicy />} /> {/* New route */}
              <Route path="/terms" element={<TermsOfService />} /> {/* New route */}
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <SiteFooter />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
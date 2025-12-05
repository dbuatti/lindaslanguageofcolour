import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Offerings from "./pages/Offerings"; // Import Offerings page
import About from "./pages/About"; // Import About page
import Contact from "./pages/Contact"; // Import Contact page
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Import PrivacyPolicy page
import TermsOfService from "./pages/TermsOfService"; // Import TermsOfService page
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import ScrollToTopButton
import useDocumentTitle from "./hooks/useDocumentTitle"; // Import useDocumentTitle

const queryClient = new QueryClient();

// Component to set document title based on route
const RouteTitleSetter = () => {
  const location = useLocation();
  const baseTitle = "Linda's Language of Colour";
  let pageTitle = baseTitle;

  switch (location.pathname) {
    case "/":
      pageTitle = baseTitle;
      break;
    case "/offerings":
      pageTitle = `Offerings - ${baseTitle}`;
      break;
    case "/about":
      pageTitle = `About Linda - ${baseTitle}`;
      break;
    case "/contact":
      pageTitle = `Contact - ${baseTitle}`;
      break;
    case "/privacy":
      pageTitle = `Privacy Policy - ${baseTitle}`;
      break;
    case "/terms":
      pageTitle = `Terms of Service - ${baseTitle}`;
      break;
    default:
      pageTitle = `Page Not Found - ${baseTitle}`;
      break;
  }

  useDocumentTitle(pageTitle);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner /> {/* Only Sonner Toaster is kept */}
      <BrowserRouter>
        <RouteTitleSetter /> {/* Add the title setter here */}
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
          <ScrollToTopButton /> {/* Add the ScrollToTopButton here */}
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
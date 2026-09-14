import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SiteLayout } from "./components/SiteLayout";
import ContentPage from "./pages/ContentPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SimulatorPage from "./pages/SimulatorPage";
import BlogPage from "./pages/BlogPage";
import { allContentPages } from "./data/pages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            {allContentPages.map(page => <Route key={page.path} path={page.path} element={<ContentPage />} />)}
            <Route path="/projetos/" element={<ProjectsPage />} />
            <Route path="/projetos/:slug/" element={<ProjectDetailPage />} />
            <Route path="/sobre/" element={<AboutPage />} />
            <Route path="/contato/" element={<ContactPage />} />
            <Route path="/simulador/" element={<SimulatorPage />} />
            <Route path="/blog/" element={<BlogPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

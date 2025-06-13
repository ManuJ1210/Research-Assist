import { Routes, Route ,  useLocation } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import About from "../components/AboutPage/About";
import Payments from "../components/Paymentspage/payments";
import Manuscript from "../components/Homepage/Manuscripts";
import Contact from "../components/ContactPage/Contact";
import Englishpage from "../components/Services/English";
import Research from "../components/Services/Research";
import ManuscriptEditing from "../components/Services/ManuscriptEditing";
import ManuscriptWriting from "../components/Services/ManuscripWriting";
import ClinicalDesign from "../components/Services/ClinicalDesign";
import FigurePreparation from "../components/Services/FigurePreparation";
import DataManagement from "../components/Services/DataManagement";
import RegularBiostatic from "../components/Academics/RegularBiostatic";
import Privacy from "../components/Privacy/PrivacyPolicy";
import { AnimatePresence } from 'framer-motion';




export default function AppRoutes() {
   const location = useLocation();
  return (
    <AnimatePresence mode="wait">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/manuscript" element={<Manuscript />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/english" element={<Englishpage />} />
      <Route path="/research" element={<Research />} />
      <Route path="/manuscriptEditing" element={<ManuscriptEditing />} />
      <Route path="/manuscriptWriting" element={<ManuscriptWriting />} />
      <Route path="/clinicalDesign" element={<ClinicalDesign />} />
      <Route path="/figurePreparation" element={<FigurePreparation />} />
      <Route path="/dataManagement" element={<DataManagement />} />
      <Route path="/regularBiostatic" element={<RegularBiostatic />} />
       <Route path="/privacy" element={<Privacy />} />
    </Routes>
    </AnimatePresence>
  );
}
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import HomePage from "./screens/HomePage";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/FooterNew/footerHero"
import ContactPage from './components/ContactUsPage/ContactPage';
import AboutPage from "./screens/AboutPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Services from "./screens/Services";
// import BlogInnerPage from "./screens/BlogInnerPage";
import LoginScreen from "./AdminScreens/LoginScreen";
import BlogsScreen from "./AdminScreens/BlogsScreens/BlogsScreen";
import AdminScreen from "./AdminScreens/AdminScreen";
import LocationScreen from './screens/LocationScreens/LocationScreen';
import LocationPages from "./components/LocationPages_/LocationPages"
import CaseStudiesPage from "./screens/CaseStudiesPage";
import CaseStudyInner from "./screens/CaseStudyInner";
import ConsultationPage from "./screens/ConsultationPage";
import ContactFormPage from "./screens/ContactFormPage";
import TechMentorshipPage from "./screens/TechMentorshipPage";
import BlogsPage from "./screens/BlogsPage";
import BloginnerPage from "./screens/BlogInnerPage";

const App = () => {

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/casestudy" element={<CaseStudiesPage />} />
        <Route path="/casestudy-inner" element={<CaseStudyInner />} />
        <Route path="/tech-mentorship" element={<TechMentorshipPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs-inner" element={<BloginnerPage />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="/contact" element={<ContactFormPage />} />

        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/admin/blogs" element={<BlogsScreen />} />
        <Route path='/location/:slug' element={<LocationPages />} />
        <Route path='/admin/location-pages' element={<LocationScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; 
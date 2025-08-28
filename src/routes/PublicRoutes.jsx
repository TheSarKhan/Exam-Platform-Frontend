import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import About from "../pages/AboutPage/AboutPage";
import Contact from "../pages/ContactPage/ContactPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ExamDetailPage from "../pages/ExamDetailPage/ExamDetailPage";
// import Exams from "../pages/welcome/Exams";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail" element={<ExamDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

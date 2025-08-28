import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./routes/PublicRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";
import StudentRoutes from "./routes/StudentRoutes";
import TeacherRoutes from "./routes/TeacherRoutes";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/student/*" element={<StudentRoutes />} />
      <Route path="/teacher/*" element={<TeacherRoutes />} />
    </Routes>
  );
}

import { Route, Routes } from "react-router-dom";
import StudentLayout from "../layouts/StudentLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../pages/student/Profile/Profile";

export default function StudentRoutes() {
  return (
    <Routes>
      <Route element={<StudentLayout />}>
        <Route
          path="profile"
          element={
            <ProtectedRoute role={"STUDENT"}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="exams" element={<ProtectedRoute role={"STUDENT"}>{/* <StudentExams /> */}</ProtectedRoute>} />
      </Route>
    </Routes>
  );
}

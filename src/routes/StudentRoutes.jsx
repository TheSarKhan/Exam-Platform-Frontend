import { Route, Routes } from "react-router-dom";
import StudentLayout from "../layouts/StudentLayout";
import StudentProfile from "../pages/student/StudentProfilePage/StudentProfilePage";
import ProtectedRoute from "../components/ProtectedRoute";

export default function StudentRoutes() {
  return (
    <Routes>
      <Route element={<StudentLayout />}>
        <Route
          path="profile"
          element={
            <ProtectedRoute role={"STUDENT"}>
              <StudentProfile />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="exams"
          element={
            <ProtectedRoute role={"STUDENT"}>
              <StudentExams />
            </ProtectedRoute>
          }
        /> */}
      </Route>
    </Routes>
  );
}

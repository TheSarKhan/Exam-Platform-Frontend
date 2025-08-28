import { Route, Routes } from "react-router-dom";
import TeacherLayout from "../layouts/TeacherLayout";
import TeacherProfile from "../pages/teacher/TeacherProfilePage/TeacherProfilePage";
import ProtectedRoute from "../components/ProtectedRoute";

export default function TeacherRoutes() {
  return (
    <Routes>
      <Route element={<TeacherLayout />}>
        <Route
          path="profile"
          element={
            <ProtectedRoute role={"TEACHER"}>
              <TeacherProfile />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="create-exam"
          element={
            <ProtectedRoute role={"TEACHER"}>
              <CreateExam />
            </ProtectedRoute>
          }
        /> */}
      </Route>
    </Routes>
  );
}

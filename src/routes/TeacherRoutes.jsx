import { Route, Routes } from "react-router-dom";
import TeacherLayout from "../layouts/TeacherLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../pages/teacher/Profile/Profile";

export default function TeacherRoutes() {
  return (
    <Routes>
      <Route element={<TeacherLayout />}>
        <Route
          path="profile"
          element={
            <ProtectedRoute role={"TEACHER"}>
              <Profile />
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

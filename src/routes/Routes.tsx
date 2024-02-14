import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
// import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/viewPage/ViewPage";
import ViewPageLocation from "../pages/viewPage/ViewFromLocation";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";
import AddToDo from "../pages/add-todo/AddToDo";

const AllRoutes = () => {
  const loginStatus =
    localStorage.getItem("loggedIn") &&
    localStorage.getItem("loggedIn") === "true";

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<MainPage />} />
      <Route
        path="/login"
        element={<Login />}
        children={
          <Route
            path="/login/showStatus"
            element={
              loginStatus ? (
                <div>The user is logged in.</div>
              ) : (
                <div>The user is not logged in.</div>
              )
            }
          />
        }
      />

      <Route
        path="/add"
        element={loginStatus ? <AddToDo /> : <Navigate replace to="/login" />}
      />
      <Route path="/view/:id" element={<ViewPage />} />
      <Route path="/view" element={<ViewPageLocation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;

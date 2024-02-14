import { Route } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/viewPage/ViewPage";
import ViewPageLocation from "../pages/viewPage/ViewFromLocation";

const Routes = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/add" component={AddToDo} exact />
      <Route path="/view/:id" component={ViewPage} exact />
      <Route path="/view" component={ViewPageLocation} exact />
    </>
  );
};

export default Routes;

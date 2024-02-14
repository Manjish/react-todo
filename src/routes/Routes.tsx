import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/viewPage/ViewPage";
import ViewPageLocation from "../pages/viewPage/ViewFromLocation";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={MainPage} exact />
        <Route path="/login" component={Login} />

        <Route path="/add" component={AddToDo} exact>
          {localStorage.getItem("loggedIn") ? (
            <>
              <AddToDo />
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/view/:id" component={ViewPage} exact />
        <Route path="/view" component={ViewPageLocation} exact />

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

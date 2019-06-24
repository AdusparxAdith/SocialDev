import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../layout/NotFound";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../profile-forms/CreateProfile";
import EditProfile from "../profile-forms/EditProfile";
import AddExperience from "../profile-forms/AddExperience";
import AddEducation from "../profile-forms/AddEducation";
import Profiles from "../profiles/Profiles";
import Profile from "../profile/Profile";
import PrivateRoute from "../routing/PrivateRoute";
import Login from "../auth/Login";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import Inbox from "../inbox/Inbox";
import Register from "../auth/Register";
import Alert from "../layout/Alert";
import MessageForm from "../inbox/MessageForm";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute Route exact path="/dashboard" component={Dashboard} />
        <PrivateRoute
          Route
          exact
          path="/create-profile"
          component={CreateProfile}
        />
        <PrivateRoute
          Route
          exact
          path="/edit-profile"
          component={EditProfile}
        />
        <PrivateRoute
          Route
          exact
          path="/add-experience"
          component={AddExperience}
        />
        <PrivateRoute
          Route
          exact
          path="/add-education"
          component={AddEducation}
        />
        <PrivateRoute
          Route
          exact
          path="/create-message/:id/:name/:context"
          component={MessageForm}
        />
        <PrivateRoute Route exact path="/posts" component={Posts} />
        <PrivateRoute Route exact path="/inbox" component={Inbox} />
        <PrivateRoute Route exact path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;

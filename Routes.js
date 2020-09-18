import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TabScreen from "./components/TabScreen";

export default function Routes() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="register" component={Register} title="Register" />
        <Scene key="newsList" component={TabScreen} title="News" />
      </Stack>
    </Router>
  );
}

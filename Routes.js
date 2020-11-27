import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TabScreen from "./components/TabScreen";
import Jobs from "./pages/Jobs";
import Detail from "./components/Detail";

export default function Routes() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" initial />
        <Scene key="register" component={Register} title="Register" />
        <Scene key="newsList" component={TabScreen} title="News" />
        <Scene key="list" component={Jobs} title="Job List" />
        <Scene key="detail" component={Detail} title="detail" />
      </Stack>
    </Router>
  );
}

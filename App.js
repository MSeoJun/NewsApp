import React, { useEffect } from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import TabScreen from "./components/TabScreen";

export default function App() {

  // 폰트 로드는 app.js 에서 처리하면 탭별로 처리할 필요 없이 한번만 하면 될것같아.
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
    };

    loadFont();
  }, []);

  return <TabScreen />;
}

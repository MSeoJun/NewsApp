import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as userApi from "../api/user";

export default function Login() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [isClick, setIsClick] = useState(false);

  const LoginAction = async () => {
    setIsClick(true);

    if (userInfo.email && userInfo.password) {
      const users = await userApi.getUsers();

      const matchData = users.filter((user) => {
        return user.email === userInfo.email && user.password === userInfo.password;
      });

      if (matchData.length) {
        Alert.alert("성공, 로그인 성공!");
      } else {
        Alert.alert("실패, 이메일과 비밀번호를 다시 입력해주세요.");
      }
    }
  };

  return (
    <>
      <View style={styles.LogoContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={{ padding: 30, fontSize: 30 }}>로그인</Text>
      </View>
      <View style={styles.Container}>
        <Text style={styles.Text}>Email</Text>
        <TextInput
          style={styles.InputBox}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          underlineColorAndroid="rgba(0,0,0,0)"
          keyboardType="email-address"
          onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
        />
        {isClick && userInfo.email === "" ? (
          <Text style={{ color: "red" }}>Email을 입력해주세요</Text>
        ) : null}

        <Text style={styles.Text}>Password</Text>
        <TextInput
          style={styles.InputBox}
          placeholder="Password"
          placeholderTextColor="#ffffff"
          underlineColorAndroid="rgba(0,0,0,0)"
          keyboardType="email-address"
          onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
          secureTextEntry
        />
        {isClick && userInfo.password === "" ? (
          <Text style={{ color: "red" }}>Password를 입력해주세요</Text>
        ) : null}
        <TouchableOpacity style={styles.Button} onPress={LoginAction}>
          <Text style={styles.ButtonText}>로그인</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  LogoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  InputBox: {
    width: 300,
    height: 50,
    backgroundColor: "silver",
    borderRadius: 25,
    paddingHorizontal: 16,
    color: "#ffffff",
    fontSize: 16,
    marginVertical: 5,
  },
  Text: {
    width: 300,
    fontWeight: "700",
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 16,
  },
  Button: {
    width: 300,
    backgroundColor: "#1c313a",
    marginVertical: 10,
    paddingVertical: 13,
    borderRadius: 25,
  },
  ButtonText: {
    color: "#ffffff",
    textAlign: "center",
  },
});

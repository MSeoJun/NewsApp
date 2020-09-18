import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { getUsers } from "../api/user";
import { Actions } from "react-native-router-flux";

function Login() {
  const [isClicked, setIsClicked] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async () => {
    setIsClicked(true);

    if (userInfo.email && userInfo.password) {
      const userList = await getUsers();
      const user = userList.filter(
        (user) => user.email === userInfo.email && user.password === userInfo.password
      );

      if (!user.length) {
        alert("Failed");
      } else {
        Alert.alert("로그인 성공", JSON.stringify(user));
        // 로그인 성공시 뉴스 페이지로 이동
        // Alert.alert("로그인 성공", JSON.stringify(user), [
        //   {
        //     text: "OK",
        //     onPress: () => Actions.newsList(),
        //   },
        // ]);
      }
    }
  };

  const moveSignup = () => {
    Actions.register();
  };
  return (
    <>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={{ width: 90, height: 90 }} />
        <Text style={{ marginTop: 15 }}>Welcome to my app</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={{ width: 300, fontWeight: "500" }}>Email</Text>
        <TextInput
          style={styles.inputBox}
          backgroundColor="silver"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#ffffff"
          keyboardType="email-address"
          selectionColor="#fff"
          onChangeText={(text) =>
            setUserInfo(() => {
              return {
                ...userInfo,
                email: text,
              };
            })
          }
        />
        {isClicked && userInfo.email === "" ? (
          <Text style={{ color: "red" }}>Email 을 입력해주십시오.</Text>
        ) : null}
        <Text style={{ width: 300, fontWeight: "500" }}>Password</Text>
        <TextInput
          style={styles.inputBox}
          backgroundColor="silver"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          selectionColor="#fff"
          onChangeText={(text) =>
            setUserInfo(() => {
              return {
                ...userInfo,
                password: text,
              };
            })
          }
        />
        {isClicked && userInfo.password === "" ? (
          <Text style={{ color: "red" }}>Password 를 입력해주십시오.</Text>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomText}>
        <Text>Don't have account yet?</Text>
        <TouchableOpacity onPress={moveSignup}>
          <Text style={{ paddingLeft: 10 }}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#1c313a",
    width: 300,
    marginVertical: 10,
    paddingVertical: 13,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
  bottomText: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;

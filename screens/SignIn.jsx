import { Text, View, Image, TextInput, Button,TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import Context from "../context/Context";
import { signIn, signUp } from "../firebase";
export default () => {
  const {
    theme: { colors },
  } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [mode, setMode] = useState("signUp");
  const handlePress = async () => {
    if (mode === "signUp") {
        console.log(123);
      await signUp(email, password);
    }

    if (mode === "signIn") {
      await signIn(email, password);
    }
  };
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Text
        style={{ color: colors.foreground, fontSize: 24, marginBottom: 20 }}
      >
        Welcome to Whatsapp
      </Text>
      <Image
        source={require("../assets/welcome-img.png")}
        style={{ width: 180, height: 180 }}
        resizeMode="cover"
      ></Image>
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{
            borderBottomColor: colors.primary,
            borderBottomWidth: 2,
            width: 200,
          }}
        ></TextInput>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{
            borderBottomColor: colors.primary,
            borderBottomWidth: 2,
            width: 200,
            marginTop: 20,
          }}
        ></TextInput>
        <View style={{ marginTop: 20 }}>
          <Button
            title={mode === "signUp" ? "Sign Up" : "Login in"}
            disabled={!email ||!password}
            onPress={handlePress}
            color={colors.secondary}
          ></Button>
        </View>
        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={() =>
            mode === "signUp" ? setMode("signIn") : setMode("signUp")
          }
        >
          <Text style={{ color: colors.secondaryText }}>
            {mode === "signUp"
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

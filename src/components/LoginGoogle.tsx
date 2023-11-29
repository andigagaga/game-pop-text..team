import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useWarmUpBrowser } from "../hooks/useLogin";
import { useOAuth } from "@clerk/clerk-expo";

const LoginGoogle = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onSelectAuth = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();
      console.log("createdSessionId", createdSessionId);
      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../../assets/StartImage.jpg")}
        style={{ width: 250, height: 150 }}
      />
      <View style={{ marginBottom: 50 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Good Games
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            textTransform: "uppercase",
            marginTop: 20,
          }}
        >
          Account Login With{" "}
          <Text
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: 20,
              textDecorationLine: "underline",
            }}
          >
            Google
          </Text>
        </Text>
      </View>
      <Image
        source={require("../../assets/StartGame.png")}
        style={{ width: 100, height: 100 }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          width: 200,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
        onPress={onSelectAuth}
      >
        <Image
          source={require("../../assets/LogoGoogle.png")}
          style={{ width: 35, height: 35 }}
        />
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: 18,
          }}
        >
          Login With Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginGoogle;

import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LoginGoogle from "./LoginGoogle";
import LottieView from "lottie-react-native";
import { useAuth } from "@clerk/clerk-expo";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#5FBDFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Games Pop Text
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#96EFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieView
          source={require("../../assets/lottieFiles/Aniki Hamster.json")}
          loop={true}
          autoPlay={true}
          resizeMode="cover"
          style={{ width: 200, height: "auto" }}
        />

        {/* <TouchableOpacity
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              padding: 10,
              width: 100,
              height: 35,
              marginTop: 20,
              marginHorizontal: 20,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text>299</Text>
            <Image
              source={require("../../assets/image_diamond.png")}
              style={{ width: 30, height: 20 }}
            />
          </TouchableOpacity> */}
      </View>
      <View
        style={{
          flex: 7,
          backgroundColor: "#96EFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginGoogle />
      </View>
    </View>
  );
}

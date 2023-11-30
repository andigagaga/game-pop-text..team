import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";

// icon
import { AntDesign } from "@expo/vector-icons";

import { Avatar, AvatarImage, ButtonGroup } from "@gluestack-ui/themed";
import useUpdateProfile from "../hooks/useUpdateProfile";
import { useFetchAvatar } from "../hooks/useAvatar";
// import { ImageBackground } from "react-native";

export type AvatarData = {
  id: number;
  image_src: string;
  price: number;
  created_at: string;
  updated_at: string;
};

const StartGame = ({ navigation }: any) => {
  const [selected, setSelected] = useState<any>(null);
  const { isLoading, avatars } = useFetchAvatar();

  const goToDiamonds = () => {
    navigation.navigate("Diamonds");
  };

  return (
    // <ImageBackground
    //   source={require("../../assets/Background.jpg")}
    //   style={{ flex: 1 }}
    // >
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
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <LottieView
          source={require("../../assets/lottieFiles/Aniki Hamster.json")}
          autoPlay
          loop
          style={{ width: 80, height: 80 }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            borderRadius: 5,
            padding: 2,
            width: 100,
            height: 30,
            marginTop: 20,
            marginHorizontal: 20,
            display: "flex",
            flexDirection: "row",
          }}
          onPress={goToDiamonds}
        >
          <Text>299</Text>
          <Image
            source={require("../../assets/image_diamond.png")}
            style={{ width: 30, height: 20 }}
          />
          <AntDesign name="pluscircle" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 7,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#96EFFF",
        }}
      >
        <View>
          <ButtonGroup>
            <Avatar>
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
                style={{
                  padding: 50,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  textAlign: "center",
                  marginTop: 15,
                }}
              >
                Molusca_Bertulang
              </Text>
            </Avatar>
          </ButtonGroup>
        </View>
        <View
          style={{
            marginTop: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/StartImage.jpg")}
            style={{ width: 250, height: 200 }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              borderRadius: 5,
              padding: 10,
              width: 230,
              height: 35,
              marginTop: 20,
              marginHorizontal: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              Play Games
            </Text>
          </TouchableOpacity>
          <Image
            source={require("../../assets/StartGame.png")}
            style={{ width: 100, height: 100 }}
          />
        </View>
      </View>
    </View>
    // </ImageBackground>
  );
};

export default StartGame;

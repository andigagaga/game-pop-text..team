import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

// dummy
import Avatar from "../../src/dummyData/Avatar.json";
import { Input, InputField } from "@gluestack-ui/themed";

// icons
import { FontAwesome } from "@expo/vector-icons";
import { ButtonText } from "@gluestack-ui/themed";
import { useAuth } from "@clerk/clerk-expo";
import { AntDesign } from "@expo/vector-icons";
import api from "../libs/Api";
import { useFetchAvatar } from "../hooks/useAvatar";


const AvatarScreen = ({navigation} : any) => {

  // goToStartGame Route
  const goToStartGame = () => {
    navigation.navigate("StartGame");
  };
  
  const { signOut, isSignedIn } = useAuth();

  const {avatars, isLoading, isError, refetch} = useFetchAvatar();
  // console.log(avatars);

  


  const data = avatars?.data;
  

  if(isLoading) {
    return <Text>Loading...</Text>
  }

  if(isError) {
    <Text>Error...</Text>
  }

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
        <View>
          <LottieView
            source={require("../../assets/lottieFiles/Animation - 1701131567533.json")}
            autoPlay
            loop
            style={{
              width: 200,
              height: 200,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            width: "80%",
            height: "60%",
            alignItems: "center",
            borderColor: "red",
            borderWidth: 1,
            padding: 10,
            borderRadius: 100,
            backgroundColor: "#2D9596",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            CHOOSE YOUR AVATAR
          </Text>
          <FlatList
            style={{ flex: 1, marginTop: 20 }}
            data={data.data}
            numColumns={4}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Image
                  source={{ uri: item.image_src }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 150,
                    margin: 5,
                  }}
                />
              </TouchableOpacity>
            )}
          />

          <Input
            style={{
              borderWidth: 1,
              borderRadius: 10,
              width: 200,
              height: 50,
              marginTop: 20,
              alignSelf: "center",
              padding: 10,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
            }}
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <FontAwesome
              style={{ marginRight: 10 }}
              name="edit"
              size={24}
              color="black"
            />
            <InputField placeholder="Your Name" />
          </Input>
          <TouchableOpacity
            style={{
              marginVertical: 20,
              alignSelf: "center",
              width: 200,
              backgroundColor: "green",
              borderRadius: 10,
            }}
            onPress={goToStartGame}
          >
            <ButtonText
              style={{ color: "white", padding: 10, textAlign: "center" }}
            >
              Submit
            </ButtonText>
          </TouchableOpacity>
          {isSignedIn && (
            <View>
              <TouchableOpacity
                style={{
                  padding: 1,
                  backgroundColor: "red",
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "row",
                }}
                onPress={() => signOut()}
              >
                <AntDesign name="logout" size={24} color="black" />
                <Text
                  style={{ color: "black", padding: 5, fontWeight: "bold" }}
                >
                  Log Out
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default AvatarScreen;

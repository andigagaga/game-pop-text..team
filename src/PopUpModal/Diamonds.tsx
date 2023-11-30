import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";

import Modal from "react-native-modal";

// dummy
import Diamond from "../../src/dummyData/Diamond.json";

import LottieView from "lottie-react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Diamonds = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1,  backgroundColor: "#5FBDFF" }}>
      <Modal isVisible={true}>
        <View
          style={{
            backgroundColor: "#96EFFF",
            padding: 22,
            borderRadius: 4,
            alignItems: "center",
            flex: 1,
            marginHorizontal: 30,
            marginVertical: 100,
          }}
        >
          <LottieView
            source={require("../../assets/lottieFiles/Animation - 1701162573420.json")}
            loop={true}
            autoPlay={true}
            resizeMode="cover"
            style={{ width: 150, height: "auto" }}
          />
          <View>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Shops Diamond
            </Text>
            <View style={{ flex: 1, paddingVertical: 20 }}>
              <FlatList
                data={Diamond.diamonds}
                renderItem={({ item }) => (
                  <TouchableOpacity>
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#F4F27E",
                        padding: 10,
                        borderRadius: 10,
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          backgroundColor: "#161A30",
                          borderRadius: 10,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            padding: 1,
                            marginHorizontal: 10,
                          }}
                        >
                          <Text style={{ color: "white" }}>
                            {item.quantity}
                          </Text>
                          <Image
                            source={require("../../assets/image_diamond.png")}
                            style={{ width: 50, height: 30 }}
                          />
                          <Text style={{ color: "white" }}>
                            RP. {item.price}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                )}
              />
              <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 50 }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#BE3144",
                    padding: 5,
                    margin: 5,
                    borderRadius: 5,
                    borderColor: "black",
                    borderWidth: 2,
                    width: 100,
                  }}
                  onPress={() => navigation.goBack()}
                >
                  <Text style={{ color: "white" }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#40F8FF",
                    padding: 5,
                    margin: 5,
                    borderRadius: 5,
                    borderColor: "black",
                    borderWidth: 2,
                    width: 100,
                  }}
                >
                  <Text style={{ color: "white" }}>Purchase</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Diamonds;

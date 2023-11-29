import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { Image } from 'react-native'

const QuizGame = () => {
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
      <TouchableOpacity
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
      </TouchableOpacity>
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
        
    </View>
  </View>
  )
}

export default QuizGame
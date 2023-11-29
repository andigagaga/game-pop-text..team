import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../components/Home";
import StartGame from "../components/StartGame";
import QuizGame from "../components/QuizGame";
import AvatarScreen from "../components/AvatarScreen";
import { useAuth } from "@clerk/clerk-expo";
import Diamonds from "../components/Diamonds";

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <>
      <Stack.Navigator>
        {isLoaded && !isSignedIn ? (
          <Stack.Group>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,

                title: "My home",
              }}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="Avatar"
              component={AvatarScreen}
              options={{ headerShown: false, title: "Avatar" }}
            />
            <Stack.Screen
              name="StartGame"
              component={StartGame}
              options={{
                headerShown: false,

                title: "StartGame",
              }}
            />
            <Stack.Screen
              name="Diamonds"
              component={Diamonds}
              options={{
                headerShown: false,

                title: "Diamonds",
              }}
            />
           
          </Stack.Group>
        )}
      </Stack.Navigator>
    </>
  );
};

export default NavigationStack;

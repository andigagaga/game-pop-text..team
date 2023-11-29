import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "../gameText/src/navigation/AppNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import * as SecureStore from "expo-secure-store";
import { ClerkProvider } from "@clerk/clerk-expo";

const CLERK_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (error) {
      console.log("error getToken", error);
      return null;
    }
  },
  async saveToken(key: string, token: string) {
    try {
      return SecureStore.setItemAsync(key, token);
    } catch (error) {
      return;
    }
  },
};

export default function App() {
  return (
    <ClerkProvider publishableKey={CLERK_KEY!} tokenCache={tokenCache}>
      <QueryClientProvider client={client}>
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

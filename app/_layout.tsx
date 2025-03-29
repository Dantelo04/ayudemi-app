import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "DMSans-Black": require("../assets/fonts/DMSans-Black.ttf"),
    "DMSans-Bold": require("../assets/fonts/DMSans-Bold.ttf"),
    "DMSans-ExtraBold": require("../assets/fonts/DMSans-ExtraBold.ttf"),
    "DMSans-ExtraLight": require("../assets/fonts/DMSans-ExtraLight.ttf"),
    "DMSans-Light": require("../assets/fonts/DMSans-Light.ttf"), 
    "DMSans-Medium": require("../assets/fonts/DMSans-Medium.ttf"), 
    "DMSans-Regular": require("../assets/fonts/DMSans-Regular.ttf"), 
    "DMSans-SemiBold": require("../assets/fonts/DMSans-SemiBold.ttf"), 
    "DMSans-Thin": require("../assets/fonts/DMSans-Thin.ttf"), 
  });

  useEffect(() => {
    if(error) throw new Error("Failed to load fonts");

    if(fontsLoaded) SplashScreen.hideAsync();
  
  }, [fontsLoaded, error])

  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
  );
}

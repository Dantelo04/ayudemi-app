import Button from "@/components/Button";
import { ColorStyles } from "@/styles/ColorStyles";
import { TextBold, TextMedium, Title } from "@/styles/TextStyles";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{height: '100%', width: '100%', backgroundColor: ColorStyles.white}}>
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 0,
        height: '100%',
        backgroundColor: ColorStyles.white,
      }}
    >
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: ColorStyles.lightBrandBlue,
      }}>
      </View>
      <View style={{
        width: '100%', 
        backgroundColor: ColorStyles.white, 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingTop: 32,
        paddingBottom: 16,
        paddingHorizontal: 16,
        gap: 32,
        }}>
        <Title size={48}>Empieza a usar Ayudemi ya!</Title>
        <Button style="large" onPress={()=> router.push('/home')}>Continuar</Button>
      </View>
      <StatusBar backgroundColor={'white'} style='dark'></StatusBar>
    </View>
    </SafeAreaView>
  );
}

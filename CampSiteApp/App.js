import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Colors from './constants/colors';
import { useCallback } from 'react';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
//Make sure the fonts are loaded
    const [fontsLoaded, fontError] = useFonts({
        mountain: require("./assets/fonts/Mountain.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
      if(fontsLoaded || fontError){
        await SplashScreen.hideAsync();
      }
    })

    //Makes the font loaded
    let screen = <HomeScreen />;

    if(!fontsLoaded && !fontError) {
      return null;
    }
    else{
        return(
            <>
              <StatusBar style="light"/>
              <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
            </>
        );

    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});

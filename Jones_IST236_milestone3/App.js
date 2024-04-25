import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts} from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import  Colors  from './constants/colors';
import { Entypo, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";




import AdventureScreen from './screens/AdventureScreen';
import CreatureScreen from './screens/CreatureScreeen';
import HomeScreen from './screens/HomeScreen';
import WiardStatsScreen from './screens/WizardStatsScreen';
import LandingScreen from './screens/LandingScreen';

import AdditionLevelsScreen from './screens/AdditionLevelsSceen';
import SubtractionLevelsScreen from './screens/SubtractionLevelScreen';
import DivisionLevelsScreen from './screens/DivisionLevelsScreen';
import MultiplicationLevelsScreen from './screens/MultiplicationLevelsScreen';




import EquationScreenAddition from './screens/EquationScreenAddition';
import EquationScreenSubtraction from './screens/EquationScreenSubtraction';
import EquationScreenDivision from './screens/EquationScreenDivision';
import EquationScreenMultiplication from './screens/EquationScreenMultiplication';


import AppContextProvider from "./store/app-context";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();




function TabsNavigator(){
  return(
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "playfairBold"
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500
        }
      }}
    >
    <Tabs.Screen  
          name="HomeScreen"
          component={HomeScreen}
          options = {{
            headerShown: false,
            tabBarIcon: ({ color, size}) =>(
              <Entypo name="home" size={size} color = {color}/>
            ),
            tabBarLabel: "Home",
          }}
          />

        <Tabs.Screen  
          name="AdventureScreen"
          component={AdventureScreen}
          options = {{
            headerShown: false,
            tabBarIcon: ({ color, size}) =>(
              <MaterialCommunityIcons name="road-variant" size={size} color = {color}/>
            ),
            tabBarLabel: "Adventure",
          }}
          />

    <Tabs.Screen  
          name="WiardStatsScreen"
          component={WiardStatsScreen}
          options = {{
            headerShown: false,
            tabBarIcon: ({ color, size}) =>(
              <MaterialCommunityIcons name="wizard-hat" size={size} color = {color}/>
            ),
            tabBarLabel: "Wizard Stats",
          }}
          />

      <Tabs.Screen  
          name="CreatureScreen"
          component={CreatureScreen}
          options = {{
            headerShown: false,
            tabBarIcon: ({ color, size}) =>(
              <MaterialIcons name="egg" size={size} color = {color}/>
            ),
            tabBarLabel: "Creature",
          }}
          />
    </Tabs.Navigator>

  );

}

function TopStackNavigator(){
  return(
     <Stack.Navigator
  initialRouteName="TabsNavigator"
  screenOptions = {{
      headerTintColor: Colors.primary300,
      headerStyle:  {backgroundColor: Colors.primary500},
      contentStyle: {backgroundColor: "white"},
  }}>


      <Stack.Screen
        name="TabsNavigator"
        component={TabsNavigator}
        options = {{
          headerShown :false,
        }}
      />
       <Stack.Screen
        name="SubtractionLevelsScreen"
        component = {SubtractionLevelsScreen}
        options= {{
          headerBackTileVisible: false,
        }}
      />

      <Stack.Screen
        name="DivisionLevelsScreen"
        component = {DivisionLevelsScreen}
        options= {{
          headerBackTileVisible: false,
        }}
      />

      <Stack.Screen
        name="MultiplicationLevelsScreen"
        component = {MultiplicationLevelsScreen}
        options= {{
          headerBackTileVisible: false,
        }}
      />
      <Stack.Screen
        name="AdditionLevelsScreen"
        component = {AdditionLevelsScreen}
        options= {{
          headerBackTileVisible: false,
        }}
      />

  </Stack.Navigator>
  );
 
}



export default function App() {
  const [fontsLoaded, fontError] = useFonts({
      copyduck: require("./assets/fonts/Copyduck.ttf"),
      sunny: require("./assets/fonts/SunnySpellsBasic.ttf"),
      //playfairItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
      //nolluqa: require("./assets/fonts/NolluqaRegular.otf"),

});

    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || fontError){
        await SplashScreen.hideAsync();
      }
    });

    if(!fontsLoaded && !fontError) {
      return null;
    } else{
  return (
        <>
          <StatusBar style ="light"/>
<AppContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="LandingScreen"
              screenOptions = {{
                  headerTintColor: Colors.primary300,
                  headerStyle:  {backgroundColor: Colors.primary500},
                  contentStyle: {backgroundColor: "white"},
              }}>
                <Stack.Screen
                    name="LandingScreen"
                    component={LandingScreen}
                    options = {{
                      headerShown :false,
                    }}
                  />
                  <Stack.Screen
                    name="TopStackNavigator"
                    component={TopStackNavigator}
                    options = {{
                      headerShown :false,
                    }}
                  />
                  <Stack.Screen
                    name="EquationScreenAddition"
                    component = {EquationScreenAddition}
                    options= {{
                      headerBackTileVisible: false,
                    }}
                  />
                      <Stack.Screen
                    name="EquationScreenSubtraction"
                    component = {EquationScreenSubtraction}
                    options= {{
                      headerBackTileVisible: false,
                    }}
                  />

                    <Stack.Screen
                    name="EquationScreenDivision"
                    component = {EquationScreenDivision}
                    options= {{
                      headerBackTileVisible: false,
                    }}
                  />

                    <Stack.Screen
                    name="EquationScreenMultiplication"
                    component = {EquationScreenMultiplication}
                    options= {{
                      headerBackTileVisible: false,
                    }}
                  />

              </Stack.Navigator>
          </NavigationContainer>

</AppContextProvider>

        </>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

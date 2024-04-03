import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts} from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookmarksScreen from './screens/BookmarksScreen';
import UsScreen from './screens/UsScreen';
import WorldScreen from './screens/WorldScreen';
import MoviesScreen from './screens/MoviesScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';
import { useCallback } from 'react';
import  Colors  from './constants/colors';
import { Entypo, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import BookmarksContextProvider from './store/context/bookmarks-context';


//Creates constants for all the screens 
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

//Makes the Drawer Navigation of the screen 
function DrawerNavigator(){
  return (

    //The basic design of the outter drawer
    //And screens connected to the drawer
    <Drawer.Navigator
      initialRouteName='Listings'
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: "white",
        headerTitleStyle :{
          fontFamily: "nolluqa",
          fontSize: 40,
          color: Colors.accent800
        },
        screenContainerStyle: {backgroundColor: Colors.primary300},
        drawerContentStyle: {backgroundColor: Colors.primary500},
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      
      <Drawer.Screen
        name = "Navigator"
        component={TabsNavigator}
        options={{
          title: "Navigator",
          drawerLabel: "Navigator",
          drawerIcon: ({ color, size}) => (
            <Entypo name="list" size ={size} color={color}/>),
        }}
      />
      <Drawer.Screen 
        name="Bookmarked News"
        component={BookmarksScreen}
        options={{
          title: "Saved Listings",
          drawerLabel: "Bookmarked News",
          drawerIcon: ({color,size}) => (
            <Entypo name="bookmark" size={size} color={color}/>
          ),
        }}
        />
    </Drawer.Navigator>
  );
}

//Creates the tabs at the bottom of the screen
function TabsNavigator(){
  return(

    //The basic styling of the tabs
    //And the screen connected the tabs
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
          name="Us News"
          component={UsScreen}
          options = {{
            headerShown: false,
            tabBarIcon: ({ color, size}) =>(
              <FontAwesome5 name="flag-usa" size={size} color = {color}/>
            ),
            tabBarLabel: "Us News",
          }}
          />

    <Tabs.Screen  
          name="World News"
          component={WorldScreen}
          options = {{
            headerShown: false,
            tabBarIcon: ({ color, size}) =>(
              <FontAwesome5 name="newspaper" size={size} color = {color}/>
            ),
            tabBarLabel: "World News",
          }}
          />

    <Tabs.Screen  
          name="Movie News"
          component={MoviesScreen}
          options = {{
            headerShown: false,
            tabBarIcon: ({ color, size}) =>(
              <MaterialIcons name="local-movies" size={size} color = {color}/>
            ),
            tabBarLabel: "Movie News",
          }}
          />


    </Tabs.Navigator>

  );

}


export default function App() {

  //Make sure the fonts load before showing the screens
  const [fontsLoaded, fontError] = useFonts({
      playfair: require("./assets/fonts/Playfair.ttf"),
      playfairBold: require("./assets/fonts/PlayfairBold.ttf"),
      playfairItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
      nolluqa: require("./assets/fonts/NolluqaRegular.otf"),

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
    //The Stack navigation of the screen 
    //And the screens that have access to the Stack navigation
        <>
          <StatusBar style ="light"/>
          <BookmarksContextProvider>

          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="DrawerScreen"
              screenOptions = {{
                  headerTintColor: Colors.primary300,
                  headerStyle:  {backgroundColor: Colors.primary500},
                  contentStyle: {backgroundColor: "black"},
              }}>
                  <Stack.Screen
                    name="DrawerScreen"
                    component={DrawerNavigator}
                    options = {{
                      headerShown :false,
                    }}
                  />
                  <Stack.Screen
                    name="NewsDetail"
                    component = {NewsDetailScreen}
                    options= {{
                      headerBackTileVisible: false,
                    }}
                  />
              </Stack.Navigator>
          </NavigationContainer>
          </BookmarksContextProvider>


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

import {useSafeAreaInsets} from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
    View,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Pressable,
    Platform,
    Text,
    Modal,
    Button,
    useWindowDimensions,
} from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import { useState } from "react";
import WheelPicker from "react-native-wheely";
import NavButton from "../components/NavButton";


function HomeScreen() {
        const insets = useSafeAreaInsets();

        //Code for the check in 

        //Makes the date today
        const [checkIn, setCheckIn] = useState(new Date());
        const [showCheckIn, setShowCheckIn] = useState(false);

        //Shows the wheel
        function showCheckInPicker(){
            setShowCheckIn(true);
        }

        //Hides the wheel
        function hideCheckInPicker(){
            setShowCheckIn(false);
        }

        //Changes the wheel for andriod
        function onChangeCheckIn(event, selectedDate){
            const currentDate = selectedDate;
            if(Platform.OS === "android"){
                hideCheckInPicker(true);
            }
            setCheckIn(currentDate);
        }


        //Check for the check out
        //Makes the date today
        const [checkOut, setCheckOut] = useState(new Date());
        const [showCheckOut, setShowCheckOut] = useState(false);

                //Shows the wheel
        function showCheckOutPicker(){
            setShowCheckOut(true);
        }

        //Hides the wheel
        function hideCheckOutPicker(){
            setShowCheckOut(false);
        }

                //Changes the wheel for andriod
        function onChangeCheckOut(event, selectedDate){
            const currentDate = selectedDate;
            if(Platform.OS === "android"){
                hideCheckOutPicker(true);
            }
            setCheckOut(currentDate);
        }


        //Counter  for the gust
        const guestCounts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        const [numGuests, setNumGuests] = useState(0);
        const [showNumGuests, setShowNumGusts] = useState(false);


        //Shows the wheel
        function showNumGuestPicker() {
            setShowNumGusts(true);
        }

        //Hides the wheel
        function hideNumGuestsPicker(){
            setShowNumGusts(false);
        }

        //Changes the state to be the index
        function onChangeNumGuests(index){
            setNumGuests(index);
        }


        //Counter for the Sites
        const siteCounts = [1 , 2 , 3 , 4, 5 ];
        const [numSites, setNumSites] = useState(0);
        const [showNumSites, setShowNumSites] = useState(false);

        //Shows the wheel
        function showNumSitesPicker(){
            setShowNumSites(true);
        }

         //Hides the wheel
        function hideNumSitesPicker(){
            setShowNumSites(false);
        }

        //Changes the state to be the index
        function onChangeNumSites(index){
            setNumSites(index);
        }


        //Sets the state
        const [result, setResults] = useState("");

        //Sets up the print statement 
        function onReserveHandler(){
            let res = `Check In: \t\t${checkIn.toDateString()}\n`
            res = res + `Check Out: \t\t${checkOut.toDateString()}\n`
            res = res + `Number of Guests: \t\t${guestCounts[numGuests]}\n`
            res = res + `Number of Siutes: \t\t${siteCounts[numSites]}\n`
            setResults(res);
        }


        //Makes the constate for the dimenations 
        const {width, height} = useWindowDimensions();

        const dateLabelFlex = {
            fontSize: width *0.1
        }

        const dateTextFlex = {
            fontSize: width * 0.05,
        }

        return (

            //Make the background 
            <ImageBackground
                source = {require("../assets/images/camping.jpg")}
                resizeMode="cover"
                style = {styles.rootContainer}
                imageStyle = {styles.backgroundImage}
            >
                <View
                
                style={[
                    styles.rootContainer,
                    {
                        paddingTop: insets.top,
                        paddingBottom: insets.bottom,
                        paddingLeft: insets.left,
                        paddingRight: insets.right,

                    }
                ]}
                >
                {/**Allow  for scoll */}
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.titleContainer}>
                        <Title>Sun Set Camp Site</Title>
                    </View>

                {/**Contains both the days and clicked make the date picker */}
                    <View style={styles.rowContainer}>
                        <View style = {styles.dateContainer}>
                            <Text style = {[styles.dateLabel, dateLabelFlex]}>Check In: </Text>
                            <Pressable
                                onPress = {showCheckInPicker}>
                                <Text style = {[styles.dateText, dateTextFlex]}>{checkIn.toDateString()}</Text>
                            </Pressable>
                        </View>


                    <View>
                        {showCheckIn && Platform.OS === "android" && (
                            <DateTimePicker
                                testID = "dateTimePickerCheckInAndroid"
                                value = {checkIn}
                                mode = {"date"}
                                display = "spinner"
                                onChange = {onChangeCheckIn}
                            />
                        )}

                        {showCheckIn && Platform.OS === "ios" &&(
                            <Modal 
                                animationType= "slide"
                                transparent = {true}
                                supportedOrientations={["portrait", "landscape"]}
                            >
                                <View  style = {styles.centeredModalView}>
                                <View  style = {styles.modalView}>
                                    <DateTimePicker
                                        testID = "dateTimePickerCheckInAndroid"
                                        value = {checkIn}
                                        mode = {"date"}
                                        display = "spinner"

                                        onChange = {onChangeCheckIn}/>
                                    <Button title="Confirm" onPress={hideCheckInPicker}/>     
                                
                                </View>
                                </View>
                            </Modal>
                        )}
                    </View>




                    <View style={styles.rowContainer}>
                        <View style = {styles.dateContainer}>
                            <Text style = {[styles.dateLabel, dateLabelFlex]}>Check Out: </Text>
                            <Pressable
                                onPress = {showCheckOutPicker}>
                                <Text style = {[styles.dateText, dateTextFlex]}>{checkOut.toDateString()}</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View>
                        {showCheckOut && Platform.OS === "android" && (
                            <DateTimePicker
                                testID = "dateTimePickerCheckOutAndroid"
                                value = {checkOut}
                                mode = {"date"}
                                display = "spinner"
                                onChange = {onChangeCheckOut}
                            />
                        )}

                        {showCheckOut && Platform.OS === "ios" &&(
                            <Modal 
                                animationType= "slide"
                                transparent = {true}
                                supportedOrientations={["portrait", "landscape"]}
                            >
                                <View style = {styles.centeredModalView}>
                                <View style = {styles.modalView}>
                                    <DateTimePicker
                                        testID = "dateTimePickerCheckOutAndroid"
                                        value = {checkOut}
                                        mode = {"date"}
                                        display = "spinner"

                                        onChange = {onChangeCheckOut}/>
                                    <Button title="Confirm" onPress={hideCheckOutPicker}/>     
                                
                                </View>
                                </View>
                            </Modal>
                        )}
                    </View>




                            
                    </View>




                {/**Contains the number guest with the wheel  with a modal*/}

                    <View style={styles.rowContainer}>
                        <Text style = {[styles.dateLabel, dateLabelFlex]}>Number of Guests: </Text>
                            <Pressable onPress={showNumGuestPicker}>
                                <View style = {styles.dateContainer}>
                                    <Text style={[styles.dateText, dateTextFlex]}>
                                        {guestCounts[numGuests]}
                                    </Text>
                                </View>
                            </Pressable>

                        <Modal
                        animationType="slide"
                        transparent = {true}
                        visible = {showNumGuests}
                        supportedOrientations={["portrait","landscape"]}
                        >
                            <View style = {styles.centeredModalView}>
                                <View style = {styles.modalView}>
                                <Text style = {[styles.dateText, dateTextFlex]}>Enter Number of Guests</Text>
                                <WheelPicker
                                    selectedIndex = {numGuests}
                                    options = {guestCounts}
                                    onChange = {onChangeNumGuests}
                                    containerStyle = {{width: 200}}
                                />
                            <Button title ="Confirm" onPress={hideNumGuestsPicker}/>
                                </View>
                            </View>
                        </Modal>
                            
                    </View>


                {/**Contains the number guest with the wheel with a modal*/}

                    <View style={styles.rowContainer}>
                        <Text style = {[styles.dateLabel, dateLabelFlex]}>Number of Sites: </Text>
                            <Pressable onPress={showNumSitesPicker}>
                                <View style = {styles.dateContainer}>
                                    <Text style={[styles.dateText, dateTextFlex]}>
                                        {siteCounts[numSites]}
                                    </Text>
                                </View>
                            </Pressable>

                        <Modal
                        animationType="slide"
                        transparent = {true}
                        visible = {showNumSites}
                        supportedOrientations={["portrait","landscape"]}
                        >
                            <View style = {styles.centeredModalView}>
                                <View style = {styles.modalView}>
                                <Text style = {[styles.dateText, dateTextFlex]}>Enter Number of Sites</Text>
                                <WheelPicker
                                    selectedIndex = {numSites}
                                    options = {siteCounts}
                                    onChange = {onChangeNumSites}
                                    containerStyle = {{width: 200}}
                                />

                                <Button title ="Confirm" onPress={hideNumSitesPicker}/>
                                </View>
                            </View>
                        </Modal>
                            
                    </View>

                {/**The button and the results container */}

                    <View style = {styles.buttonContainer}>
                        <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
                    </View>

                    <View style={styles.resultsContainer}>
                        <Text style = {[styles.results, dateLabelFlex]}>{result}</Text>
                    </View>

                </ScrollView>

                </View>
            </ImageBackground>
        );


}


export default HomeScreen;





const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    backgroundImage:{
        opacity: 0.3,
    },
    titleContainer:{
        padding: 7,
        marginVertical: 20,
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary500,
        backgroundColor: Colors.primary300,

    },
    scrollContainer:{
        flex:1,
        width:3000,
        maxWidth:"90%"
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 20,
        marginBottom: 20,
        
    },
    dateContainer:{
        backgroundColor: Colors.primary300o5,
        borderColor: Colors.accent500,
        borderStyle: "dotted",
        borderWidth: 5,
        marginTop:10,
        padding: 5,
    },
    dateLabel: {
        fontSize:100,
        color: Colors.primary500,
        fontFamily: "mountain",
        textShadowColor :Colors.accent500,
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
    },
    dateText:{
        color: Colors.primary800,
        fontSize: 20,
        fontWeight: "bold",
    },
    centeredModalView:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },

    modalView:{
        margin: 20,
        backgroundColor: Colors.primary300,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        alignItems: "center", 
    },
    results: {
        textAlign: "center",
        color: Colors.primary500,
        fontFamily: "mountain",
        textShadowColor: Colors.accent500,
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
    }
  });

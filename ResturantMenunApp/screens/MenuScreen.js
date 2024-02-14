import { useSafeAreaInsets} from "react-native-safe-area-context";
import { View, StyleSheet, Text, FlatList  } from "react-native";
import Title from "../componets/Title";
import NavButton from "../componets/NavButton";
import MenuItems from "../componets/MenuItems";

function MenuScreen(props){
const insets = useSafeAreaInsets();

    const [menuItems, setMenuItems] = useState([
        {
            name: "1 Dozen chedder Bay Bisckets",
            image: require("../assets/images/bis.jpg"),
            price: "$6.99",
            ide: 1,
        },
        {
            name: "Shrimp Linguini Alfredio ",
            image: require("../assets/images/lin.jpg"),
            price: "$17.00",
            ide: 2,
        },
        {
            name: "Snow Crab Leg (1/2 pound)",
            image: require("../assets/images/leg.jpg"),
            price: "$14.00",
            ide: 3,
        },
        {
            name: "Southwest Shrimp Bowl",
            image: require("../assets/images/bowl.jpg"),
            price: "$16.69",
            ide: 4,
        },

        {
            name: "Chocolate Wave",
            image: require("../assets/images/cake.jpg"),
            price: "$8.49",
            ide: 5,
        }
    ]);


    return (
        <View style={[
                styles.rootContainer,
                {
                    paddingTop: insets.top,
                    paddingBottom:insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight:insets.right,
                }
                ]
            }>
                    <View style ={styles.titleContainer}>
                        <Title> Menu</Title>
                    </View>

                <View style ={styles.listContainer}>
                    <FlatList
                        data = {menuItems}

                        keyExtractor={(item) => item.id}

                        alwaysBounceVertical = {false}
                        showsVerticalScrollIndicator = {false}
                        renderItem={(itemData) => {
                                return(
                                    <MenuItems
                                        name={itemData.item.name}
                                        image={itemData.item.image}
                                        price={itemData.item.price}
                                    />

                                );
                        }}

                    />

                </View>

                    <View style ={styles.buttonContainer}>
                        <NavButton onPress={props.onNext}> View Menu</NavButton>
                    </View>


            </View>
    )


}

export default MenuScreen;

const styles = StyleSheet.create({

    rootContainer: {
        flex: 1,
        alignItems: "center",
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
    },
    listContainer: {
        flex: 7,
    width: 300,
    },
    buttonContainer: {
        flex: 1
    },

});
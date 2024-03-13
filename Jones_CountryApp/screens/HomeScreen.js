import {View, Text, FlatList } from "react-native";
import {COUNTRY} from "../data/dummy-data"
import DestinationGridTile from "../componets/DestinationGridTile";


function HomeScreen(props) {
        function renderStateItem(itemData) {
            function pressHandler() {
                props.navigation.navigate("CountryOverviewScreen", {
                    countryId: itemData.item.id,
                });
            }

            return(
                <DestinationGridTile
                    name={itemData.item.name}
                    url={itemData.item.url}
                    onPress={pressHandler}
                />
            );
        }

    return (
        <View>
            <FlatList
            data={COUNTRY}
            keyExtractor={(item) =>{
                return item.id;
            }}
            renderItem={renderStateItem}
            numColumns={2}
            />
        </View>
    );
}


export default HomeScreen;



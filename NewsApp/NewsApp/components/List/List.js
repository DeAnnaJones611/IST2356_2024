import { View, StyleSheet, FlatList } from "react-native";
import ListingItem from "./ListingItem";

//What is passed when list is called
function List(props) {

  //Function gets all the items needed from the data file
  //Puts it to key words for use
  function renderListingItem(itemData) {
    const listingItemProps = {
      id: itemData.item.id,
      headline: itemData.item.headline,
      date: itemData.item.date,
      author: itemData.item.author,
      agency: itemData.item.agency,
      imageUrl: itemData.item.imageUrl,
      description: itemData.item.description,
      listIndex: itemData.index,
    };
    //Retruns the Compoent of list item with all the information 
    return <ListingItem {...listingItemProps} />;
  }
//Creates a flat list of all the items
  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderListingItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black"
  },
  backgroundImage: {
    opacity: 0.1,
  },
});

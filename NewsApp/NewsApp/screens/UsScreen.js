import List from "../components/List/List";
import { LISTINGS } from "../data/dummy_data";

  //Find the data with the  us type
  //Prints the item wout with the list componet format
function UsScreen() {
  const type = "US";
  const displayedListings = LISTINGS.filter((listingItem) => {
    return listingItem.type === type;
  });

  return <List items={displayedListings} />;
}

export default UsScreen;

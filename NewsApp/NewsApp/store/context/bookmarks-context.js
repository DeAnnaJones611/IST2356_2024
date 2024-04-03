import { createContext, useState } from "react";

export const BookmarksContext = createContext({
    ids: [],
    addFavoite: (id) => {},
    removeFavorite: (id) => {},
});

function BookmarksContextProvider({ children }){

    const [bookmarkIds, setBookmarkIds] = useState([]);

    function addFavorite(id){
        setBookmarkIds((currentBookmarksIds) => {
            return [...currentBookmarksIds, id];
        });
    }

    function removeFavorite(id){
        setBookmarkIds((currentBookmarksIds) => {
            return currentBookmarksIds.filter((bookId) => bookId != id);
        });
    }

    const value = {
        ids: bookmarkIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>

}
export default BookmarksContextProvider;


export function selectBook(book){
    return{
        type : 'BOOK_SELECTED',
        payload : book,
    };
}

export function selectFriend(friend){
    return{
        type : 'FRIEND_SELECTED',
        payload : friend,
    };
}
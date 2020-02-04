import React , { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook , selectFriend } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)} 
                    className='list-group-item'>
                    {book.title}
                </li>
            );
        });
    }

    renderFriendList(){
        return this.props.friends.map((friend) => {
            return (
                <li 
                    key={friend.name}
                    onClick={() => this.props.selectFriend(friend)} 
                    className='list-group-item'>
                    {friend.name}
                </li>
            );
        });
    }
    
    render() {
        return (
            <ul className='list-group col-sm-4'>
                <div>{this.renderList()}</div>
                <div>{this.renderFriendList()}</div>
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        books : state.book,
        friends : state.friend,
    };
} 

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        selectBook : selectBook,
        selectFriend : selectFriend,
     }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
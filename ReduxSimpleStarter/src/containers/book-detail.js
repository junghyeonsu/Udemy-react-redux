import React , {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book && !this.props.friend){
            return <div>Select a book or friend to get started.</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>책은 : {this.props.book.title}</div>
                <div>사람은 : {this.props.friend.name}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        book : state.activeBook,
        friend : state.activeFriend,
    };
}

export default connect(mapStateToProps)(BookDetail);
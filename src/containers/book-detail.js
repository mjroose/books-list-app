import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book){
      return(
        <div>Select a book to get started.</div>
      );
    }

    return(
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>{this.props.book.pages} pages</div>
      </div>
    );
  }
}

// use this function to create a piece of state
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

// anything returned from this function will end up as props
// on the BookList container
// use this to modify an existing state
// function mapDispatchToProps(dispatch) {
//   // whenever selectBook is called, the result should be passed to all of our reducers
//   return bindActionCreators({selectBook: selectBook}, dispatch);
// }

// makes our container, BookList, aware of the new dispatch method, selectBook()
// and makes selectBook available as a prop of BookList
export default connect(mapStateToProps)(BookDetail);